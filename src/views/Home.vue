<template>
  <div>
    <Banner />
  </div>
  <div class="container sections py-5">
    <Marcas />
    <Classic />
    <Casual />
  </div>
</template>

<script lang="ts">
import Banner from '../components/Banner.vue'
import Marcas from '../components/Marcas.vue'
import Classic from '../components/Classic.vue'
import Casual from '../components/Casual.vue'
export default {
  components: {
    Banner,
    Classic,
    Casual,
    Marcas
  }
}

</script>

<style lang="scss">
.sections {
  button {
    padding: 15px 25px;
    border: unset;
    border-radius: 6px;
    color: #fff;
    z-index: 1;
    background: #000;
    position: relative;
    font-weight: 700;
    font-size: 17px;
    width: 250px;

    .fas {
      color: #fff;
    }
  }

  p {
    font-size: 1.5em;
    color: #000;
  }

  img {
    transition: .5s ease all;
  }

  .link-products {
    cursor: pointer;
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
