<template>
  <img v-if="src" :src="src" :alt="alt" :style="cssVar" class="image" />
</template>

<script>
export default {
  name: "AtomsImage",
  props: {
    src: {
      type: String,
      require: true,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: "100%",
    },
    maxWidth: {
      type: String,
      default: "auto",
    },
    borderRadius: {
      type: String,
      default: "0px",
    },
    height: {
      type: String,
      default: "auto",
    },
    href: {
      type: String,
      default: null,
    },
  },
  computed: {
    cssVar() {
      return {
        "--width": this.width,
        "--maxWidth": this.maxWidth,
        "--height": this.height,
        "--borderRadius": this.borderRadius,
      };
    },
  },
};
</script>
<style scoped>
.image {
  width: var(--width);
  max-width: var(--maxWidth);
  border-radius: var(--borderRadius);
  overflow: hidden;
  height: var(--height);
}
</style>
