<template>
  <div class="main-wrapper">
    <Header class="header" />
    <MainBody class="main" />
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from './Header.vue';
import MainBody from './MainBody.vue';
import Footer from './Footer.vue';
</script>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  flex-shrink: 0;
}

.main {
  flex-grow: 1;
}

.footer {
  flex-shrink: 0;
}
</style>
