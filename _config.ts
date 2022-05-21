import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
// import metas from "lume/plugins/metas.ts";

const site = lume();

site.use(esbuild({
  extensions: [".ts", ".tsx"],
}));

/* https://lume.land/plugins/metas/ */
// site.use(metas());
site.copy("index.html");

export default site;
