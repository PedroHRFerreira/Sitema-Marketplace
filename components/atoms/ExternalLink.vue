<template>
  <a
    :href="href"
    class="link"
    target="_blank"
    :aria-label="ariaLabel"
    :style="cssVars"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "AtomsExternalLink",
  props: {
    color: {
      type: String,
      default: "var(--neutralLightGrey9)",
    },
    fontSize: {
      type: String,
      default: "var(--fontSizeTextP4)",
    },
    fontWeight: {
      type: String,
      default: "400",
    },
    href: {
      type: String,
      default: "#",
    },
    ariaLabel: {
      type: String,
      default: "link",
    },
    hoverColor: {
      type: String,
      default: "var(--brandPrimary6)",
    },
    decoration: {
      type: String,
      default: "none",
    },
    hoverDecoration: {
      type: String,
      default: "none",
    },
  },
  computed: {
    cssVars() {
      return {
        "--color": this.color,
        "--fontSize": this.fontSize,
        "--fontWeight": this.fontWeight,
        "--hoverColor": this.hoverColor,
        "--decoration": this.decoration,
        "--hoverDecoration": this.hoverDecoration,
      };
    },
  },
};
</script>

<style scoped>
.link {
  color: var(--color);
  font-size: var(--fontSize);
  font-weight: var(--fontWeight);
  text-decoration: var(--decoration);
  transition: color 0.5s;
}

.link:hover {
  color: var(--hoverColor);
  text-decoration: var(--hoverDecoration);
}
</style>
