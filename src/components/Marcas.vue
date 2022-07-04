<template>
    <section id="marcas" class="row mt-5">
        <h2 class="pb-4">Principais Marcas</h2>
        <div v-for="item in marcas" class="col-sm-4" :key="item.id">
            <div class="item">
                <h3 class="p-4 text-center">{{ item.title }}</h3>
                <a class="link-products">
                    <img class="w-100" :src="item.image" />
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
declare interface Marcas {
    id: number,
    image: string,
    title: string,
}
export default defineComponent({
    data() {
        return {
            marcas: [] as Marcas[]
        }
    },
    created() {
        this.getMarcas()
    },
    methods: {

        getMarcas() {
            fetch("https://62b8dcf903c36cb9b7cc9aec.mockapi.io/marcas/")
                .then(resp => resp.json())
                .then(data => this.marcas = data)
        }
    }
})

</script>

<style lang="scss">
#marcas {

    .item {
        background-color: #000;
        margin-bottom: 35px;
        overflow: hidden;

        img {
            object-fit: cover;
            height: 500px;
            opacity: 40%;

        }

        h3 {
            position: absolute;
            font-size: 2em;
            font-weight: bold;
            color: #fff;
        }

       
    }
}




</style>
