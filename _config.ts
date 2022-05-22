import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";

const site = lume();

site.use(esbuild({
  extensions: [".ts", ".tsx"],
}));

site.copy("index.html");

export default site;
