<template>
  <div class="project">
    <picture class="image_block">
      <source :srcset="`${image.x2} 2x, ${image.x1}`" />
      <img :src="image.x1" :alt="title" class="image" />
    </picture>
    <div class="project_content">
      <h4 class="title_project">{{ title }}</h4>
      <br />
      <p class="description_project" v-html="description" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    x1: String,
    x2: String,
  },
  title: String,
  description: String,
});
</script>
<style lang="scss" scoped>
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

.project {
  display: flex;
  max-width: 624px;

  @include for-phone-only {
    display: block;
    min-width: 304px;
  }
}
.project_content {
  order: -1;
  background-color: white;
  padding: 32px 16px 32px 32px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 50%;
  box-sizing: border-box;

  @include for-phone-only {
    width: 100%;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
}

.image_block {
  width: 50%;

  @include for-phone-only {
    width: 100%;
  }
}

.image {
  max-width: 100%;
  height: auto;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  @include for-phone-only {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
}

.title_project {
  font-family: var(--font-title);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
}

.description_project {
  color: #666666;
  font-size: 16px;
  line-height: 22px;
}
</style>
