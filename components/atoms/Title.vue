<template>
  <component :is="tag" :style="cssVar" class="title">
    <slot />
  </component>
</template>

<script>
export default {
  name: "AtomsTitle",
  props: {
    tag: {
      type: String,
      default: "h1",
    },
    maxWidth: {
      type: String,
      default: "100%",
    },
    fontSize: {
      type: String,
      default: "18px",
    },
    fontWeight: {
      type: String,
      default: "400",
    },
    color: {
      type: String,
      default: "var(--neutralDarkGrey1)",
    },
    cursor: {
      type: String,
      default: "",
    },
    fontFamily: {
      type: String,
      default: "Sora",
      validator: (value) => {
        const fontFamilyOptions = ["Sora", "Poppins"];

        return fontFamilyOptions.includes(value);
      },
    },
    lineHeight: {
      type: String,
      default: "140%",
    },
    textAlign: {
      type: String,
      default: "left",
    },
  },
  computed: {
    cssVar() {
      return {
        "--fontSize": this.fontSize,
        "--fontWeight": this.fontWeight,
        "--color": this.color,
        "--fontFamily": this.fontFamily,
        "--lineHeight": this.lineHeight,
        "--textAlign": this.textAlign,
        "--maxWidth": this.maxWidth,
        "--cursor": this.cursor,
      };
    },
  },
};
</script>

<style scoped>
.title {
  font-family: var(--fontFamily);
  font-size: var(--fontSize);
  color: var(--color);
  font-weight: var(--fontWeight);
  line-height: var(--lineHeight);
  text-align: var(--textAlign);
  max-width: var(--maxWidth);
  width: 100%;
  cursor: var(--cursor);
}
</style>
