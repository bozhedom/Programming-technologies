<template>
  <DialogRoot>
    <DialogTrigger
      class="Button grass"
      :style="{
        backgroundColor: buttonColor,
        width: buttonWidth,
      }"
    >
      Оставить заявку
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="DialogOverlay" />
      <DialogContent class="DialogContent">
        <DialogTitle class="DialogTitle"> Оставить заявку </DialogTitle>
        <!-- <DialogDescription class="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </DialogDescription> -->
        <fieldset class="Fieldset">
          <label class="Label" for="name"> Имя </label>
          <input id="name" class="Input" defaultValue="Сергей" />
        </fieldset>
        <fieldset class="Fieldset">
          <label class="Label" for="username"> Телефон </label>
          <input
            id="username"
            class="Input"
            defaultValue="+7 (999) 764-42-54"
          />
        </fieldset>
        <div
          :style="{
            display: 'flex',
            marginTop: 25,
            justifyContent: 'flex-end',
          }"
        >
          <DialogClose as-child>
            <button class="Button green">Оставить заявку</button>
          </DialogClose>
        </div>
        <DialogClose class="IconButton" aria-label="Close">
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
  },
  width: {
    type: String,
  },
});

const buttonColor = computed(() => {
  return props.color;
});

const buttonWidth = computed(() => {
  return props.width;
});

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
import { Icon } from '@iconify/vue';
</script>

<style>
@import '@radix-ui/colors/black-alpha.css';
@import '@radix-ui/colors/green.css';
@import '@radix-ui/colors/mauve.css';
@import '@radix-ui/colors/grass.css';
</style>

<style scoped>
/* reset */
button,
fieldset,
input {
  all: unset;
}

.DialogOverlay {
  background-color: var(--black-a9);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.DialogContent {
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
.DialogContent:focus {
  outline: none;
}

.DialogTitle {
  margin: 0 0 30px 0; /* тут */
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

.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  /* padding: 16px 40px;  */
  cursor: pointer;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 49px;
}
.Button.grass {
  /* background-color: #029f59; */
  color: white;
}

.Button.green {
  background-color: var(--green-4);
  color: var(--green-11);
}
.Button.green:hover {
  background-color: var(--green-5);
}
.Button.green:focus {
  box-shadow: 0 0 0 2px var(--green-7);
}

.IconButton {
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--grass-11);
  position: absolute;
  top: 10px;
  right: 10px;
}
.IconButton:hover {
  background-color: var(--grass-4);
}
.IconButton:focus {
  box-shadow: 0 0 0 2px var(--grass-7);
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
