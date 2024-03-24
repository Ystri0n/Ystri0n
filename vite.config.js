import { viteStaticCopy } from "vite-plugin-static-copy";

/** @type {import("vite").UserConfig} */
export default {
  root: "src",
  publicDir: false,
  build: {
    outDir: "../build",
    emptyOutDir: true
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "CNAME",
          dest: "."
        }
      ]
    })
  ]
};
