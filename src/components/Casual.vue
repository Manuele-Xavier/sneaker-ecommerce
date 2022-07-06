<template>
    <section id="casual" class="row mt-5">
        <h2 class="pb-4">Casual</h2>
        <div class="item d-flex flex-column justify-center align-items-center">
            <div class="row w-100">
               <router-link class="col-sm-6" :to="{ path: '/products?', name: 'Products', query: { categoria: 'Casual'} }">
                    <img class="w-100" :src="imgOne" />
               </router-link>
                <router-link class="col-sm-6" :to="{ path: '/products?', name: 'Products', query: { categoria: 'Casual'} }">
                    <img class="w-100" :src="imgTwo" />
                </router-link>
            </div>
            <p class="text-center mt-2">Para todos os momentos.</p>
            <button @click="$router.push({ path: '/products?', name: 'Products', query: { categoria: 'Casual'} })" type="button">Visualizar Produtos</button>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            imgOne: "https://images.unsplash.com/photo-1642154015869-3b2b06cbe0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            imgTwo: "https://images.unsplash.com/photo-1542587113-f888b89821ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        }
    }

})

</script>


