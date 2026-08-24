import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

const siteRoot = new URL("../dist/client/", import.meta.url);

async function localReferenceExists(reference) {
  if (
    reference.startsWith("#") ||
    reference.startsWith("mailto:") ||
    reference.startsWith("tel:")
  ) {
    return true;
  }

  const target = new URL(reference, "https://efeonaran.github.io/");
  if (target.origin !== "https://efeonaran.github.io") return true;

  const relativePath = decodeURIComponent(target.pathname).replace(/^\/+/, "");
  const fileUrl = new URL(relativePath || "index.html", siteRoot);

  try {
    const fileStats = await stat(fileUrl);
    if (fileStats.isFile()) return true;
    await access(new URL("index.html", fileUrl.href.endsWith("/") ? fileUrl : `${fileUrl.href}/`));
    return true;
  } catch {
    try {
      await access(new URL(`${relativePath.replace(/\/$/, "")}/index.html`, siteRoot));
      return true;
    } catch {
      return false;
    }
  }
}

test("creates a complete GitHub Pages artifact", async () => {
  const homeHtml = await readFile(new URL("index.html", siteRoot), "utf8");
  const courseHtml = await readFile(
    new URL("teaching/optimum-control-systems/index.html", siteRoot),
    "utf8",
  );

  assert.match(homeHtml, /<title>Efe Onaran<\/title>/i);
  assert.match(homeHtml, /Research, publications, teaching, and contact information/);
  assert.match(courseHtml, /<title>Optimum Control Systems \| Efe Onaran<\/title>/i);

  await Promise.all([
    access(new URL(".nojekyll", siteRoot)),
    access(new URL("efe-onaran-cv.pdf", siteRoot)),
    access(new URL("ising-disks-topology-preserving-glauber-dynamics.pdf", siteRoot)),
    access(new URL("optimum-control-systems-syllabus.pdf", siteRoot)),
  ]);
});

test("all local links and media references resolve inside the static site", async () => {
  const pages = [
    new URL("index.html", siteRoot),
    new URL("teaching/optimum-control-systems/index.html", siteRoot),
  ];

  for (const page of pages) {
    const html = await readFile(page, "utf8");
    const references = [
      ...html.matchAll(/(?:href|src)="([^"]+)"/g),
    ].map((match) => match[1]);

    for (const reference of new Set(references)) {
      assert.equal(
        await localReferenceExists(reference),
        true,
        `Missing local target ${reference} referenced by ${page.pathname}`,
      );
    }
  }
});
