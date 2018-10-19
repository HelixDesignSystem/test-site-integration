<template>
  <section class="container">
    <div class="logo">
      <app-logo/>
    </div>
    <h2>Blog</h2>
    <ul>
      <li
        v-for="post in delta.posts"
        :key="post.date">
        <nuxt-link :to="post._path">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
    <h2>Docs</h2>
    <ul>
      <li
        v-for="doc in delta.docs"
        :key="doc.date">
        <nuxt-link :to="doc._path">
          {{ doc.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
export default {
  components: {
    AppLogo
  },
  data() {
    // Using webpacks context to gather all files from a folder
    const context1 = require.context('~/content/blog/posts/', false, /\.json$/);
    const context2 = require.context('~/content/docs/', false, /\.json$/);
    const posts = context1.keys().map(key => ({
      ...context1(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }));
    const docs = context2.keys().map(key => ({
      ...context2(key),
      _path: `/docs/${key.replace('.json', '').replace('./', '')}`
    }));
    const delta = { posts: posts, docs: docs }
    return { delta };
  }
};
</script>

<style>
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}
.title {
  color: #35495e;
  display: block;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
}
.subtitle {
  color: #526488;
  font-size: 42px;
  font-weight: 300;
  padding-bottom: 15px;
  word-spacing: 5px;
}
.links {
  padding-top: 15px;
}
.logo {
  height: 200px;
  margin: 10px;
  padding: 10px;
  width: 200px;
}
</style>
