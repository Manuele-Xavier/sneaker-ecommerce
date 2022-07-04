<template>
    <div class="container">
        <div id="cart" class="container">
            <div class="row mt-5" v-if="productsCart.length > 0">
                <h1>Seu Carrinho</h1>
                <div class="col-lg-8 mt-5">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Produto</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody v-for="item in productsCart" :key="item.id">
                            <tr>
                                <td>
                                    <router-link class="d-flex align-items-center"
                                        :to="{ path: '/item', name: 'Product', params: { id: item.idProduct } }">
                                        <img :src="item.image">
                                        <p class="m-0">{{ item.title }}</p>
                                    </router-link>
                                </td>
                                <td>
                                    {{ formarMoney(item.price) }}
                                </td>
                                <td><input type="number" v-model="item.value" id="quantity" name="quantity" min="1" max="5"
                                        @change="onChangeQuantity(item)" /></td>
                                <td><strong>{{ formarMoney(item.finalPrice) }}</strong></td>
                                <td>
                                    <button @click="deleteItem(item)">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-4">
                    <div class="bg-light p-5">
                        <h4>Resumo da Compra</h4>
                        <hr>
                        <p>Total compra: <span></span> {{ formarMoney(totalItens) }}</p>
                        <p class="mt-2">Frete: <span></span> {{ formarMoney(frete) }}</p>
                        <strong class="my-2">Total: <span></span> {{ formarMoney(totalFinal) }}</strong>
                        <button @click="cleanCart()" class="btn-success btn w-100 mt-4" data-bs-toggle="modal"
                            data-bs-target="#infoModal">Confirmar Pagamento</button>
                    </div>
                </div>
            </div>
            <div v-else class="redirect mt-5">
                <p>Seu carrinho esta vazio no momento.</p>
                <button @click="$router.push('/')" type="button">Selcecionar Produtos</button>
            </div>
            <Modal :msg="'Pagamento realizado com sucesso!'" :show-btn-primary="false" />
        </div>
    </div>
</template>

<script lang="ts">

import Modal from '../components/Modal.vue'
import { defineComponent } from 'vue'
declare interface ProductsCart {
    id: number,
    image: string,
    title: string,
    price: number,
    value: number,
    finalPrice: number,
    addedToCart: boolean,
    idProduct: number
}

export default defineComponent({
    components: {
        Modal
    },
    data() {
        return {
            totalFinal: 0,
            totalItens: 0,
            frete: 7,
            productsCart: [] as ProductsCart[]
        }
    },
    created() {
        this.getProductsCart()

    },
    methods: {
        getProductsCart() {
            fetch("https://62b8dcf903c36cb9b7cc9aec.mockapi.io/cart")
                .then(resp => resp.json())
                .then(data => this.productsCart = data)
                .then(this.calcValues)
        },
        updateItem(item: ProductsCart) {
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            };
            fetch(`https://62b8dcf903c36cb9b7cc9aec.mockapi.io/cart/${item.id}`, requestOptions)
                .then(this.getProductsCart)
        },
        onChangeQuantity(item: ProductsCart) {
            item.finalPrice = item.price * item.value
            return this.updateItem(item)

        },
        deleteItem(item: ProductsCart) {
            const requestOptions = {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            };
            fetch(`https://62b8dcf903c36cb9b7cc9aec.mockapi.io/cart/${item.id}`, requestOptions)
                .then(this.getProductsCart)
            return this.updatedProducts(item)
        },
        updatedProducts(item: ProductsCart) {
            item.addedToCart = false
            item.finalPrice = item.price
            item.value = 1
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            };
            fetch(`https://62b8dcf903c36cb9b7cc9aec.mockapi.io/sneakers/${item.idProduct}`, requestOptions)
        },
        calcValues() {
            const total = this.productsCart.reduce((acc, item) => {
                acc.valuesTotal += item.finalPrice;
                return acc
            }, {
                valuesTotal: 0,
            })

            this.totalItens = total.valuesTotal
            this.totalFinal = total.valuesTotal + this.frete
        },
        formarMoney(value: number) {
            return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)
        },
        cleanCart() {
            const cart = this.productsCart.map(item => this.deleteItem(item))

        }
    }
})
</script>

<style lang="scss">
#cart {
    table {
        td {
            a {
                color: #000;
                text-decoration: none;
            }

            vertical-align: middle;

            img {
                width: 110px;
                margin-right: 15px;
            }

            button { 
                border-radius: 100%;
                background-color: #000;
                padding: 1px 8px;

                .fas {
                    color: #fff;
                }
            }
        }
    }

    .redirect {
        p {
            font-size: 30px;
        }

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
        }
    }


}

@media screen and (max-width: 540px) {
    .table {
        img {
            display: none;
        }

        tr {

            th,
            td {
                &:nth-child(2) {
                    display: none;
                }
            }
        }
    }
}
</style>
