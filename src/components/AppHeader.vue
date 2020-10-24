<template>
<div class="heading">
    <router-link to="/dc-heros">DcHeros</router-link>
    <router-link to="/calender">Calender</router-link>
    <router-link to="/markdown">Markdown</router-link>
    <router-link to="/slider">Slider</router-link>
    <router-link to="/calculator">Calculator</router-link>
    <router-link to="/chats">Chats</router-link>

    <button v-if="isLogedIn === false" @click="$emit('open-login-modal')">Login</button>
    <button v-else @click="logout">Logout</button>

</div>
</template>

<script>
import firebase from '../utilities/firebase'
export default {
    props: {
        "isLogedIn": Boolean
    },
    methods: {
        logout() {
            firebase.auth().signOut()
        },
    }
}
</script>

<style scoped>
.heading {
    display: flex;
}

.heading a {
    margin: 10px;
    text-decoration: none;
}
</style>
