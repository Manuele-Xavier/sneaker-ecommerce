<template>
    <div id="cart">
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
                    <tbody v-for="item in productsCart" :key="item.Id">
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img :src="item.Image">
                                    <p class="m-0">{{ item.Title }}</p>
                                </div>
                            </td>
                            <td>
                                {{ formarMoney(item.Price) }}
                            </td>
                            <td><input type="number" v-model="item.Value" id="quantity" name="quantity" min="1" max="5"
                                    @change="onChangeQuantity(item)" /></td>
                            <td><strong>{{ formarMoney(item.FinalPrice) }}</strong></td>
                            <td>
                                <button @click="onClickDelete(item.Id)">
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
                    <button class="btn-success btn w-100 mt-4" data-bs-toggle="modal"
                        data-bs-target="#infoModal">Confirmar Pagamento</button>
                </div>
            </div>
            <Modal :msg="'Pagamento realizado com sucesso!'" :show-btn-primary="false" />
        </div>
        <div v-else class="redirect mt-5">
            <p>Seu carrinho esta vazio no momento.</p>
            <button @click="$router.push('/')" type="button">Selcecionar Produtos</button>
        </div>
    </div>
</template>

<script lang="ts">

import Modal from '../components/Modal.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        Modal
    },
    data() {
        return {
            totalFinal: 0,
            totalItens: 0,
            frete: 7,
            productsCart: [{
                Id: 1,
                Title: "Dunk Low Retro",
                Price: 799.99,
                Date: '2022-06-20',
                Description: 'Criado para as quadras e adotado pela moda urbana, o ícone do basquete dos anos 80 está de volta com detalhes clássicos e o estilo vintage do basquete. A boca almofadada e de cano baixo e a entressola de espuma elevam o nível do seu jogo com muito conforto.',
                Image: 'https://images.lojanike.com.br/1024x1024/produto/tenis-nike-dunk-low-retro-masculino-DJ6188-300-1-11648574078.jpg',
                Sizes: [{ Number: '39', Active: false }, { Number: '40', Active: false }, { Number: '41', Active: false }],
                Value: 1,
                FinalPrice: 799.99,
            },
            {
                Id: 2,
                Title: "Air Jordan 1 Mid SE",
                Price: 1099.99,
                Date: '2022-06-21',
                Description: 'O tênis Air Jordan 1 Mid é inspirado no primeiro modelo AJ1, oferecendo aos fãs dos Jordan retrôs a oportunidade de seguir os passos da grandeza. A cor nova dá acabamento aos materiais limpos e clássicos, adicionando uma novidade no design familiar.',
                Image: 'https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-mid-se-v2-DN4281-100-1-11640098899.jpg',
                Sizes: [{ Number: '39', Active: false }, { Number: '40', Active: false }, { Number: '41', Active: false }],
                Value: 1,
                FinalPrice: 1099.99,
            },
            {
                Id: 3,
                Title: "Air Jordan 1 Mid",
                Price: 999.99,
                Date: '2022-06-26',
                Description: 'O tênis Air Jordan 1 Mid é inspirado no primeiro modelo AJ1, oferecendo aos fãs dos Jordan retrôs a oportunidade de seguir os passos da grandeza. A cor nova dá acabamento aos materiais limpos e clássicos, adicionando uma novidade no design familiar.',
                Image: 'https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-mid-554724-411-1-11628865989.jpg',
                Sizes: [{ Number: '39', Active: false }, { Number: '40', Active: false }, { Number: '41', Active: false }],
                Total: 200,
                Value: 1,
                FinalPrice: 999.99,
            },
            {
                Id: 4,
                Title: "Tênis Air Jordan 1 Low",
                Price: 899.99,
                Date: '2022-06-27',
                Description: 'Inspirado no original que estreou em 1985, o Air Jordan 1 Low oferece um visual clássico e limpo, mas sempre atual. Com um design icônico que combina perfeitamente com qualquer outfit, estes tênis deixam você preparado para tudo.',
                Image: 'https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg',
                Sizes: [{ Number: '39', Active: false }, { Number: '40', Active: false }, { Number: '41', Active: false }],
                Total: 200,
                Value: 1,
                FinalPrice: 899.99,
            },
            {
                Id: 5,
                Title: "Air Force 1 '07 SE",
                Price: 799.99,
                Date: '2022-06-26',
                Description: 'O brilho perdura no original do basquete. Combinando o conforto da quadra com um brilho casual, ele renova aquele look que você já conhece bem: construção dos anos 80 que marcou época, detalhes ousados e estilo esportivo.',
                Image: 'https://images.lojanike.com.br/500x500/produto/tenis-wmns-air-force-1-07-se-trnd-DQ0231-100-1-11646344485.jpg',
                Sizes: [{ Number: '39', Active: false }, { Number: '40', Active: false }, { Number: '41', Active: false }],
                Total: 200,
                Value: 1,
                FinalPrice: 799.99,
            },
            {
                Id: 6,
                Title: "Dunk Hi Retro Cargo Khaki",
                Price: 849.99,
                Date: '2022-06-27',
                Description: 'Criado para as quadras, mas levado para as ruas, o ícone do basquete dos anos 80 retorna com sobreposições perfeitamente brilhantes e cores originais da universidade. Com seu design clássico de sempre, o Nike Dunk High Retro traz o vintage dos anos 80 de volta às ruas, enquanto sua lingua alta acolchoada adiciona um visual old-school enraizado no conforto.',
                Image: 'https://images.lojanike.com.br/515x515/produto/tenis-nike-sportswear-dunk-high-retro-masculino-DD1399-107-1-11637853753.jpg',
                Sizes: [{ Number: '39', Active: false }, { Number: '40', Active: false }, { Number: '41', Active: false }],
                Total: 200,
                Value: 1,
                FinalPrice: 849.99,
            },


            ]
        }
    },
    created() {
        this.calcValues()
    },
    methods: {
        onChangeQuantity(item: any) {
            item.FinalPrice = item.Price * item.Value
            return this.calcValues()
        },
        onClickDelete(id: number) {
            this.productsCart = this.productsCart.filter(item => item.Id != id)
            return this.calcValues()
        },
        calcValues() {
            const total = this.productsCart.reduce((acc, item) => {
                acc.valuesTotal += item.FinalPrice;
                return acc
            }, {
                valuesTotal: 0,
            })

            this.totalItens = total.valuesTotal
            this.totalFinal = total.valuesTotal + this.frete
        },
        formarMoney(value: number) {
            return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)
        }
    }
})
</script>

<style lang="scss">
#cart {
    table {
        td {
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
        }
    }
}
</style>
