<template>
<AppHeader :isLogedIn="isLogedIn" @open-login-modal=" isOpen = true" />
<div>
    <router-view></router-view>
    <LoginModal v-if="isOpen" @close-modal="isOpen = false" />

</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import LoginModal from './components/LoginModal.vue'
import firebase from './utilities/firebase'

export default {
    data() {
        return {
            isOpen: false,
            isLogedIn: false,
            authUser: {}
        }
    },
    mounted() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.isLogedIn = true;
                this.authUser = user;
            } else {
                this.isLogedIn = false;
                this.authUser = {};

            }
        });
    },
    name: 'App',
    components: {
        AppHeader,

        LoginModal,
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
