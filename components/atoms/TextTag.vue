<template>
  <span class="text__tag" :style="cssVar">
    <AtomIcon
      filled
      :current-color="color"
      name="dot"
      width="6px"
      height="6px"
    />
    {{ tag }}
  </span>
</template>
<script>
export default {
  name: "AtomsTextTag",
  props: {
    tag: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "var(--brandPrimary6)",
    },
    fontSize: {
      type: String,
      default: "var(--fontSizeTextP4)",
    },
  },
  computed: {
    cssVar() {
      return {
        "--color": this.color,
        "--fontSize": this.fontSize,
      };
    },
  },
};
</script>
<style scoped>
.text__tag {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color);
  font-weight: 500;
  font-size: var(--fontSize);
}
</style>
