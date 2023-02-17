<template>
  <div
    class="navigation"
    :style="$route.path=='/'?'width: max-content; padding: 1rem 3rem !important; position: fixed; border-radius: 0 0 0 5px;  right: 0; top: 0;':''"
  >
    <ul id="navigation_links">
      <li>
        <nuxt-link class="navigation_link" to="/">HOME </nuxt-link>
      </li>
      <li>
        <nuxt-link class="navigation_link" to="/posts">POSTS</nuxt-link>
      </li>
    </ul>
    <img id="logo" src="../assets/Images/Icon/bookv3_v1.png" />
  </div>
</template>

<style scoped>
.navigation {
  padding: 0.5rem 2rem;
  display: grid;
  grid-template-columns: auto max-content;
  align-items: center;
  gap: min(3vw, 3rem);
  box-shadow: 0 0 20px var(--shadows);
  background-color: var(--bg_main);
  z-index: 100;
  transition: all .2s;
}

#navigation_links {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: min(2vw, 2rem);
}

.navigation_link {
  text-decoration: none;
  color: inherit;
  font-size: 1.4rem;
  position: relative;
  padding: 0.5rem 1rem;
  z-index: 2;
  font-weight: 600;
  transition: color 0.2s;
}

.navigation_link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: var(--color_main);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s;
  z-index: -1;
}
.navigation_link:hover {
  color: var(--bg_main);
}
.navigation_link:hover::before {
  transform: scaleX(1);
}

#logo {
  font-size: 2.5rem;
  height: 4.5rem;
  color: var(--color_main);
}
</style>
<style v-if="$route.path == '/'"></style>
