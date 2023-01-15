<script setup lang="ts">
import { watch, computed, Ref } from 'vue'
import { useRouteQuery } from '@vueuse/router'
import { ParsedContent, QueryBuilderWhere } from '@nuxt/content/dist/runtime/types';

const availabeTags = ['a', 'b', 'c']
const routeTags = useRouteQuery('tags', [] as string[], { mode: 'replace' }) as Ref<string | string[]>
const chosenTags = computed<string[]>({
  get: () => (typeof routeTags.value === 'string') ?  [routeTags.value] : routeTags.value,
  set: (value: string | string[]) => {
      routeTags.value = value
  }
})

const where = computed(() => {
  if (chosenTags.value.length > 0) 
    return { tags: { $contains: chosenTags.value } } as QueryBuilderWhere
  else
    return { } as QueryBuilderWhere
})
</script>

<template>
  <h1>Das hier wird mein Inhaltsverzeichnis</h1>

    <label v-for="tag in availabeTags">
        <input type="checkbox" name="choose-tags" v-model="chosenTags" :value="tag"> {{ tag }}
    </label>

    <ContentQuery path="posts" :where="where" v-slot="{ data }">
      <menu v-if="data.length > 0">
        <li v-for="article in data" :key="article._path">
          <a :href="article._path">{{ article.title }}</a>
        </li>
      </menu>
      <p v-else>No articles found.</p>
    </ContentQuery>
</template>


<style scoped>
label {
  display: block;
}
</style>
