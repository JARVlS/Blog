<template>
  <main>
    <content-doc>
      <template v-slot="{ doc }">
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </template>
    </content-doc>
  </main>
</template>

<style scoped></style>