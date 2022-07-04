<template>
    <header class="py-2">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <router-link :to="{ path: '/' }" class="navbar-brand">
                        <img src="../assets/logo.png" alt="logo hard sneaker" />
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
<style lang="scss">
header {
    .navbar {
        button {
            border-color: #000 !important;
            color: #000 !important;
        }

        .navbar-nav {
            a {
                color: #6f6f6f !important;
                transition: 0.4s ease-out;
                position: relative;
                font-weight: bolder;
                text-transform: uppercase;
                &:hover {
                   color: #000 !important; 

                }
            }
        }

        .car,
        .search {
            i {
                font-size: 20px;
                color: #6f6f6f !important;
            }
        }
    }
}
</style>
