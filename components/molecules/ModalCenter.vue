<template>
  <main v-if="isModalVisible" class="section modal-content">
    <article class="modal-section" @click.stop>
      <section class="text-content">
        <AtomTitle :font-size="titleFontSize" :color="titleColor">{{
          textTitle
        }}</AtomTitle>
        <div v-for="(text, index) in paragraph" :key="index">
          <ul class="content-list">
            <li class="list">
              <b class="color-b">{{ text.message }} </b>
              {{ formatPrice(text.result) }}
            </li>
          </ul>
        </div>
        <AtomButton
          :bg-color="buttonBgColor"
          :hover-bg-color="buttonHoverBgColor"
          :border-color="buttonBorderColor"
          :hover-border-color="buttonHoverBorderColor"
          :max-width="buttonMaxWidth"
          @click="closeModal"
          >{{ textButon }}
        </AtomButton>
      </section>
      <section class="image-content">
        <img width="100%" :src="imgSrc" :alt="imgAlt" />
      </section>
    </article>
  </main>
</template>
<script>
export default {
  name: "MoleculesModalCenter",
  props: {
    isModalVisible: Boolean,
    paragraph: {
      type: Array,
      default: () => [],
    },
    titleFontSize: {
      type: String,
      default: "32px",
    },
    titleColor: {
      type: String,
      default: "aqua",
    },
    textTitle: {
      type: String,
      default: "Informações do produto",
    },
    buttonBgColor: {
      type: String,
      default: "black",
    },
    buttonHoverBgColor: {
      type: String,
      default: "#14b8b8",
    },
    buttonBorderColor: {
      type: String,
      default: "aqua",
    },
    buttonHoverBorderColor: {
      type: String,
      default: "#14b8b8",
    },
    buttonMaxWidth: {
      type: String,
      default: "380px",
    },
    textButon: {
      type: String,
      default: "Compre o produto",
    },
    imgSrc: {
      type: String,
      default: "/images/product/test-product.webp",
    },
    imgAlt: {
      type: String,
      default: "imagem do produto",
    },
  },
  setup(props, { emit }) {
    const isModalVisible = ref(props.isModalVisible);

    watch(() => {
      isModalVisible.value = props.isModalVisible;
    });

    const closeModal = () => {
      isModalVisible.value = false;
      emit("modal-closed");
    };

    return {
      isModalVisible,
      closeModal,
    };
  },
  methods: {
    formatPrice(number) {
      if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + " mi";
      }
      if (number >= 1000) {
        return (number / 10000).toFixed(0) + " mil";
      }
      return number;
    },
  },
};
</script>
<style scoped>
.modal-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.modal-section {
  border: 1px ridge aqua;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  max-width: 800px;
  width: 100%;
}
.text-content {
  border-right: 1px dotted aqua;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 12px;
  padding: 10px;
}
.image-content {
  display: flex;
  justify-content: center;
  padding: 5px;
}
.content-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.list {
  color: var(--neutralLightGrey);
  font-size: 18px;
}
.color-b {
  color: #53ecec;
}
</style>
