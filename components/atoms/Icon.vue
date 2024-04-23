<script setup lang="ts">
import { ref, watchEffect, defineProps, defineComponent } from "vue";

defineComponent({
  name: "AtomsIcon",
});

const props = withDefaults(
  defineProps<{
    name: string;
    filled?: boolean;
    width?: string | number;
    height?: string | number;
    currentColor?: string;
  }>(),
  {
    filled: false,
    height: "24px",
    width: "24px",
    currentColor: "currentColor",
  },
);

const icon = ref<string | Record<string, any>>("");
let hasStroke = false;

async function getIcon() {
  try {
    const iconsImport = import.meta.glob("assets/icons/**/**.svg", {
      as: "raw",
      eager: false,
    });
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
    if (rawIcon.includes("stroke")) {
      hasStroke = true;
    }
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
  if (props.filled) {
    icon.value = icon.value.replace(
      /fill=".*?"/g,
      `fill="${props.currentColor}"`,
    );
  }

  if (props.width) {
    icon.value = icon.value.replace(/width=".*?"/g, `width="${props.width}"`);
  }

  if (props.height) {
    icon.value = icon.value.replace(
      /height=".*?"/g,
      `height="${props.height}"`,
    );
  }
});
</script>

<template>
  <span
    class="icon-common"
    :class="{
      'icon-common--fill': !filled,
      'icon-common--stroke': hasStroke && !filled,
    }"
    v-html="icon"
  />
</template>

<style>
.icon-common svg {
  width: v-bind(width);
  height: v-bind(height);
  margin-bottom: 0;
  vertical-align: middle;
}
.icon-common:hover svg {
  fill: var(--brandPrimary6) !important;
}
.icon-common.icon-common--stroke,
.icon-common.icon-common--stroke * {
  stroke: currentColor !important;
}
</style>
