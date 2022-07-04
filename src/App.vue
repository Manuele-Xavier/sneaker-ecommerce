<template>
  <div>
    <Header/>
    <main>
        <router-view />
    </main>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<style lang="scss">
main{
  min-height: 90vh;
}
</style>


