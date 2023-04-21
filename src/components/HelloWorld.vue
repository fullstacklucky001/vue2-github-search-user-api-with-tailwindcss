<script>
export default {
  // component options
  props: {
    childProps: String
  },

}
</script>

<template>
  <h1>{{ childProps }}</h1>
  <slot>Fallback content</slot>
</template>
<style scoped>
.title {
  color: red;
}

.done {
  text-decoration: line-through;
}
</style>
