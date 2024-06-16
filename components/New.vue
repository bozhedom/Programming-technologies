<template>
  <div class="new">
    <picture class="image_block">
      <source :srcset="`${image.x2} 2x, ${image.x1}`" />
      <img :src="image.x1" :alt="title" class="image" />
    </picture>
    <div class="new_content">
      <p class="create_date_new">
        {{
          date.toLocaleDateString('ru', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        }}
      </p>
      <br />
      <h4 class="title_new">{{ title }}</h4>
      <br />
      <p
        class="description_project"
        v-html="truncate(description, 20, { byWords: true })"
      />
    </div>
  </div>
</template>
<script setup>
import truncate from 'truncate-html';
defineProps({
  image: {
    x1: String,
    x2: String,
  },
  date: Date,
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

.new {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  max-width: 304px;

  @include for-phone-only {
    max-width: none;
  }
}

.image {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
}

.create_date_new,
.title_new {
  font-family: var(--font-title);
}

.title_new {
  font-weight: 700;
}

.description_project {
  color: #666666;
}
</style>
