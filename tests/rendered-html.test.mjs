import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://efe-onaran.example${path}`, {
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
  assert.match(html, /<title>Efe Onaran<\/title>/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/eonaran\.github\.io\/"/i);
  assert.match(html, /"@type":"ProfilePage"/);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /https:\/\/eonaran\.github\.io\/#efe-onaran/);
  assert.match(html, /Hi! I am a postdoctoral researcher/);
  assert.match(html, /visiting scholar in the Department of Mathematics, where I/);
  assert.match(html, /taught courses in 2024 and 2025/);
  assert.match(html, /"jobTitle":"Postdoctoral Researcher"/);
  assert.doesNotMatch(html, /Visiting Scholar and Postdoctoral Researcher/);
  assert.match(html, /Journal articles and preprints/);
  assert.match(html, /IEEE International Conference on Acoustics, Speech and Signal Processing/);
  assert.match(html, /Rutgers University, Applied and Computational Math Seminar/);
  assert.match(html, /Supercritical ball-like growth/);
  assert.match(html, /Mathematics of Change, Part II \(MATH 1080\)/);
  assert.match(html, /Optimum Control Systems \(ECE 553, MATH 595\)/);
  assert.match(html, /Course information and syllabus/);
  assert.match(html, /For embedded videos, download and open in Adobe Acrobat Reader in full-screen mode/);
  assert.match(html, /Inference and Representation/);
  assert.match(html, /Opportunity Charter School/);
  assert.match(html, /<strong>Affiliation<\/strong>University of Pennsylvania/);
  assert.doesNotMatch(html, /David Rittenhouse Laboratory|4N55|209 South 33rd Street/);
  assert.match(html, /efe-onaran-google\.jpg/);
  assert.doesNotMatch(html, /https:\/\/efe-onaran\.example\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders the Optimum Control Systems course information page", async () => {
  const response = await render("/teaching/optimum-control-systems/");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /ECE 553 · MATH 595 · Spring 2024/);
  assert.match(html, /Erkan Bayram/);
  assert.match(html, /Tuesday and Thursday, 2:00–3:20 p\.m\./);
  assert.match(html, /optimum-control-systems-syllabus\.pdf/);
});

test("ships the portrait, documents, research videos, and social card without starter assets", async () => {
  await Promise.all([
    access(new URL("public/efe-onaran-google.jpg", projectRoot)),
    access(new URL("public/efe-onaran-cv.pdf", projectRoot)),
    access(new URL("public/og.png", projectRoot)),
    access(new URL("public/ising-disks-supercritical-ball-growth.mp4", projectRoot)),
    access(new URL("public/ising-disks-above-critical-branching-growth.mp4", projectRoot)),
    access(new URL("public/ising-disks-below-critical-bounded.mp4", projectRoot)),
    access(new URL("public/optimum-control-systems-syllabus.pdf", projectRoot)),
  ]);

  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));

  const packageJson = await readFile(new URL("package.json", projectRoot), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
