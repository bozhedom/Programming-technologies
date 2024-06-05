<template>
  <div class="container">
    <header class="header_news">
      <h3 class="header_title">Новости</h3>
      <button class="button_news">Все новости</button>
    </header>
    <ul class="news">
      <li class="desktop_news" v-for="new_ in news">
        <New
          :date="new_.date"
          :title="new_.title"
          :description="new_.description"
          :image="new_.image"
        />
      </li>
      <li class="phone_new">
        <New
          :date="news[0].date"
          :title="news[0].title"
          :description="news[0].description"
          :image="news[0].image"
        />
      </li>
    </ul>
  </div>
</template>
<script setup>
import New from './New.vue';

import new1_1x from '~/assets/img/new1_1x.jpg';
import new1_2x from '~/assets/img/new1_2x.jpg';

import new2_1x from '~/assets/img/new2_1x.jpg';
import new2_2x from '~/assets/img/new2_2x.jpg';

import new3_1x from '~/assets/img/new3_1x.jpg';
import new3_2x from '~/assets/img/new3_2x.jpg';

import new4_1x from '~/assets/img/new4_1x.jpg';
import new4_2x from '~/assets/img/new4_2x.jpg';

const news = [
  {
    image: {
      x1: new1_1x,
      x2: new1_2x,
    },
    date: new Date('2021-08-20'),
    title: 'Как сделать строительство дешевле?',
    description: 'Строительство дома можно сделать дешевле — выбрав проект...',
  },
  {
    image: {
      x1: new2_1x,
      x2: new2_2x,
    },
    date: new Date('2021-08-20'),
    title: 'Почему Гуд Вилл строит лучшие дома?',
    description:
      'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...',
  },
  {
    image: {
      x1: new3_1x,
      x2: new3_2x,
    },
    date: new Date('2021-08-20'),
    title: 'Преимущества и недостатки частного дома',
    description:
      'Первое и главное: строим дом индивидуально для вас, по вашим...',
  },
  {
    image: {
      x1: new4_1x,
      x2: new4_2x,
    },
    date: new Date('2021-08-20'),
    title: 'Из чего мы строим дома в ипотеку?',
    description:
      'Самый популярный вопрос наших клиентов касается материалов, которы...',
  },
];
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

.container {
  width: 1440px;
  padding-block: 80px;
  padding-inline: MainScss.$mainSideMargin;

  @include for-tablet-portrait {
    padding-inline: MainScss.$mainSideMarginPhone;
  }
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.header_news {
  display: flex;
  justify-content: space-between;
}

.header_title {
  font-size: 38px;
  font-weight: bold;
  font-family: var(--font-title);
  line-height: 46px;
}

.button_news {
  border-radius: 10px;
  border: 1px solid MainScss.$lightGreen;
  width: 141px;
  height: 49px;
  padding: 16px 24px;
  background-color: white;
  color: MainScss.$lightGreen;
  cursor: pointer;
}

.phone_new {
  display: none;

  @include for-phone-only {
    display: block;
  }
}

.news {
  display: flex;
  gap: 16px;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: stretch;
}

.desktop_news {
  @include for-phone-only {
    display: none;
  }
}
</style>
