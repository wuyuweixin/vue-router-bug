<template>
  <div>The page should stay here all the time, and the browser address will not change</div>
</template>

<script>
  export default {
    name: "MyForm",
    beforeRouteLeave() {
      window.confirm()
      return false
    }
  }
</script>
