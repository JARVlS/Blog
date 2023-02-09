<template>
    <div id="search">
        <input id="searchBar" type="search" v-model="searched" required />
        <label id="searchBarLabel" for="searchBar">Search...</label>
      </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';


const props = defineProps<{
    searchModel: string
}>()

const emit = defineEmits<{
    (e: "update:searchModel", value: string):void
}>()

const searched: Ref<string> = ref(props.searchModel)

watch(searched, (n,o)=>{
    emit("update:searchModel", n)
})

</script>

<style scoped>

#search {
    width: 100%;
    padding: 0 10%;
    position: relative;
    background: var(--anti_base);
    color: var(--base);
}

#search * {
    cursor: text;
    font-size: 1.1rem;
    font-weight: 900;
    background: var(--anti_base);
    color: var(--base);
}
#searchBar {
    width: 100%;
    height: 2.5rem;
    position: relative;
    margin-top: 1rem;
    padding: 0 1rem;
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 2px solid #aaa;
    transition: border-color 0.2s;
    z-index: 10;
}
#searchBar:focus,
#searchBar:valid {
    border-bottom-color: var(--color_main);
}
#searchBarLabel {
    position: absolute;
    background: transparent;
    color: #888;
    left: calc(10% + 1rem);
    top: 1.5rem;
    transition: top 0.2s, font-size 0.2s, color 0.2s, opacity 0.2s;
    z-index: 11;
}
#searchBar:focus ~ #searchBarLabel,
#searchBar:valid ~ #searchBarLabel {
    top: 0.5rem;
    font-size: 0.9rem;
    color: var(--base);
    opacity: 0.5;
}
</style>