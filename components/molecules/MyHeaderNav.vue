<template>
  <header class="container-nav">
    <article class="section-header">
      <div class="content-text">
        <AtomIcon name="marketplace" width="68px" height="60px" />
        <AtomIcon name="menu" width="53px" height="45px" />
        <AtomIcon name="users" width="68px" height="60px" />
      </div>
      <section class="content">
        <div class="header-fixed">
          <AtomTitle
            class="color-title"
            font-size="42px"
            :style="{ color: titleColor }"
            >Sistema de marketplace</AtomTitle
          >
        </div>
        <img
          src="/images/nav/du-dudu-e-edu_f7e4tz.webp"
          alt="du dudu e edu"
          width="100%"
          height="650px"
        />
      </section>
    </article>
  </header>
</template>

<script>
export default {
  name: "MoleculesMyHeaderNav",
  setup() {
    const titleColor = ref("var(--neutralDarkGrey1)");
    let prevScrollPos = 0;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        titleColor.value = "aqua";
      } else {
        titleColor.value = "var(--neutralDarkGrey1)";
      }

      prevScrollPos = currentScrollPos;
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
  justify-content: space-evenly;
  position: relative;
}

.content-text {
  padding: 20px;
  display: flex;
  gap: 50px;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    #fff 50%,
    rgba(255, 255, 255, 0) 50%,
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
