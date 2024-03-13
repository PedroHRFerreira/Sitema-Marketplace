<template>
  <header class="container-nav">
    <article class="section-header">
      <div class="icons-column">
        <div v-for="(icon, index) in icons" :key="index" class="content-text">
          <AtomIcon
            class="icon"
            :name="icon.icones"
            :width="icon.width"
            :height="icon.height"
          />
        </div>
      </div>
      <section class="content">
        <div class="header-fixed">
          <AtomTitle
            :font-weight="tileFontWeight"
            :font-size="titleFontSize"
            :style="{ color: titleColor }"
            >{{ textTitle }}</AtomTitle
          >
        </div>
        <img
          :src="imageSrc"
          :alt="imageAlt"
          width="100%"
          :height="imageHeight"
        />
      </section>
    </article>
  </header>
</template>

<script>
export default {
  name: "MoleculesMyHeaderNav",
  props: {
    icons: {
      type: Array,
      default: () => [
        {
          icones: "marketplace",
          width: "68px",
          height: "60px",
        },
        {
          icones: "menu",
          width: "53px",
          height: "45px",
        },
        {
          icones: "users",
          width: "68px",
          height: "60px",
        },
      ],
    },
    tileFontWeight: {
      type: String,
      default: "500",
    },
    titleFontSize: {
      type: String,
      default: "42px",
    },
    textTitle: {
      type: String,
      default: "Sistema de marketplace",
    },
    imageSrc: {
      type: String,
      default: "/images/nav/du-dudu-e-edu_f7e4tz.webp",
    },
    imageAlt: {
      type: String,
      default: "imagem do du, dudu e edu",
    },
    imageHeight: {
      type: String,
      default: "650px",
    },
  },
  setup() {
    const titleColor = ref("var(--neutralDarkGrey1)");
    let scrollTimer;

    const handleScroll = () => {
      clearTimeout(scrollTimer);

      titleColor.value = "aqua";

      scrollTimer = setTimeout(() => {
        titleColor.value = "var(--neutralDarkGrey1)";
      }, 1000);
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      titleColor,
    };
  },
};
</script>

<style scoped>
.container-nav {
  width: 100%;
}

.section-header {
  display: flex;
  justify-content: center;
  position: relative;
}
.icons-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 92%;
  padding: 20px;
}
.content-text {
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    #fff 90%,
    rgba(255, 255, 255, 0) 100%,
    #000 100%
  );
}
.section-header .content::before {
  padding: 10px;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 850px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #fff 50%,
    #000 100%
  );
}
.header-fixed {
  position: fixed;
  left: 13%;
  padding: 10px;
}
</style>
