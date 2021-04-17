<template>
  <div>The page should stay here all the time, and the browser address will not change</div>
</template>

<script>
  export default {
    name: "MyForm",
    beforeRouteLeave(to, from, next) {
      const rest = window.confirm('Do you want to leave?')
      if (rest) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>
