<template>
  <main class="mainPadding">
    <div class="container">
      <h3>Hello, World!</h3>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
@use 'styles/settings/MainScss' as MainScss;
.container {
  padding-inline: MainScss.$mainSideMargin;
  margin-top: 40px;
}
</style>
