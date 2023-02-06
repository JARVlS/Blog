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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.post_title{
  padding: 1rem 0 2rem 0;
}

.post_content{
  font-size: 1.3rem;
}
</style>