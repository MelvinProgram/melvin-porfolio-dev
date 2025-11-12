import { defineConfig } from "vitest/config";
import { astroTest } from "@astrojs/test/config";

export default defineConfig({
  plugins: [astroTest()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.js",
  },
});
