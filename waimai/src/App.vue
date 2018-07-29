<template>
    <div id="app">
      <router-view/>
      <footerGuide v-show="$route.meta.showFooter"/>
    </div>
</template>
<script>
  import footerGuide from './components/footerGuide/footerGuide.vue'
    export default{
        name: '',
        data(){
            return {}
        },
        components: {
          footerGuide
        }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5

</style>
