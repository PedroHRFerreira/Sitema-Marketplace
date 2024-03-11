<template>
  <div>
    <MoleculeMyHeaderNav />
    <h1>test de marketplace</h1>
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
  </div>
</template>
<script>
export default {
  name: "IndexPage",
  data() {
    return {
      cards: [
        {
          imageSrc: "/images/product/test-product.webp",
          imageAlt: "imagem do produto",
          title: "Anuncio do produto",
          price: "10000",
        },
      ],
      itens: [
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
      ],
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    modalClosed() {
      this.isModalVisible = false;
    },
  },
};
</script>
```
