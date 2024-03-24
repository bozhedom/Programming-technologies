<template>
  <header class="header-padding">
    <div class="container">
      <div class="left-part">
        <img
          src="~/assets/img/logoHeader.png"
          alt="header-logo"
          class="header-logo"
        />
        <nav class="navigation">
          <ul class="nav-list">
            <li v-for="item in nav">
              <a :href="item.url" class="item-link">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="right-part">
        <svgo-telephone class="telephone-svg" />
        <a :href="expressionPhone" class="telephone">{{ phone }}</a>
        <MainButton />
      </div>
    </div>
  </header>
</template>

<script setup>
import MainButton from './UI/MainButton.vue';

const phone = '+7 (900) 900-90-90';
const phoneHref = '+79009009090';
const expressionPhone = `tel:${phoneHref}`;
const nav = [
  {
    url: '/projects',
    label: 'Реализованные проекты',
  },
  {
    url: '/news',
    label: 'Новости',
  },
  {
    url: '/contacts',
    label: 'Контакты',
  },
];
</script>

<style lang="scss" scoped>
@use 'styles/settings/MainScss' as MainScss;
$gapHeader: 24px;

.left-part,
.nav-list,
.right-part,
.container {
  display: flex;
  align-items: center;
}

.header-padding {
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
  color: #029f59;
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
  color: MainScss.$darkGreen;
  margin-right: $gapHeader;
}

.container {
  height: 97px;
  width: 100%;
  padding-inline: MainScss.$mainSideMargin;
  background-color: aquamarine; /* Для визуального представления шапки */
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  width: 160px;
  height: 39px;
}
</style>
