<template>
  <main class="content">
    <div>
      <MoleculesMyHeaderNav v-if="!isLinksPage" />
      <slot />
      <MoleculesMyFooterNav v-if="!isLinksPage" />
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
