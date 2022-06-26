<template>
    <div class="modal fade" id="infoModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body text-center p-5">
                    <p>{{ msg }}</p>
                    <div class="d-flex flex-column">
                        <button v-if="showBtnPrimary" @click="$router.push('/cart')" type="button" class="add mb-3"
                            data-bs-dismiss="modal">Carrinho de Compras</button>
                        <button v-if="showBtnSecondary" @click="$router.push('/')" type="button" data-bs-dismiss="modal"
                            class="add">Voltar para Home</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        msg: { type: String, default: null },
        showBtnPrimary: { type: Boolean, default: true },
        showBtnSecondary: { type: Boolean, default: true },

    }
})
</script>

<style lang="scss">
.modal-body {
    p {
        font-size: 30px;
    }

    button {
        padding: 15px 25px;
        border: unset;
        border-radius: 6px;
        color: #000000;
        z-index: 1;
        background: #e8e8e8;
        position: relative;
        font-weight: 700;
        font-size: 17px;
    }
}
</style>
