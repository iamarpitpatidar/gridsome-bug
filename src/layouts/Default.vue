<template>
  <div class="bg-light-50 dark:bg-blue-700">
    <Header />
    <slot />
  </div>
</template>

<script>
import Header from './partials/Header.vue'

export default {
  components: {
    Header
  }
}
</script>