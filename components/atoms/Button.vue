<template>
  <button
    class="button"
    type="button"
    :style="cssVar"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "AtomsButton",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    minWidth: {
      type: String,
      default: "auto",
    },
    maxWidth: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "48px",
    },
    bgColor: {
      type: String,
      default: "var(--brandPrimary6)",
    },
    color: {
      type: String,
      default: "var(--neutralLightGrey)",
    },
    colorHover: {
      type: String,
      default: "var(--neutralLightGrey)",
    },
    borderRadius: {
      type: String,
      default: "4px",
    },
    borderColor: {
      type: String,
      default: "var(--brandPrimaryDark7)",
    },
    padding: {
      type: String,
      default: "14px 24px",
    },
    hoverBgColor: {
      type: String,
      default: "var(--brandPrimaryDark7)",
    },
    fontWeight: {
      type: String,
      default: "600",
    },
    fontSize: {
      type: String,
      default: "var(--fontSizeTextP5)",
    },
    hoverBorderColor: {
      type: String,
      default: "var(--brandPrimary6)",
    },
  },
  computed: {
    cssVar() {
      return {
        "--width": this.width,
        "--height": this.height,
        "--padding": this.padding,
        "--bgColor": this.bgColor,
        "--color": this.color,
        "--colorHover": this.colorHover,
        "--borderRadius": this.borderRadius,
        "--borderColor": this.borderColor,
        "--hoverBgColor": this.hoverBgColor,
        "--fontWeight": this.fontWeight,
        "--fontSize": this.fontSize,
        "--hoverBorderColor": this.hoverBorderColor,
        "--minWidth": this.minWidth,
        "--maxWidth": this.maxWidth,
      };
    },
  },
};
</script>
<style scoped>
.button {
  width: var(--width);
  min-width: var(--minWidth);
  max-width: var(--maxWidth);
  height: var(--height);
  padding: var(--padding);
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadius);
  color: var(--color);
  font-family: "Poppins", sans-serif;
  font-weight: var(--fontWeight);
  font-size: var(--fontSize);
  font-style: normal;
  transition: 1s ease;
}

.button:hover {
  background: var(--hoverBgColor);
  color: var(--colorHover);
  border-color: var(--hoverBorderColor);
}
</style>
