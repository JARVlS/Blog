<script setup lang="ts">
import { watch, computed, Ref } from "vue";
import { useRouteQuery } from "@vueuse/router";
import {
  ParsedContent,
  QueryBuilderWhere,
} from "@nuxt/content/dist/runtime/types";

const availabeTags = ["a", "b", "c", "definite", "tech"];
const routeTags = useRouteQuery("tags", [] as string[], {
  mode: "replace",
}) as Ref<string | string[]>;
const chosenTags = computed<string[]>({
  get: () =>
    typeof routeTags.value === "string" ? [routeTags.value] : routeTags.value,
  set: (value: string | string[]) => {
    routeTags.value = value;
  },
});

const where = computed(() => {
  if (chosenTags.value.length > 0)
    return { tags: { $contains: chosenTags.value } } as QueryBuilderWhere;
  else return {} as QueryBuilderWhere;
});
</script>

<template>
  <div class="page_content blog_selection">
    <h1>Das hier wird mein Inhaltsverzeichnis</h1>

    <div class="filters">
      <p>Filters</p>
      <custom-checkbox
        v-for="tag in availabeTags"
        :label="tag"
        v-model:array="chosenTags"
        :array-element="tag"
        :class="chosenTags.includes(tag) ? 'checked' : ''"
      ></custom-checkbox>
    </div>

    <ContentQuery path="posts" :where="where" v-slot="{ data }">
      <menu  id="available_blogs">
        <p class="header">Available Blogs</p>
        <nuxt-link
          v-for="article in data"
          :key="article._path"
          :to="article._path"
          class="blog_link"
          v-if="data.length > 0"
          >
          <span class="title">
            {{ article.title }}
          </span>
          -
          <span class="description">
            {{ article.description.substring(0, 25) }}
            {{ article.description.length > 15?'...' : '' }}
          </span>
          </nuxt-link
        >
        <p v-else id="none_found">Sorry... No articles found.</p>
      </menu>
    </ContentQuery>
  </div>
</template>

<style scoped>
#none_found {
  color: rgba(255, 0, 0, 0.75);
  font-size: 1.3rem;
  font-weight: bold;
}

.blog_selection {
  width: 65vw;
  margin: auto;
  box-shadow: 0 0 15px var(--shadows);
  margin-top: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.filters {
  display: grid;
  max-width: 100%;
  position: relative;
  align-items: center;
  grid-template-columns: repeat(3, minmax(calc(33% - 2rem), 9rem));
  gap: 1rem;
}

.filters > p {
  padding: 0 0 0 1rem;
  font-size: 1.2rem;
}

.filters > .checkbox_input_group {
  display: block;
  padding: 1rem;
  background: var(--bg_main);
  box-shadow: 0 0 15px var(--shadows);
  border-radius: 5px;
  transition: box-shadow 0.5s;
}

.filters > .checkbox_input_group.checked {
  box-shadow: 0 0 5px var(--text_main);
}
#available_blogs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%;
  margin-inline: auto;
  margin-top: 2rem;
}

#available_blogs>.header{
  font-weight: bold;
  font-size: 1.75rem;
}

.blog_link {
  width: 100%;
  text-decoration: none;
  color: var(--text_main);
  padding: 1rem 2rem;
  box-shadow: 0 0 15px var(--shadows);
  border-radius: 5px;
  font-size: 1.1rem;
}

.blog_link>.title{
  font-weight: bold;
}
</style>
