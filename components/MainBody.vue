<template>
  <main class="main-padding">
    <div class="container">
      <h3>Hello, World!</h3>
      <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam maiores hic aut eos, sunt dolorem cupiditate dolor, id esse porro ratione aliquid ex necessitatibus saepe beatae corrupti debitis facere asperiores!</h5>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
@use 'styles/settings/MainScss' as MainScss;

.main-padding {
  display: flex;
  justify-content: center;
}

.container {
  padding-inline: MainScss.$mainSideMargin;
  margin-top: 40px;
  width: 1440px;
  margin-bottom: 61px;
}
</style>
