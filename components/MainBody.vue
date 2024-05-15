<template>
  <main class="main-padding">
    <div class="slider-container">
      <slider />
    </div>
    <informationBlock />
  </main>
</template>

<script setup>
import slider from '~/components/Slider';
import informationBlock from '~/components/InformationBlock';
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

.slider-container {
  padding-inline: MainScss.$mainSideMargin;

  @include for-tablet-portrait {
    padding-inline: MainScss.$mainSideMarginPhone;
  }
}
</style>
