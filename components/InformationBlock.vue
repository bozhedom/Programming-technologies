<template>
  <div class="info-block">
    <div class="container">
      <div class="main-info-card">
        <h3 class="header-card">Каждый проект для нас - важный</h3>
        <p class="paragraph-info-card">
          Мы строительная компания полного цикла. <br />
          <br />
          <br />
          Вникаем во все детали, разрабатываем планировку будущего дома,
          продумываем конструктивные решения и общую архитектурную концепцию
        </p>
      </div>

      <div class="info-card">
        <House class="house-svg svg" />
        <div class="text-card">
          <h5 class="header-info-card">57 домов</h5>
          <p class="paragraph-info-card">
            спроектировали и построили “под ключ”
          </p>
        </div>
      </div>
      <div class="info-card">
        <Calendar class="calendar-svg svg" />
        <div class="text-card">
          <h5 class="header-info-card">14 лет</h5>
          <p class="paragraph-info-card">
            мы на рынке загородного строительства
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import House from '~/assets/icons/house.svg';
import Calendar from '~/assets/icons/calendar.svg';
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

.info-block {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  max-width: 1440px;
  padding-inline: MainScss.$mainSideMargin;
  margin-bottom: 60px;
  gap: 16px;
  @include for-tablet-portrait {
    padding-inline: MainScss.$mainSideMarginPhone;
  }

  @include for-phone-big {
    grid-template-columns: 1fr;
    padding-inline: MainScss.$mainSideMarginPhone;
    width: 100%;
  }
}

.svg {
  color: MainScss.$lightGreen;
  width: 24px;
  height: 24px;
}

.main-info-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  font-family: var(--font-title);
  height: 259px;
  
  @include for-phone-big {
    height: 100%;
  }
}

.header-card {
  font-size: 38px;
  font-weight: bold;
}

.header-info-card {
  font-family: var(--font-title);
  font-size: 24px;
  font-weight: 700;
}

.info-card {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  background-color: MainScss.$infoCards;
  border-radius: 24px;
  align-self: flex-end;
}

.text-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.paragraph-info-card {
  color: #666666;
  font-size: 20px;
  // justify-content: space-between;
}
</style>
