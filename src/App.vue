<template>
  <div id="app">
    <input type="radio" name="route" value="base" v-model="currentRoute">base
    <input type="radio" name="route" value="graph" v-model="currentRoute">graph
    <input type="radio" name="route" value="graph1" v-model="currentRoute">graph1
    <input type="radio" name="route" value="graph2" v-model="currentRoute">graph2
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      currentRoute: 'base'
    }
  },
  watch: {
    currentRoute () {
      this.hanldeRoute()
    }
  },
  methods: {
    hanldeRoute (name) {
      this.$router.push({name: this.currentRoute})
    }
  }
}
</script>

<style>
html,body {
  height: 100%;
  overflow: hidden;
}
#app{
  height: 100%;
  overflow: auto;
}
</style>
