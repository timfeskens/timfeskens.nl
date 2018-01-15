<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <router-view></router-view>
    <!-- <Main></Main> -->
  </div>
</template>

<script>
import Main from '@/components/Main.vue'
export default {
  name: 'app',
  components: {
    'Main': Main
  }
}
</script>

<style>
* {
  margin: 0;
}
</style>
