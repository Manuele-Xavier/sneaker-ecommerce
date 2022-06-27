<template>
    <header class="bg-dark py-2">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <router-link :to="{ path: '/' }" class="navbar-brand">
                        <img src="../../public/white-logo.png" alt="logo hard sneaker" />
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="icon">
                            <i class="fas fa-bars"></i>
                        </span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <router-link :to="{ path: '/' }" class="nav-link active" aria-current="page">Home
                            </router-link>
                        </div>
                    </div>
                    <div>
                        <router-link class="car me-3" :to="{ path: '/cart' }" aria-current="page">
                            <span>
                                <i class="fas fa-cart-plus"></i>
                            </span>
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
header {
    .navbar {
        img {
            width: 200px;
        }

        button {
            border-color: #fff;
            color: #fff;
        }

        .navbar-nav {
            a {
                color: #fff !important;
                transition: 0.4s ease-out;

                &:hover {
                    font-weight: 600;
                }
            }
        }

        .car,
        .search {
            i {
                font-size: 20px;
                color: #fff;
            }
        }
    }
}
</style>
