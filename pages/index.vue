<template>
  <div>
    <h1>test de marketplace</h1>
    <MoleculeCardImagem :itens="cards" />
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
          paragraph:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
      ],
    };
  },
};
</script>
```
