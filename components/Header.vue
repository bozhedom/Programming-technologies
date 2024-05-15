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
        <div class="phone-button">
          <MainButton color="#029f59" width="200px" />
        </div>
        <div class="burger-menu" @click="getInfoData">
          <Drawer :navigation="nav" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import MainButton from './UI/MainButton.vue';
import Drawer from './UI/Drawer.vue';

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
$gapHeaderPhone: 16px;

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
  justify-content: center;
  // background-color: aquamarine; /* Для визуального представления шапки */
  width: 100%;
}

.left-part {
  gap: 80px;
}

.right-part {
  font-family: var(--font-title);
  margin-left: 50px;

  @include for-phone-big {
    .phone-button {
      display: none;
    }
  }

  @include for-phone-only {
    margin-left: 0;
  }
}

.telephone-svg {
  margin-right: 8px;
  color: #029f59;

  @include for-phone-only {
    display: none;
  }
}

.navigation {
  @include for-phone-big {
    .nav-list {
      display: none;
    }
  }
}

.nav-list {
  margin: 0;
  list-style-type: none;
  gap: $gapHeader;

  @include for-tablet {
    flex-wrap: wrap;
  }
}

.item-link {
  text-decoration: none;
  color: #666666;
}

.telephone {
  text-decoration: none;
  color: MainScss.$darkGreen;
  margin-right: $gapHeader;
  width: 158px;

  @include for-phone-only {
    display: none;
  }
}

.burger-menu {
  display: none;
  @include for-phone-big {
    display: block;
  }
}

.container {
  width: 1440px;
  height: 97px;
  padding-inline: MainScss.$mainSideMargin;
  justify-content: space-between;

  @include for-tablet-portrait {
    padding-inline: MainScss.$mainSideMarginPhone;
  }
}

.header-logo {
  width: 160px;
  height: 39px;
  @include for-phone-only {
    width: 135px;
    height: 33px;
  }
}
</style>
