const path = require("path");
const glob = require("glob");
const Mode = require("frontmatter-markdown-loader/mode");
const categories = require("./blog/categories").default;

async function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      let filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob)
        .map(filepath => `${url}/${path.basename(filepath, ".md")}`);
    })
  );
}

export default async () => ({
  /*
   ** Headers of the page
   */
  head: {
    title: "Tekiter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "tekiter website" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }

      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "blog/posts"),
        loader: "frontmatter-markdown-loader",
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META]
        }
      });
    }
  },

  generate: {
    routes: [
      ...(await getDynamicPaths({
        "/blog/posts": "./blog/posts/*.md"
      })),
      ...categories.map(category => {
        return `/blog/category/${category.name}`;
      })
    ]
  },
  plugins: ["@plugins/vuetify"]
});
