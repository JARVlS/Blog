<template>
  <div class="navigation">
      <ul id="navigation_links">
          <li>
              <nuxt-link class="navigation_link" to="/">HOME</nuxt-link>
            </li>
            <li>
                <nuxt-link class="navigation_link" to="/posts">POSTS</nuxt-link>
            </li>
        </ul>
        <h1 id="logo">LOGO</h1>
  </div>
</template>

<style scoped>
.navigation {
  padding: .5rem 2rem;
  display: grid;
  grid-template-columns: auto max-content;
  align-items: center;
  gap: min(3vw, 3rem);
  box-shadow: 0 0 20px var(--shadows);
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
  background-color: var(--text_main);
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

#logo{
  font-size: 2.5rem;
}
</style>
