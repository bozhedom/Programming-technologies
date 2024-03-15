<template>
  <header class="header-wrapper">
    <div class="left-part">
      <img src="~/assets/img/Frame.png" alt="header-logo" class="header-logo" />
      <nav class="navigation">
        <ul class="nav-list">
          <li class="nav-list-item">
            <a href="" class="item-link">Реализованные проекты</a>
          </li>
          <li class="nav-list-item">
            <a href="" class="item-link">Новости</a>
          </li>
          <li class="nav-list-item">
            <a href="" class="item-link">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="right-part">
      <img
        src="~/assets/svg/telephone.svg"
        alt="svg-telehone"
        class="telephone-svg"
      />
      <a href="tel:+79009009090" class="telephone">+7 (900) 900-90-90</a>
      <MainButton />
    </div>
  </header>
</template>

<script setup>
import MainButton from './UI/MainButton.vue';
</script>

<style lang="scss" scoped>
$mainSideMargin: 88px;
$gapHeader: 24px;
$darkGreen: #254741;
$mediumGreen: #03b766;

.header-wrapper,
.left-part,
.nav-list,
.right-part {
  display: flex;
  align-items: center;
}

.left-part {
  gap: 80px;
}

.right-part {
  font-family: var(--font-title);
}

.telephone-svg {
  margin-right: 8px;
}

.nav-list {
  margin: 0;
  list-style-type: none;
  gap: $gapHeader;
}

.item-link {
  text-decoration: none;
  color: #666666;
}

.telephone {
  text-decoration: none;
  color: $darkGreen;
  margin-right: $gapHeader;
}

.header-wrapper {
  height: 97px;
  padding: 0 $mainSideMargin 0;
  background-color: aquamarine; /* Для визуального представления шапки */
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  width: 160px;
  height: 39px;
}
</style>
