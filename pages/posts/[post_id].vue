<template>
  <main>
    <content-doc>
      <!-- Der not-found-slot entspricht einer 404-Seite -->
      <template v-slot:not-found>
        <h2 id="not_found">Hey, irgendwie fehlt der Post!!! Sorry, Leute.</h2>
      </template>

      <!-- Der default-slot zeigt Dokument, wenn eines gefunden wurde -->
      <template v-slot="{ doc }">
        <div class="blog_post">
          <h1 class="post_title">{{ doc.title }}</h1>
          <!-- <ul>
            <li v-for="tag in doc.tags">{{ tag }}</li>
          </ul> -->
          <ContentRenderer class="post_content" :value="doc"></ContentRenderer>
        </div>
      </template>
    </content-doc>
  </main>
</template>

<style scoped>
#not_found {
  color: rgba(255, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  padding: 2rem 1rem;
}
.blog_post{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 7vh);
  margin: auto;
  overflow: auto;
}

.post_title{
  width: 100%;
  max-width: 80vw;
  padding: 1rem 1rem 2rem 1rem;
  margin-top: 0;
  /* border-top: 2px dashed var(--shadows); */
  background-color: var(--bg_main);
  text-align: center;
  position: sticky;
  top: 0;
  box-shadow:  0 0 20px  var(--shadows);
  border-radius: 0 0 5px 5px;
}

.post_title::before, .post_title::after{
  content: "";
  position: absolute;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 1.4rem -1.3rem var(--bg_main);
}

.post_title::before{
  left: -3rem;
  top: -2px;
  box-shadow: 1.4rem -1.3rem var(--bg_main);
}
.post_title::after{
  right: -3rem;
  top: -2px;
  box-shadow: -1.4rem -1.3rem var(--bg_main);
}

.post_content{
  font-size: 1.3rem;
  max-width: 70rem;
  margin-inline: auto;
  padding: 2rem 2rem 4rem 2rem;
}
</style>