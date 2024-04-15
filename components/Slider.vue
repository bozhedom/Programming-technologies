<template>
  <Swiper class="swiper">
    <SwiperSlide v-for="slide in slides" class="swiper-slide">
      <figure class="slide-container">
        <picture>
          <source
            :srcset="`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1}`"
            media="(min-width: 768px)"
          />
          <source
            :srcset="`${slide.image_portrait.x2} 2x, ${slide.image_portrait.x1}`"
            media="(max-width: 767px)"
          />
          <img
            :src="slide.image_landscape.x1"
            :alt="slide.title"
            class="slide-image"
          />
        </picture>
        <figcaption class="slide-text">
          <div class="slide-text-items">
            <h3 class="slide-header">{{ slide.title }}</h3>
            <p class="slide-paragraph">{{ slide.text }}</p>
          </div>
        </figcaption>
      </figure>
    </SwiperSlide>
    <div class="slider-controls">
      <SliderControls />
    </div>
  </Swiper>
</template>

<script setup>
import SliderControls from './UI/SliderControls.vue';
import slide1_portrait_1x from '~/assets/img/slide-1-portrait@1x.jpg';
import slide1_portrait_2x from '~/assets/img/slide-1-portrait@2x.jpg';
import slide1_landscape_1x from '~/assets/img/slide-1-landscape@1x.jpg';
import slide1_landscape_2x from '~/assets/img/slide-1-landscape@2x.jpg';

import slide2_portrait_1x from '~/assets/img/slide-2-portrait@1x.jpg';
import slide2_portrait_2x from '~/assets/img/slide-2-portrait@2x.jpg';
import slide2_landscape_1x from '~/assets/img/slide-2-landscape@1x.jpg';
import slide2_landscape_2x from '~/assets/img/slide-2-landscape@2x.jpg';

import slide3_portrait_1x from '~/assets/img/slide-3-portrait@1x.jpg';
import slide3_portrait_2x from '~/assets/img/slide-3-portrait@2x.jpg';
import slide3_landscape_1x from '~/assets/img/slide-3-landscape@1x.jpg';
import slide3_landscape_2x from '~/assets/img/slide-3-landscape@2x.jpg';

const slides = [
  {
    image_portrait: {
      x1: slide1_portrait_1x,
      x2: slide1_portrait_2x,
    },
    image_landscape: {
      x1: slide1_landscape_1x,
      x2: slide1_landscape_2x,
    },
    title: 'Проектируем и строим загородные дома',
    text: 'Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений',
  },
  {
    image_portrait: {
      x1: slide2_portrait_1x,
      x2: slide2_portrait_2x,
    },
    image_landscape: {
      x1: slide2_landscape_1x,
      x2: slide2_landscape_2x,
    },
    title: 'Твой идеальный дом - наша профессиональная забота',
    text: 'Наша компания предлагает экологичные решения в строительстве – здоровье вашей семьи на первом месте!',
  },
  {
    image_portrait: {
      x1: slide3_portrait_1x,
      x2: slide3_portrait_2x,
    },
    image_landscape: {
      x1: slide3_landscape_1x,
      x2: slide3_landscape_2x,
    },
    title: 'Комфорт для каждой семьи!',
    text: 'Воспользуйтесь нашим индивидуальным подходом в дизайне интерьера, чтобы ваш дом был стильным и функциональным',
  },
];
</script>

<style lang="scss" scoped>
@use 'styles/settings/MainScss' as MainScss;

@mixin for-phone-big {
  @media screen and (max-width: 915px) {
    @content;
  }
}

.swiper {
  max-width: 1440px;
  margin-top: 40px;
  margin-bottom: 120px;
}

.slide-container {
  position: relative;
  width: 100%;
  border-radius: 30px;
  margin: 0;
  background-color: rgb(123, 121, 121);
  
}

.slide-image {
  width: 100%;
  border-radius: 30px;
  height: auto;
  object-fit: cover;

}

.slide-text {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  box-sizing: border-box;
  width: 100%;
  padding-inline: 9vw;
  padding-bottom: 5vw;
}

.slide-text-items {
  max-width: 460px;
}

.slide-header {
  font-family: var(--font-title);
  font-size: 4vw;
  line-height: 55px;
  margin-bottom: 12px;
}

.slide-paragraph {
  line-height: 21px;
  font-size: 1.5vw;
}

.slider-controls {
  @include for-phone-big {
    display: none;
  }
}
</style>
