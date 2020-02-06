<template>
  <div>
    <h1>Create a frontmatter Markdown powered Blog with Nuxt.JS</h1>
    {{ title }}
    <component :is="markdownComponent" />
  </div>
</template>
<script>
export default {
  data: () => ({
    title: "",
    markdownComponent: null
  }),
  async asyncData({ params }) {},
  async created() {
    this.markdownComponent = () =>
      import(`~/blog/posts/${this.$route.params.slug}.md`).then(post => {
        this.title = post.attributes.title;
        return {
          extends: post.vue.component
        };
      });
  }
};
</script>
