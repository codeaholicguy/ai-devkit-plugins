import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

describe("memory dashboard plugin package", () => {
  it("declares the memory-dashboard plugin command manifest", async () => {
    const packageJsonPath = path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      "../package.json",
    );
    const packageJson = (await fs.readJson(packageJsonPath)) as unknown;
    const aiDevkit = (packageJson as { aiDevkit?: { commands?: unknown } }).aiDevkit;
    const commands = (aiDevkit as { commands?: unknown } | undefined)?.commands;

    expect(Array.isArray(commands)).toBe(true);
    expect(commands).toContainEqual(
      expect.objectContaining({ name: "memory-dashboard" }),
    );
  });
});
