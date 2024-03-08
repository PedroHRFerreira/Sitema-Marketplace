<template>
  <main class="content">
    <div>
      <OrganismHeaderNav v-if="!isLinksPage" />
      <slot />
      <OrganismFooterSection v-if="!isLinksPage" />
    </div>
  </main>
</template>

<script>
export default {
  name: "DefaultLayout",

  computed: {
    // Verifica se a rota atual é /links
    isLinksPage() {
      return this.$route.path === "/links";
    },
  },
};
</script>

<style>
.content {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
}
</style>
