<template>
  <div>
    <!-- liest aus /pages -->
    <NuxtPage />
   
    <!-- liest aus /content, siehe https://content.nuxtjs.org/get-started -->
    <!--
      <ContentDoc />
    -->
  </div>
</template>


<style>
@font-face {
  font-family: Brolink;
  src: url("assets/fonts/brolink/BrolinkDemo-VGyMZ.otf");
}

:root {
    --bg_main: #111111;
    --midnight_blue: #103850;
    --blue_gray: #738FA7;
    --text_main: #ffffff;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Calibri, sans-serif;
}

.page{
  background: var(--bg_main);
  color: var(--text_main);
  height: 100vh;
  width: 100vw;
  overflow: auto;
  position: relative;
}

</style>