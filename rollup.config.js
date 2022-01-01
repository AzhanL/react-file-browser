import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

export default {
  input: ["src/index.ts", "src/Item/index.ts"],
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    commonjs(),
    typescript(),
    // less({
    //   output: "build/rollup.build.css",
    //   insert: true,
    //   option: {
    //     javascriptEnabled: true,
    //   },
    // }),
    postcss({
      plugins: [],
      use: ['less']
    }),
  ],
};
