<script lang="ts">
export default defineComponent({
  name: "OrganismsMarketplace",
  setup() {
    const isModalVisible = ref(false);

    const openModal = () => {
      isModalVisible.value = true;
    };

    const modalClosed = () => {
      isModalVisible.value = false;
    };

    const cards = computed(() => {
      return [
        {
          imageSrc: "/images/product/test-product.webp",
          imageAlt: "imagem do produto",
          title: "Anuncio do produto",
          price: "10000",
        },
        {
          imageSrc: "/images/product/test-product.webp",
          imageAlt: "imagem do produto",
          title: "Anuncio do produto",
          price: "10000",
        },
        {
          imageSrc: "/images/product/test-product.webp",
          imageAlt: "imagem do produto",
          title: "Anuncio do produto",
          price: "10000",
        },
        {
          imageSrc: "/images/product/test-product.webp",
          imageAlt: "imagem do produto",
          title: "Anuncio do produto",
          price: "10000",
        },
        {
          imageSrc: "/images/product/test-product.webp",
          imageAlt: "imagem do produto",
          title: "Anuncio do produto",
          price: "10000",
        },
        {
          imageSrc: "/images/product/test-product.webp",
          imageAlt: "imagem do produto",
          title: "Anuncio do produto",
          price: "10000",
        },
        {
          imageSrc: "/images/product/test-product.webp",
          imageAlt: "imagem do produto",
          title: "Anuncio do produto",
          price: "10000",
        },
        {
          imageSrc: "/images/product/test-product.webp",
          imageAlt: "imagem do produto",
          title: "Anuncio do produto",
          price: "10000",
        },
      ];
    });

    const itens = computed(() => {
      return [
        {
          message: "tipo do produto:",
          result: "test",
        },
        {
          message: "Tipo do peso:",
          result: "test",
        },
        {
          message: "Tipo do altura:",
          result: "test",
        },
        {
          message: "Tipo do lagura:",
          result: "test",
        },
        {
          message: "Tipo do quantidade:",
          result: "test",
        },
        {
          message: "Preço do produto:",
          result: "10000",
        },
      ];
    });

    return {
      cards,
      itens,
      isModalVisible,
      openModal,
      modalClosed,
    };
  },
});
</script>
<template>
  <div class="section_on-page">
    <MoleculeMyHeaderNav />
    <MoleculeCardImagem
      v-if="isModalVisible === false"
      :itens="cards"
      @open-modal="openModal"
    />
    <MoleculeModalCenter
      :isModalVisible="isModalVisible"
      :paragraph="itens"
      @modal-closed="modalClosed"
    />
    <MoleculeMyFooterNav />
  </div>
</template>
<style scoped lang="scss">
@import "styles.module.scss";
</style>
