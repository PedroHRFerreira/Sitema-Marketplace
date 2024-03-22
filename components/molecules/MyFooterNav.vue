<template>
  <footer class="container-nav">
    <article class="section-footer">
      <section class="content">
        <NuxtImg
          :src="imageSrc"
          :alt="imageAlt"
          width="100%"
          :height="imageHeight"
        />
        <div class="end-footer_content">
          <div>
            <AtomTile font-size="26px" class="text"
              >Feito por Pedro H. Rodrigues ;)</AtomTile
            >
          </div>
          <ul class="content-icon">
            <li v-for="(icon, index) in icons" :key="index">
              <router-link :to="icon.href" class="icon">
                <AtomIcon
                  :name="icon.name"
                  :width="icon.width"
                  :height="icon.height"
                  :style="{ color: aquaColor }"
                />
              </router-link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </footer>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MoleculesMyFooterNav",
  props: {
    icons: {
      type: Array,
      default: () => [
        {
          name: "instagram",
          width: "68px",
          height: "60px",
          href: "https://www.instagram.com/dev_ph.rodrigues/",
        },
        {
          name: "linkedin",
          width: "68px",
          height: "60px",
          href: "https://www.linkedin.com",
        },
        {
          name: "github",
          width: "60px",
          height: "60px",
          href: "https://github.com/PedroHRFerreira",
        },
      ],
    },
    imageSrc: {
      type: String,
      default: "/images/nav/footer.webp",
    },
    imageAlt: {
      type: String,
      default: "Imagem do rodapé",
    },
    imageHeight: {
      type: String,
      default: "900px",
    },
  },
  setup() {
    const aquaColor = ref("aqua");

    const onMouseMove = (event) => {
      const mouseX = event.clientX;

      if (mouseX > 0) {
        aquaColor.value = "aqua";
      }
    };

    onMounted(() => {
      document.addEventListener("mousemove", onMouseMove);
    });

    return {
      aquaColor,
    };
  },
};
</script>

<style scoped>
.container-nav {
  width: 100%;
}

.section-footer {
  display: flex;
  justify-content: center;
  position: relative;
}
.section-footer .content::before {
  padding: 5px;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 800px;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0) 45%,
    #fff 85%,
    #000 100%
  );
  border-bottom-left-radius: 50px;
}
.end-footer_content {
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0) 0%,
    #fff 100%,
    #000 0%
  );
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
}
.text {
  color: var(--neutralDarkGrey1);
  font-size: 32px;
  font-weight: 700;
}
.content-icon {
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 54px;
}
.icon {
  cursor: pointer;
}
</style>
