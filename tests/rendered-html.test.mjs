import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://efe-onaran.example/", {
      headers: {
        accept: "text/html",
        host: "efe-onaran.example",
        "x-forwarded-host": "efe-onaran.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the academic website and social metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Efe Onaran \| Probability &amp; Stochastic Topology<\/title>/i);
  assert.match(html, /Hi! I am a visiting scholar/);
  assert.match(html, /Seeking tenure-track faculty positions/);
  assert.match(html, /Journal articles and preprints/);
  assert.match(html, /efe-onaran-google\.jpg/);
  assert.doesNotMatch(html, /https:\/\/efe-onaran\.example\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("ships the portrait, CV, and social card without starter assets", async () => {
  await Promise.all([
    access(new URL("public/efe-onaran-google.jpg", projectRoot)),
    access(new URL("public/efe-onaran-cv.pdf", projectRoot)),
    access(new URL("public/og.png", projectRoot)),
  ]);

  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));

  const packageJson = await readFile(new URL("package.json", projectRoot), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
