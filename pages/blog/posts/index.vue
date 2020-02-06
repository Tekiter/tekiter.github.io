<template>
  <div>
    <h1>My blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.title">
        {{ post }}
        <nuxt-link :to="`/blog/posts/${post.name}`">asdf</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData() {
    const resolve = require.context("~/blog/posts/", true, /\.md$/);
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);

      const post = resolve(key);

      return {
        name,
        title: post.attributes.title
      };
    });
    return {
      posts: imports
    };
  },
  data() {
    return {
      prefix: "blog/posts"
    };
  },
  methods: {
    getPermalink(post) {
      return `${this.prefix}/${
        post.meta.resourcePath
          .split("\\")
          .pop()
          .split("/")
          .pop()
          .split(".")[0]
      }`;
    }
  }
};
</script>
