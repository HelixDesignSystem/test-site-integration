<template>
  <article>
    <h1>{{ title }}</h1>
    <p><span v-html="body"></span>
      <br>
      <strong>Posted on <time :datetime="date">{{ date }}</time></strong></p>
    <img :src="thumbnail">
  </article>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      body: '',
      thumbnail: '',
      date: ''
    }
  },
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );
    let doc = await import('~/content/docs/' + params.slug + '.json');
    return doc;
  }
};
</script>
