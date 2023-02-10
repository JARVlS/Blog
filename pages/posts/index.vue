<script setup lang="ts">
import { watch, computed, Ref } from "vue";
import { useRouteQuery } from "@vueuse/router";
import {
  ParsedContent,
  QueryBuilderWhere,
} from "@nuxt/content/dist/runtime/types";

const availabeTags = ["Coding", "Tech", "Hacking", "Laptops", "Gaming"];

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

const blog_search = ref("");
const limit: Ref<number> = ref(10);

const where = computed(() => {
  let temp = {} as QueryBuilderWhere;
  if (chosenTags.value.length > 0) {
    temp.tags = { $contains: chosenTags.value };
    // return { tags: { $contains: chosenTags.value } } as QueryBuilderWhere;
  }
  if (blog_search.value != "") {
    var blog_search_array: string[] = blog_search.value.split(",");
    temp.$and = [];
    blog_search_array.forEach((search) => {
      while (search.startsWith(" ")) {
        search = search.slice(1, search.length);
      }
      temp.$and?.push({
        $or: [
          { description: { $icontains: search } },
          { title: { $icontains: search } },
        ],
      });
    });
  }
  return temp;
});
</script>

<template>
  <div class="page_content blog_selection">
    <h1 id="headline">Select Your Read</h1>

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
    <search-bar v-model:search-model="blog_search"></search-bar>

    <ContentQuery path="posts" :where="where" v-slot="{ data }" :limit="limit">
      <menu id="available_blogs">
        <p class="header">Available blogs</p>
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
            {{ article.description.length > 25 ? "..." : "" }}
          </span>
          <span class="full_description">
            {{ article.description }}
          </span>
        </nuxt-link>
        <p v-else id="none_found">Sorry... No articles found.</p>
      </menu>
      <div
        class="show_more"
        @click="
          if (data.length == limit) {
            limit = limit + 10;
          }
        "
      >
        Show more
      </div>
    </ContentQuery>
  </div>
</template>

<style scoped>
#none_found {
  color: rgba(255, 0, 0, 0.75);
  font-size: 1.3rem;
  font-weight: bold;
}

#headline {
  margin-bottom: 1rem;
}

.blog_selection {
  width: 92vw;
  margin: auto;
  box-shadow: 0 0 15px var(--shadows);
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem 1rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 5px;
  /* transition: width 0.3s, padding .3s; */
}

.filters {
  display: grid;
  max-width: 100%;
  position: relative;
  align-items: center;
  grid-template-columns: repeat(2, minmax(calc(33% - 2rem), 9rem));
  gap: 0.5rem;
  transition: gap 0.3s;
}

@media (min-width: 850px) {
  .blog_selection {
    width: 65vw;
    padding: 2rem;
  }
  .filters {
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(calc(33% - 2rem), 9rem));
  }
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
  box-shadow: 0 0 15px -2px var(--color_main);
}
#available_blogs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%;
  margin-inline: auto;
  margin-top: 2rem;
}

#available_blogs > .header {
  font-weight: bold;
  font-size: 1.75rem;
}

.blog_link {
  position: relative;
  width: 100%;
  text-decoration: none;
  color: var(--text_main);
  padding: 1rem 2rem;
  box-shadow: 0 0 15px var(--shadows);
  border-radius: 5px;
  font-size: 1.1rem;
}

.blog_link > .title {
  font-weight: bold;
}

@media (min-width: 850px) {
  .blog_link {
    padding: 1rem 2rem 1rem 3.5rem;
  }
  .blog_link::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 100%;
    border-radius: 5px 0 0 5px;
    background-color: var(--color_main);
    transition: width 0.2s;
  }

  .blog_link:hover::before {
    width: 2.5rem;
  }
}

.show_more {
  cursor: pointer;
  position: relative;
  color: var(--color_main);
  font-weight: bold;
  padding: 1rem 2rem;
  box-shadow: 0 0 15px var(--shadows);
  border-radius: 5px;
  margin-top: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.show_more:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px -2px var(--color_main);
}

.full_description {
  position: absolute;
  display: none;
  bottom: -1rem;
  width: 45%;
  left: 50%;
  padding: 1rem 2rem;
  z-index: 10;
  background-color: var(--bg_main);
  box-shadow: 0 0 15px var(--shadows);
  border-radius: 5px;
  transform: scale(0);
  opacity: 0;
  transition: opacity 0.3s;
}

.blog_link:hover > .full_description {
  transform: scale(1);
  opacity: 1;
}
</style>
