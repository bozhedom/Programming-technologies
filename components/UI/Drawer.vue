<template>
  <DialogRoot>
    <DialogTrigger class="Button grass">
      <div class="burger-menu">
        <burger class="burger-icon" />
      </div>
    </DialogTrigger>
    <DialogPortal class="Dialog-Portal">
      <DialogOverlay class="DialogOverlay" />
      <DialogContent class="DialogContent">
        <DialogClose class="IconButton" aria-label="Close">
          <closeBurger class="close-burger" />
        </DialogClose>
        <DialogDescription class="DialogDescription"></DialogDescription>

        <div class="menu">
          <nav class="navigation">
            <ul class="nav-list">
              <li v-for="item in navigation">
                <a :href="item.url" class="item-link">
                  {{ item.label }}
                </a>
              </li>
              <div class="menu-button">
                <MainButton color="#029f59" />
              </div>
            </ul>
          </nav>

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
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import burger from '~/assets/icons/Burger.svg';
import closeBurger from '~/assets/icons/closeBurger.svg';
import MainButton from '../UI/MainButton.vue';
import Telephone from '~/assets/icons/telephone.svg';
import Email from '~/assets/icons/email.svg';
import FilledPoint from '~/assets/icons/placeholder-filled-point.svg';

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue';

defineProps({
  navigation: Object,
  infoData: Object,
});

const mail = 'info@gmail.com';

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

@import '@radix-ui/colors/black-alpha.css';
@import '@radix-ui/colors/green.css';
@import '@radix-ui/colors/mauve.css';
@import '@radix-ui/colors/grass.css';

/* reset */
button,
fieldset,
input {
  all: unset;
}

.DialogOverlay {
  background-color: var(--black-a9);
  z-index: 1;
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.DialogContent {
  background-color: MainScss.$lightGreen;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  padding: 31px 30px 54px 21px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 10;
}
.DialogContent:focus {
  outline: none;
}

.DialogTitle {
  margin: 0;
  font-weight: 500;
  color: var(--mauve-12);
  font-size: 17px;
}

.DialogDescription {
  margin: 10px 0 20px;
  color: var(--mauve-11);
  font-size: 15px;
  line-height: 1.5;
}

.menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.burger-menu {
  gap: 4px;
  display: flex;
  flex-direction: column;
  color: white;
}

.contact-list,
.nav-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.item-link {
  text-decoration: none;
  color: white;
}

.contact-item-link {
  color: white;
  text-decoration: none;
}

.phone-icon,
.email-icon,
.filled-point-icon {
  margin-right: 8px;
  color: white;
}

.top-rectangle,
.midle-rectangle,
.bottom-rectangle {
  background-color: white;
  width: 24px;
  height: 2px;
}

.burger-icon {
  height: 24px;
  width: 24px;
}

.close-burger {
  width: 10px;
  height: 10px;
}

.Button {
  border-radius: 10px;
  padding: 11px 16px;
}
.Button.grass {
  background-color: MainScss.$mediumGreen;
  color: var(--grass-11);
}

.Button.green {
  background-color: var(--green-4);
  color: var(--green-11);
}

.IconButton {
  font-family: inherit;
  border-radius: 6px;
  display: flex;
  color: white;
  background-color: #35b27a;
  padding: 11px;
  margin-top: 6px;
  align-self: flex-end;
}

.Fieldset {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
}

.Label {
  font-size: 15px;
  color: var(--grass-11);
  width: 90px;
  text-align: right;
}

.Input {
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: var(--grass-11);
  box-shadow: 0 0 0 1px var(--grass-7);
  height: 35px;
}
.Input:focus {
  box-shadow: 0 0 0 2px var(--grass-8);
}

@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
