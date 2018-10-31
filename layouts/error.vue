<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
    <hx-toast
      cta="try again">
      Whoa there!
    </hx-toast>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    },
  },
  layout: 'default' // you can set a custom layout for the error page
}
</script>
