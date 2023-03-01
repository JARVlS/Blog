<template>
  <!-- liest aus /pages -->
  <div class="page" lang="en">
  <navigation></navigation>
  <NuxtPage/>

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
  --bg_main: #181818;
  --midnight_blue: #103850;
  --blue_gray: #738fa7;
  --text_main: #ffffff;
  --shadows: #000000;
  --color_main: #00fd87;
  --color_secondary: #00ffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Calibri, sans-serif;
}

.page {
  background: var(--bg_main);
  color: var(--text_main);
  height: 100vh;
  width: 100vw;
  overflow: auto;
  position: relative;
}

.page_content {
  padding: 2rem;
}

*::selection {
  background-color: var(--text_main);
  color: var(--bg_main);
}

.container {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
/* .page-leave-to {
  transition-delay: 0;
}
.page-enter-from {
  transition-delay: .4s;
} */
</style>
