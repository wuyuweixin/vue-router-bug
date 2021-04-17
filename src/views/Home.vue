<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png"/>
    <HelloWorld :msg="`Hello ${context.app} 3 + Vite`"/>
  </div>
</template>

<script>
  import HelloWorld from "../components/HelloWorld.vue";
  import {mapState} from 'vuex'

  export default {
    name: "Home",
    components: {HelloWorld},
    computed: {
      ...mapState(['context'])
    }
  }
</script>
