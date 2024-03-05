<template>
  <div class="button" :style="cssVar" @click="$emit('click', $event)">
    <span class="text">{{ text }}</span>
    <div class="icon"><AtomIcon :name="icon" /></div>
  </div>
</template>
<script>
export default {
  name: "AtomsButtonLink",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    minWidth: {
      type: String,
      default: "auto",
    },
    text: {
      type: String,
      default: "Quero saber mais",
    },
    icon: {
      type: String,
      default: "arrow-left",
    },
    color: {
      type: String,
      default: "var(--brandPrimary6)",
    },
    fontWeight: {
      type: String,
      default: "500",
    },
    fontSize: {
      type: String,
      default: "14px",
    },
  },
  computed: {
    cssVar() {
      return {
        "--width": this.width,
        "--minWidth": this.minWidth,
        "--color": this.color,
        "--fontWeight": this.fontWeight,
        "--fontSize": this.fontSize,
      };
    },
  },
};
</script>
<style scoped>
.button {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  width: var(--width);
  min-width: var(--minWidth);
}
.text {
  color: var(--color);
  font-weight: var(--fontWeight);
  font-size: var(--fontSize);
}
.button:hover .icon {
  transform: translateX(0.25rem);
  transition: 0.3s ease-in-out;
}
</style>
