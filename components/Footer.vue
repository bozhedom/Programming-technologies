<template>
  <footer class="footer-padding">
    <div class="container">
      <div class="top-part">
        <img
          src="~/assets/img/logoFooter.png"
          alt="footer-logo"
          class="footer-logo"
        />

        <div class="nav">
          <ul class="nav-list">
            <li v-for="item in list" class="list-item">
              <a :href="item.url" class="item-link">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
        <div class="contact-data">
          <ul class="contact-list">
            <li v-for="item in infoData">
              <Telephone v-if="item.svg == 0" class="phone-icon" />
              <Email v-else-if="item.svg == 1" class="email-icon" />
              <FilledPoint v-else="item.svg == 2" class="filled-point-icon" />

              <a :href="item.url" class="contact-item">{{ item.label }}</a>
            </li>
          </ul>
        </div>
        <MainButton />
      </div>
      <div class="info-data">
        <p class="copy-right">{{ copyRight }}</p>
        <a href="" class="police-conf">Политика конфиденциальности</a>
        <a href="" class="term-of-use">Пользовательское соглашение</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import MainButton from './UI/MainButton.vue';
import Telephone from '~/assets/icons/telephone.svg';
import Email from '~/assets/icons/email.svg';
import FilledPoint from '~/assets/icons/placeholder-filled-point.svg';

const copyRight = '© Загдом, 2021';
const mail = 'info@gmail.com';
const list = [
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
const infoData = [
  {
    url: `tel:${+79009009090}`,
    label: '+7 (900) 900-90-90',
    svg: 0,
  },
  {
    url: `mailto:${mail}`,
    label: mail,
    svg: 1,
  },
  {
    url: '/geo',
    label: 'г. Владивосток ул.Выселковая 49, стр. 3',
    svg: 2,
  },
];
</script>

<style lang="scss" scoped>
@use 'styles/settings/MainScss' as MainScss;

a {
  color: white;
  text-decoration: none;
}

.container {
  padding-inline: MainScss.$mainSideMargin;
  height: 246px;
  width: 100%;
  background-color: MainScss.$darkGreen;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top-part {
  display: flex;
  margin-top: 32px;
  // align-items: center;
  // justify-content: space-between;
}

.footer-padding {
  display: flex;
  align-items: center;
}

.nav-list,
.contact-list {
  gap: 24px;
  display: flex;
  flex-direction: column;
}

.nav-list {
  margin-right: 122px;
  width: 195px;
}

.contact-list {
  margin-right: 228px;
  font-family: var(--font-title);
}

.phone-icon,
.email-icon,
.filled-point-icon {
  margin-right: 8px;
  color: MainScss.$mediumGreen;
}

.footer-logo {
  width: 160px;
  height: 39px;
  margin-right: 154px;
}

.info-data {
  display: flex;
  margin-bottom: 33px;
  opacity: 0.6;
}

.copy-right {
  margin-right: 200px;
}

.police-conf {
  margin-right: 80px;
}
</style>
