<template>
  <v-container>
    <h1>{{ title }}</h1>
    <v-divider></v-divider>
    <component :is="markdownComponent" />
  </v-container>
</template>
<script>
export default {
  data: () => ({
    title: "",
    markdownComponent: null
  }),
  async asyncData({ params }) {
    const post = await import(`~/blog/posts/${params.slug}.md`);
    return {
      title: post.attributes.title
    };
  },
  async created() {
    this.markdownComponent = () =>
      import(`~/blog/posts/${this.$route.params.slug}.md`).then(post => {
        // this.title = post.attributes.title;
        return {
          extends: post.vue.component
        };
      });
  }
};
</script>
