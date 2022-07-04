<template>
    <div class="banner">
        <img class="w-100" src="../assets/banner.jpg">
        <h2 class="text-center">O melhor do mundo dos sneakers</h2>
    </div>
</template>

<style lang="scss">
    .banner {
        background-color: #000;

        img {
            height: 90vh;
            object-fit: cover;
            opacity: 40%;
        }

        h2 {
            position: absolute;
            color: #fff;
            z-index: 10000;
            bottom: 255px;
            opacity: 60%;
            width: 100%;
            font-size: 3em;
        }
    }
</style>
