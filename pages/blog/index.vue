<template>
  <div>
    <h1>
      카테고리
    </h1>
    <v-card outlined>
      <v-list>
        <v-list-item
          v-for="category in categories"
          :key="category.name"
          :to="`/blog/category/${category.name}`"
        >
          {{ category.name }} ({{ category.count }})
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import categories from "~/blog/categories";

export default {
  async asyncData() {
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

    // // 카테고리 목록 추출
    // const categories = {};
    // for (let post of posts) {
    //   if (!categories[post.category]) {
    //     categories[post.category] = {
    //       count: 0
    //     };
    //   }

    //   categories[post.category].count += 1;
    // }

    // const catelist = categories.map(category => {
    //   return {
    //     name: category.name
    //   };
    // });

    const cate = {};
    for (let category of categories) {
      if (!cate[category.name]) {
        cate[category.name] = {
          count: 0
        };
      }
      cate[category.name].count += 1;
    }

    return {
      categories: Object.keys(cate).map(category => {
        return {
          name: category,
          count: cate[category].count
        };
      })
      // categories: cate
    };
  }
};
</script>
