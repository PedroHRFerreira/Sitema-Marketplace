<template>
  <component
    :is="tag"
    :class="['paragraph', type]"
    :style="cssVar"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "AtomsParagraph",
  props: {
    tag: {
      type: String,
      default: "p",
    },
    color: {
      type: String,
      default: "var(--neutralLightGrey9)",
    },
    colorHover: {
      type: String,
      default: "var(--neutralLightGrey9)",
    },
    fontWeight: {
      type: String,
      default: "400",
    },
    margin: {
      type: String,
      default: "0",
    },
    padding: {
      type: String,
      default: "0",
    },
    lineHeight: {
      type: String,
      default: "28px",
    },
    textAlign: {
      type: String,
      default: "left",
    },
    textDecoration: {
      type: String,
      default: "none",
    },
    isModeLoading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text-p3",
    },
    overflow: {
      type: String,
      default: "auto",
    },
    whiteSpace: {
      type: String,
      default: "normal",
    },
    textOverflow: {
      type: String,
      default: "unset",
    },
    maxWidth: {
      type: String,
      default: "auto",
    },
    width: {
      type: String,
      default: "auto",
    },
    maxHeight: {
      type: String,
      default: "auto",
    },
    cursor: {
      type: String,
      default: "default",
    },
    fontFamily: {
      type: String,
      default: "Poppins, sans-serif",
    },
  },
  computed: {
    cssVar() {
      return {
        "--color": this.color,
        "--colorHover": this.colorHover,
        "--fontWeight": this.fontWeight,
        "--margin": this.margin,
        "--padding": this.padding,
        "--lineHeight": this.lineHeight,
        "--textAlign": this.textAlign,
        "--textDecoration": this.textDecoration,
        "--overflow": this.overflow,
        "--whiteSpace": this.whiteSpace,
        "--textOverflow": this.textOverflow,
        "--maxWidth": this.maxWidth,
        "--width": this.width,
        "--maxHeight": this.maxHeight,
        "--cursor": this.cursor,
        "--fontFamily": this.fontFamily,
      };
    },
  },
};
</script>

<style scoped>
.paragraph {
  font-weight: var(--fontWeight);
  color: var(--color);
  margin: var(--margin);
  padding: var(--padding);
  line-height: var(--lineHeight);
  text-align: var(--textAlign);
  text-decoration: var(--textDecoration);
  overflow: var(--overflow);
  white-space: var(--whiteSpace);
  text-overflow: var(--textOverflow);
  max-width: var(--maxWidth);
  width: var(--width);
  max-height: var(--maxHeight);
  cursor: var(--cursor);
  font-family: var(--fontFamily);
}

.paragraph:hover {
  color: var(--colorHover);
}

.text-p1 {
  font-size: var(--fontSizeTextP1);
}
.text-p2 {
  font-size: var(--fontSizeTextP2);
}
.text-p3 {
  font-size: var(--fontSizeTextP3);
}
.text-p4 {
  font-size: var(--fontSizeTextP4);
}
.text-p5 {
  font-size: var(--fontSizeTextP5);
}
.text-p6 {
  font-size: var(--fontSizeTextP6);
}
.text-p7 {
  font-size: var(--fontSizeTextP7);
}
</style>
