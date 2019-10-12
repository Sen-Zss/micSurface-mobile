<template>
  <div id="app">
    <div class="logo" v-if="logo">
      <div class="content">
        <img :src="logo" id="logo_imageUrl" />
      </div>
    </div>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
        logo:'',
      }
  },
  components:{
  },
  watch:{
    logo(){
        this.logo = this.activityAllMessage.activityInfo.Banner?this.activityAllMessage.activityInfo.Banner:''
    }
  },
  mounted(){
    window.onpopstate = () => {
      if (!this.allowBack) {// 这个allowBack 是存在vuex里面的变量
          history.go(1)
      }
    }
  },
  computed:{
  }
}
</script>

<style>

</style>
