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
            <li v-for="item in infoData" class="contact-item">
              <Telephone v-if="item.svg == 0" class="phone-icon" />
              <Email v-else-if="item.svg == 1" class="email-icon" />
              <FilledPoint v-else="item.svg == 2" class="filled-point-icon" />

              <a :href="item.url" class="contact-item-link"
                >{{ item.label }}
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-button">
          <MainButton color="#029f59" width="200px" />
        </div>
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

import { ref, provide } from 'vue';

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

const sharedInfoDataKey = Symbol();
const sharedInfoData = ref(infoData);
provide(sharedInfoDataKey, infoData);
</script>

<style lang="scss" scoped>
@use 'styles/settings/MainScss' as MainScss;

@mixin for-phone-only {
  @media screen and (max-width: 600px) {
    @content;
  }
}

@mixin for-phone-big {
  @media screen and (max-width: 915px) {
    @content;
  }
}
@mixin for-tablet-portrait {
  @media screen and (max-width: 1059px) {
    @content;
  }
}

@mixin for-tablet {
  @media screen and (max-width: 1200px) {
    @content;
  }
}

a {
  color: white;
  text-decoration: none;
}

.container {
  padding-inline: MainScss.$mainSideMargin;
  min-height: 246px;
  width: 1440px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include for-tablet-portrait {
    padding-inline: 16px;
  }

  @include for-phone-big {
    padding-left: 40px;
    padding-right: 0;
    gap: 40px;
  }
}

.top-part {
  display: flex;
  margin-top: 32px;

  @include for-phone-big {
    flex-direction: column;
    gap: 40px;
  }
}

.footer-padding {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: MainScss.$darkGreen;
  width: 100%;
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

  @include for-tablet {
    margin-right: 62px;
  }
}

// .nav {
//   @include for-phone-big {
//     mt
//   }
// }

.contact-list {
  // margin-right: 180px;
  font-family: var(--font-title);
  font-size: 14px;
}

.contact-item {
  display: flex;
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

  @include for-tablet {
    margin-right: 64px;
  }
}

.info-data {
  display: flex;
  margin-bottom: 33px;
  opacity: 0.6;
  font-size: 14px;

  @include for-phone-big {
    flex-direction: column;
    gap: 24px;
    // margin-top: 20px;
  }
}

.copy-right {
  margin-right: 154px;
  width: 160px;

  @include for-tablet {
    margin-right: 64px;
  }
}

.police-conf {
  margin-right: 112px;

  @include for-tablet {
    margin-right: 52px;
  }
}

.footer-button {
  // display: flex;
  margin-left: auto;

  @include for-phone-big {
    margin-left: 0;
  }
}
</style>
