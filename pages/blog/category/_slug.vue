<template>
  <div>
    <h1>{{ category.name }}</h1>
    <v-card outlined>
      <v-list>
        <v-list-item
          v-for="post in posts"
          :key="post.name"
          :to="`/blog/posts/${post.name}`"
        >
          {{ post.title }}
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const resolve = require.context(`~/blog/posts/`, true, /\.md$/);
    const posts = resolve.keys().map(key => {
      const [, name] = key.match(/\/(.+)\.md$/);

      const post = resolve(key);

      return {
        name,
        title: post.attributes.title,
        category: post.attributes.category
      };
    });

    return {
      category: { name: params.slug },
      posts: posts.filter(post => {
        return post.category == params.slug;
      })
    };
  }
};
</script>
