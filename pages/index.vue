<template>
  <div>
    <h1 class="header">Hello World!</h1>
    <h2 class="header-2">Meow!!</h2>
  </div>
</template>

<script>
console.log('Hello World!');
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Open+Sans:ital,wdth@0,75..100;1,75..100&display=swap');

.montserrat {
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.open-sans {
  font-family: 'Open Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'wdth';
}

.header {
  font-family: Montserrat;
  color: darkseagreen;
  text-shadow: 1px 1px 3px rgb(133, 175, 133);
  text-align: center;
}

.header-2 {
  font-family: Open Sans;
  color: deepskyblue;
  text-align: center;
  font-size: 100px;
}
</style>
