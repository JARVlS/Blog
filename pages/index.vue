<template>
  <div class="container" @mousemove="rotateElement($event)" :style="'--rotateX:'+-offsetY+'deg;--rotateY:' + offsetX+'deg;'">
    <div class="main_image"></div>
    <div class="page_content">
      <h1 id="welcome_headline">
        <span id="welcome">Welcome to </span><span id="name">Tech Diaries</span>
      </h1>
      <div class="paragraph">
        <div class="headline">What you're in for</div>
        <div class="content">
          This site here to help and guide you on your journey to becoming
          better and more well informed about all things concerning
          <b>Tech</b> and especially <b>Coding</b>. We will be posting articles
          on a variety of topics, ranging from the basics of coding to more
          advanced topics, from which device you should choose to what operating
          system you should run.
        </div>
      </div>
      <div class="paragraph">
        <div class="headline">From coders for coders</div>
        <div class="content">
          This site is run by coders to help other coders. It aims to help with
          overcoming difficulties you might face, that we may already have a
          solution for. <br /><br />
          As coders ourselves, we have an idea on what topics might be important
          to cover and will try to focus on those at first. <br /><br />
          That might be a code example or a link to a tutorial video, or it
          might be advice on how to select your working device.
        </div>
      </div>
      <div class="paragraph">
        <div class="headline">The mission</div>
        <div class="content">
          Our objective is to help you become a better coder, and to help you
          find the right tools for whatever job you might be doing.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">  

const offsetX = ref(0)
const offsetY = ref(0)


function rotateElement(event: MouseEvent) {
  var x = event.clientX;
  var y = event.clientY;
  
  const middleX = window.innerWidth / 4;
  const middleY = window.innerHeight / 4;
  
  offsetX.value = ((x - middleX) / middleX) * 10;
  offsetY.value = ((y - middleY) / middleY) * 10;
}
</script>

<style scoped>
#welcome_headline {
  width: max-content;
  font-size: 2.5rem;
  /* text-shadow: 2px 2px 20px var(--color_main),
    -2px -2px 20px var(--color_secondary); */
  /* color: var(--color_main); */
  color: transparent;
  background-image: url("../assets/Images/BG/green_ice.png");
  background-origin: bottom left;
  background-clip: text;
  background-size: cover;
  background-repeat: none;
}
#welcome {
  /* background-color: var(--color_main); */
  /* color: var(--color_main); */
  /* padding: 0 .5rem 0 1rem; */
  border-radius: 5px 0 0 5px;
}
#name {
  /* color: var(--color_main); */
  /* padding-left: .5rem; */
}
.container{
  top: 0;
}
.page_content {
  /* background-color: var(--text_main); */
  /* background-image: url("../assets/Images/BG/green_ice.png"); */
  /* background-image: linear-gradient( var(--text_main), var(--color_main));
  background-position: 0 0;
  background-clip: text;
  color: transparent; */
  width: 30%;
  z-index: 2;
  position: relative;
}

.paragraph {
  margin: 4rem 0;
  color: var(--text_main);
  background: rgba(20, 20, 20, 1);
  padding: 1rem;
  border-radius: 10px;
  position: relative;
  overflow: visible;
  transform-style: preserve-3d;
  perspective: 2000px;
  transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
}

.paragraph::before,
.paragraph::after {
  content: "";
  position: absolute;
  border-radius: inherit;
}

.paragraph::after {
  inset: -1rem;
  background: linear-gradient(-225deg, var(--color_main), var(--bg_main));
  /* filter: blur(1rem); */
  transform: translateZ(-50px);
}
.paragraph::before {
  background: rgba(0, 0, 0, .75);
  inset: .5rem;
  filter: blur(1rem);
  transform: translateZ(-49px);
}

.paragraph .headline {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--color_main);
}

.paragraph .content {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  opacity: 0.75;
  /* color: rgba(0,0,0,0.4); */
}
.main_image {
  width: 60%;
  height: 100%;
  background-image: url("../assets/Images/BG/laptop_wallpaper3.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left top;
  position: fixed;
  top: 0;
  left: 30%;
  pointer-events: none;
  z-index: 1;
}

/* .page-leave-active>.container>.main_image{
  opacity: 0;
} */


</style>
