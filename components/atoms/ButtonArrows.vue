<template>
  <button
    class="button"
    type="button"
    :style="cssVar"
    @click="$emit('click', $event)"
  >
    <AtomIcon
      filled
      :current-color="iconColor"
      :name="name"
      width="30px"
      height="30px"
    />
  </button>
</template>

<script>
export default {
  name: "AtomsButton",
  props: {
    width: {
      type: String,
      default: "40px",
    },
    iconColor: {
      type: String,
      default: "var(--neutralLightGrey)",
    },
    iconColorHover: {
      type: String,
      default: "var(--neutralLightGrey)",
    },
    name: {
      type: String,
      default: "chevron-right",
    },
    minWidth: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "40px",
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
      default: "var(--brandPrimary6)",
    },
    padding: {
      type: String,
      default: "8px",
    },
    hoverBgColor: {
      type: String,
      default: "var(--brandPrimary6)",
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
        "--hoverBorderColor": this.hoverBorderColor,
        "--minWidth": this.minWidth,
        "--iconColor": this.iconColor,
        "--iconColorHover": this.iconColorHover,
      };
    },
  },
};
</script>

<style scoped>
.button {
  width: var(--width);
  min-width: var(--minWidth);
  height: var(--height);
  padding: var(--padding);
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadius);
  color: var(--color);
  transition: 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button:hover {
  background: var(--hoverBgColor);
  color: var(--colorHover);
  border-color: var(--hoverBorderColor);
}
</style>
