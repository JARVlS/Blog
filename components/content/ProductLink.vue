<script setup lang="ts">
defineProps<{
  // name: string;
  // price: string;
  link: string;
  image: string;
}>();
</script>

<template>
  <div class="product_ad">
    <h2 class="product_name_headline">
      <contentSlot :use="$slots.name" unwrap="" />
    </h2>
    <!-- <div class="image" id="image_container">
      <contentSlot :use="$slots.image" unwrap="p"/>
    </div> -->

    <a :href="link" class="image_container">
      <img :src="image" alt="" class="product_image" />
    </a>

    <a :href="link" class="product_link" target="_blank"
      ><contentSlot :use="$slots.name" unwrap=""
    /></a>
    <p class="price">Price: <contentSlot :use="$slots.price" unwrap="" /></p>
  </div>
</template>

<style scoped>

.product_ad {
  width: 100%;
  padding: 2rem;
  margin-inline: auto;
  box-shadow: 0 0 20px var(--shadows);
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.product_link {
  text-decoration: none;
  text-align: center;
  color: var(--bg_main);
  background-color: var(--color_main);
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px var(--color_main);
  font-weight: bold;
}
.product_image {
  border-radius: 5px;
  width: 100%;
}

.product_name_headline{
  text-align: center;
}


</style>
