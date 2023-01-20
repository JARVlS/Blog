<template>
  <main>
    <content-doc>
      <!-- Der not-found-slot entspricht einer 404-Seite -->
      <template v-slot:not-found>
        Hey, irgendwie fehlt der Post!!! Sorry, Leute.
      </template>

      <!-- Der default-slot zeigt Dokument, wenn eines gefunden wurde -->
      <template v-slot="{ doc }">
        <h1>{{ doc.title }}</h1>
        <ul>
          <li v-for="tag in doc.tags">{{ tag }}</li>
        </ul>
        <ContentRenderer :value="doc"></ContentRenderer>
      </template>
    </content-doc>
  </main>
</template>
