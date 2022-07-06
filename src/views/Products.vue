<template>
    <div class="container">
        <div id="products" class="row">
            <div v-if="products.length > 0" v-for="item in products" class="col-lg-3 col-sm-6" :key="item.id">
                <router-link :to="{ path: '/item', name: 'Product', params: { id: item.id } }">
                    <div class="card">
                        <div class="card-img">
                            <img class="w-100" :src="item.image" />
                        </div>
                        <div class="card-info p-3">
                            <p class="text-title">{{ item.title }}</p>
                            <strong class="text-title">{{ Intl.NumberFormat('pt-br', {
                                    style: 'currency', currency: 'BRL'
                                }).format(item.price)
                            }}</strong>
                        </div>
                    </div>
                </router-link>
            </div>
            <div v-else>
                <p>Sem resultado encontrado.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
declare interface Products {
    id: number,
    image: string,
    title: string,
    price: number
}
export default defineComponent({
    data() {
        return {
            products: [] as Products[]
        }
    },
    created() {
        this.getProducts()
    },
    methods: {

        getProducts() {
            let filter = '/'
            let query = this.$route.query
            debugger
            if(query){
                if(query.marca){
                    filter = `?marca=${this.$route.query.marca}`
                }
                if(query.categoria){
                    filter = `?categoria=${this.$route.query.categoria}`
                }
            }
            fetch(`https://62b8dcf903c36cb9b7cc9aec.mockapi.io/sneakers${filter}`)
                .then(resp => resp.json())
                .then(data => this.products = data)
        }
    }
})

</script>

<style lang="scss">
#products {
    a {
        color: #000;
        text-decoration: none;
    }

    .card {
        background-color: #F6F6F6;
        border-color: #F6F6F6;
        border-radius: 6px;
        transition: 0.4s ease-out;
        margin-bottom: 35px;

        &:hover {
            transform: translateY(5%);
            opacity: 1;

        }

    }

    img {
        object-fit: cover;
        height: 235px;
    }

    .add {
        background: #000;
        padding: 5px 10px;
        border-radius: 100%;
        color: #fff;
        font-size: 20px;
    }
}
</style>
