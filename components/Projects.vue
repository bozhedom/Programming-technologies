<template>
  <div class="container">
    <h3 class="header_title">Реализованные проекты</h3>
    <div class="list">
      <Project
        v-for="project in projects"
        :title="project.title"
        :description="project.description"
        :image="project.image"
      />
    </div>
  </div>
</template>

<script setup>
import Project from '~/components/Project';

import project1_image_1x from '~/assets/img/project1_image_1x.jpg';
import project1_image_2x from '~/assets/img/project1_image_2x.jpg';

import project2_image_1x from '~/assets/img/project2_image_1x.jpg';
import project2_image_2x from '~/assets/img/project2_image_2x.jpg';

const projects = [
  {
    image: {
      x1: project1_image_1x,
      x2: project1_image_2x,
    },
    title: 'Дом в скандинавском стиле',
    description:
      'Одноэтажный дом из газобетона габаритными размерами 10.73 х 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей<br><br><br>Построен по индивидуальному проекту.',
  },
  {
    image: {
      x1: project2_image_1x,
      x2: project2_image_2x,
    },
    title: 'Дом из газобетона',
    description:
      'Одноэтажный дом габаритными размерами 15.2 х 9.7м. Приведенная площадь – 127.7 м.кв.<br><br><br>Три спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу.',
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

.list {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  @include for-tablet {
    flex-direction: column;
  }

  @include for-phone-only {
    flex-flow: row;
    max-width: 93vw;
    overflow: auto;
  }
}

.header_title {
  font-family: var(--font-title);
  font-weight: bold;
  font-size: 38px;
  margin-bottom: 32px;

  @include for-phone-only {
    font-size: 28px;
  }
}

.container {
  width: 1440px;
  padding-block: 80px;
  padding-inline: MainScss.$mainSideMargin;

  @include for-tablet-portrait {
    padding-inline: MainScss.$mainSideMarginPhone;
  }
}
</style>
