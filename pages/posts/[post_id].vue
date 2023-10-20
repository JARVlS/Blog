<template>
  <div class="container">
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
          <ContentRendererMarkdown class="post_content" :value="doc"></ContentRendererMarkdown
            >
        </div>
      </template>
    </content-doc>
  </div>
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
  position: relative;
  height: calc(100vh - 7rem);
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
  z-index: 101;
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


<style>
.content_section{
  padding: 1rem 0 ;
}
.content_section h3, .content_section h2{
  margin: 1.5rem 0 .5rem 0;
}
.content_section a{
  color: var(--color_main);
  font-weight: bold;
}
.link_section{
  display: grid;
  grid-template-columns: auto auto;
  gap: 5rem;
  padding: 1rem;
}
.top_quote{
  text-align: center;
  border-radius: 10px;
  border: 3px solid var(--color_main);
  padding: 1rem;
  position: relative;
}

.top_quote::before, .top_quote::after{
  content: '"';
  font-size: 3rem;
  height: 1.5rem; 
  width: 1.5rem;
  padding: .25rem 1rem;
  position: absolute;
  background-color: var(--bg_main);
}

.top_quote::before{
  top: -1.25rem;
  left: 1rem;
}
.top_quote::after{
  bottom: -.75rem;
  right: 1rem;
}

.post_point_details {
  margin-top: 1rem;
}
.post_point_details+.post_point_details {
  margin-top: 0;
}
</style>