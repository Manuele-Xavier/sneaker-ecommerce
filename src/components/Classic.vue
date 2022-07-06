<template>
    <section id="classic" class="row mt-5">
        <h2 class="pb-4">Clássicos que não saem de moda</h2>
        <div class="item d-flex flex-column justify-center align-items-center">
            <div class="div-img">
                 <router-link :to="{ path: '/products?', name: 'Products', query: { categoria: 'Classic'} }">
                    <img class="w-100" :src="img" />
                 </router-link>
            </div>
            <p class="text-center mt-2">Venha conhecer aqueles que não pode ficar de fora do seu armário</p>
            <button type="button" @click="$router.push({path: '/products?', name: 'Products', query: { categoria: 'Classic'} })">Visualizar Produtos</button>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            img:"https://images.unsplash.com/photo-1624636224909-d986525fb391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
    }
   
})

</script>
<style lang="scss">
    #classic {
        .div-img{
            background-color: #000;
            width: 100%;
            overflow: hidden;
        }

        img {
            height: 90vh;
            object-fit: cover;
            opacity: 80%;
        }

    }
</style>


