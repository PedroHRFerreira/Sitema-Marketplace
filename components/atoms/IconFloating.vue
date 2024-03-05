<script setup lang="ts">
import { ref, watchEffect, defineProps, defineComponent, computed } from "vue";
defineComponent({
  name: "AtomsIconFloating",
});

const props = withDefaults(
  defineProps<{
    name: string;
    padding?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  }>(),
  {
    padding: "24px",
  },
);

const icon = ref<string | Record<string, any>>("");
async function getIcon() {
  try {
    const iconsImport = import.meta.glob("assets/icons/**/**.svg", {
      as: "raw",
      eager: false,
    });

    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();

    icon.value = rawIcon;
  } catch {
    console.error(
      `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`,
    );
  }
}

await getIcon();

watchEffect(getIcon);

watchSyncEffect(() => {
  if (props.padding) {
    icon.value = icon.value.replace(
      /padding=".*?"/g,
      `padding="${props.padding}"`,
    );
  }
  if (props.top) {
    icon.value = icon.value.replace(/top=".*?"/g, `top="${props.top}"`);
  }
  if (props.left) {
    icon.value = icon.value.replace(/left=".*?"/g, `left="${props.left}"`);
  }
  if (props.right) {
    icon.value = icon.value.replace(/right=".*?"/g, `right="${props.right}"`);
  }
  if (props.bottom) {
    icon.value = icon.value.replace(
      /bottom=".*?"/g,
      `bottom="${props.bottom}"`,
    );
  }
});
const cssVar = computed(() => {
  return {
    "--padding": props.padding,
    "--top": props.top,
    "--left": props.left,
    "--right": props.right,
    "--bottom": props.bottom,
  };
});
</script>
<template>
  <span :style="cssVar" class="icon__floating animate-icon" v-html="icon" />
</template>
<style scoped>
.icon__floating {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow: 0px 0px 40px 0px rgba(169, 169, 204, 0.4);
  background: var(--neutralLightGrey);
  border-radius: 4px;
  padding: var(--padding);
  top: var(--top);
  left: var(--left);
  right: var(--right);
  bottom: var(--bottom);
}
</style>
