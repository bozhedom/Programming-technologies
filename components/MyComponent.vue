<template>
  <div class="main-wrapper">
    <header class="header">
      <h2 class="header-name">Header</h2>
    </header>
    <main class="main">
      <div class="banner">
        <h2 class="banner-name">Banner</h2>
      </div>
      <div class="main-card">
        <h1>Hello, World!</h1>
        <p>Look at my website</p>
        <div class="info-cards">
          <h3 class="card-1">Here</h3>
          <h3 class="card-2">And here</h3>
        </div>
      </div>
    </main>
    <footer class="footer">
      <h2 class="footer-name">Footer</h2>
    </footer>
  </div>
</template>

<script></script>

<style lang="scss">
$mainMargin: 50px;
$marginLeft: 10px;

@mixin card($fill: rgb(67, 211, 231)) {
  background-color: $fill;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  @include card();
  height: 100px;
  display: flex;
  align-items: center;
}

.header-name {
  font-family: var(--font-title);
  margin-left: $mainMargin;
}

.main {
  flex-grow: 1;
}

.banner {
  @include card(rgb(44, 134, 44));
  display: flex;
  align-items: center;
  margin-top: $mainMargin;
  margin-left: $mainMargin;
  margin-right: $mainMargin;
}

.banner-name {
  margin-left: $marginLeft;
  color: white;
}

.main-card {
  margin-left: $mainMargin;
}

.info-cards {
  display: flex;
}

.card-1 {
  @include card(rgb(136, 237, 136));
  width: 100px;
  height: 50px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  padding-left: $marginLeft;
}

.card-2 {
  @include card(rgb(136, 237, 136));
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: $marginLeft;
}

.footer {
  @include card(rgb(142, 145, 157));
  display: flex;
  align-items: center;
  height: 100px;
  flex-shrink: 0;
}

.footer-name {
  font-family: var(--font-title);
  margin-left: $mainMargin;
}
</style>
