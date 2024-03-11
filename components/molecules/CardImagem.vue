<template>
  <article class="section section_container">
    <div v-for="(item, index) in itens" :key="index" class="container-card">
      <img width="100%" :src="item.imageSrc" :alt="item.imageAlt" />
      <div>
        <div class="line"></div>
        <AtomTitle :font-size="atomTitleFontSize" :color="atomTitleColor">{{
          item.title
        }}</AtomTitle>
        <AtomParagraph
          :type="atomParagraphFontSize"
          :color="atomParagraphColor"
        >
          Preço: {{ formatPrice(item.price) }}
        </AtomParagraph>
      </div>
      <div>
        <AtomButton
          :bg-color="atomButtonBgColor"
          :hover-bg-color="atomButtonBgColorHover"
          :border-color="atomButtonBorderColor"
          :hover-border-color="atomButtonBorderColorHover"
          :max-width="atomButtonMaxWidth"
          @click="openModal"
          >{{ textAtomButton }}</AtomButton
        >
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: "MoleculesCardImagem",
  props: {
    itens: {
      type: Array,
      default: () => [],
    },
    atomTitleFontSize: {
      type: String,
      default: "20px",
    },
    atomTitleColor: {
      type: String,
      default: "aqua",
    },
    atomParagraphFontSize: {
      type: String,
      default: "var(--fontSizeTextP4)",
    },
    atomParagraphColor: {
      type: String,
      default: "var(--neutralLightGrey)",
    },
    atomButtonBgColor: {
      type: String,
      default: "black",
    },
    atomButtonBgColorHover: {
      type: String,
      default: "#14b8b8",
    },
    atomButtonBorderColor: {
      type: String,
      default: "aqua",
    },
    atomButtonBorderColorHover: {
      type: String,
      default: "#14b8b8",
    },
    atomButtonMaxWidth: {
      type: String,
      default: "368px",
    },
    textAtomButton: {
      type: String,
      default: "Compre",
    },
  },
  methods: {
    openModal() {
      this.$emit("open-modal");
    },
    formatPrice(number) {
      if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + " mi";
      }
      if (number >= 1000) {
        return (number / 10000).toFixed(0) + " mil";
      }
      return number;
    },
  },
};
</script>
<style scoped>
.section_container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 64px;
}
.container-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  gap: 22px;
  padding: 10px;

  border: 1px solid aqua;
  border-radius: 12px;
}
.line {
  content: "";
  margin-left: -11px;
  background-color: aqua;
  max-width: 350px;
  width: 110%;
  height: 1px;
}
@media (max-width: 375px) {
  .line {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
