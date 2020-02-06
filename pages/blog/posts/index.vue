<template>
  <div>
    <h1>전체글보기</h1>
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
  async asyncData({ params }) {
    const resolve = require.context(`~/blog/posts/`, true, /\.md$/);
    const imports = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);

      const post = resolve(key);

      return {
        name,
        title: post.attributes.title,
        category: post.attributes.category
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
  methods: {}
};
</script>
