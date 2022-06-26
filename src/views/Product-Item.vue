<template>
    <div id="product-item" class="row">
        <div class="col-sm-6">
            <img :src="product.Image" />
        </div>
        <div class="col-sm-6">
            <h2>{{ product.Title }}</h2>
            <strong class="text-title">{{ Intl.NumberFormat('pt-br', {
                    style: 'currency', currency: 'BRL'
                }).format(product.Price)
            }}</strong>
            <hr />
            <div v-html="product.Description" class="mb-4"></div>
            <div class="d-flex mb-4 sizes">
                <div v-for="size in product.Sizes" class="me-2">
                    <button :disable="size.Active">{{size.Number}}</button>
                </div>
            </div>
            <button class="add">Adicionar ao carrinho</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            product:
            {
                Id: 1,
                Title: "Air Jordan 1",
                Price: 1000,
                Date: '2022-06-20',
                Image: 'https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg',
                Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                Sizes:[
                   {
                    Number:'39', 
                    Active:false
                   
                   },
                    {
                    Number:'40', 
                    Active:false
                   
                   }, {
                    Number:'41', 
                    Active:false
                   
                   }
                ]
            }
        }
    }
})
</script>

<style lang="scss">
#product-item {
    .sizes{
        button{
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

        &:hover{
            color: #fff;

            &::before{
                width: 100%;
            }
        }

    
    }
}
</style>
