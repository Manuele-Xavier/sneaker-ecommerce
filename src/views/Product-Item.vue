<template>
    <div id="product-item" class="row">
        <div class="col-sm-6">
            <img :src="product.image" />
        </div>
        <div class="col-sm-6">
            <h2>{{ product.title }}</h2>
            <strong class="text-title">{{ Intl.NumberFormat('pt-br', {
                    style: 'currency', currency: 'BRL'
                }).format(product.price)
            }}</strong>
            <hr />
            <div v-html="product.description" class="mb-4"></div>
            <button class="add" data-bs-toggle="modal" data-bs-target="#infoModal">Adicionar ao carrinho</button>
        </div>
        <Modal :msg="'Produto adicionado ao carrinho!'" />
    </div>
</template>

<script lang="ts">

import Modal from '../components/Modal.vue'
import { defineComponent } from 'vue'
declare interface Product {
    id: number,
    image:string,
    description:string,
    title: string,
    price: number
  }
export default defineComponent({
    components: {
        Modal
    },
    data() {
        return {
            product: {} as Product
           
        }
    },
    created(){
        this.getProduct()
    },
    methods:{

         getProduct(){
            fetch(`https://62b8dcf903c36cb9b7cc9aec.mockapi.io/sneakers/${this.$route.params.id}`)
            .then(resp=> resp.json())
            .then(data=> this.product = data)
            
        }
    }
})
</script>

<style lang="scss">
#product-item {
    .sizes {
        button {
            background-color: #fff;
        }
    }
    .add {
        padding: 15px 25px;
        border: unset;
        border-radius: 6px;
        color: #000000;
        z-index: 1;
        background: #e8e8e8;
        position: relative;
        font-weight: 700;
        font-size: 17px;

        transition: all 250ms;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 0;
            border-radius: 6px;
            background-color: #000000;
            z-index: -1;
            -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
            box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
            transition: all 250ms
        }

        &:hover {
            color: #fff;

            &::before {
                width: 100%;
            }
        }


    }

    .modal-body {
        p {
            font-size: 30px;
        }

        .add {
            &::before {
                content: none;
            }

            &:hover {
                color: #000000;
            }
        }
    }

}
</style>
