<template>
  <article class="container content-aside">
    <section>
      <ul>
        <li v-for="(item, index) in itens" :key="index" class="content-ul">
          <AtomTitle :color="item.colorTitle" :font-size="item.fontSizeTitle">{{
            item.title
          }}</AtomTitle>
          <AtomParagraph :color="item.color" type="text-p2" width="100%">{{
            item.text
          }}</AtomParagraph>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: "MoleculesSideModal",
  props: {
    itens: {
      type: Array,
      default: () => [
        {
          colorTitle: "red",
          fontSizeTitle: "28px",
          title: "Sobre mim",

          color: "red",
          text: "github https...",
        },
      ],
    },
  },
};
</script>
<style scoped>
.content-aside {
  width: 100%;
  display: flex;
}
.content-ul {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 64px;
  padding: 5px;
}
</style>
