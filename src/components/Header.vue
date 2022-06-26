<template>
    <header class="bg-dark py-2">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="../../public/white-logo.png" alt="logo hard sneaker"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Novidades</a>
                        </div>
                    </div>
                    <div>
                        <a class="car me-4">
                            <span>
                                <i class="fas fa-cart-plus"></i>
                            </span>
                        </a>
                    </div>
                    <div>
                        <a class="search">
                            <span>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
    header{
        .navbar{
            img{
                width: 200px;
            }
            .navbar-nav{
                a{
                    color: #fff !important;
                    transition: 0.4s ease-out;
                    &:hover{
                        font-weight: 600;
                    }
                }
            }

            .car, .search{
                i{
                    font-size: 20px;
                    color: #fff;
                }
            }
        }
    }
</style>
