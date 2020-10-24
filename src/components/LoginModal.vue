<template>
<div>
    <section @click="close" class="container">

    </section>
    <div class="content">
        <div class="modal">
            <div>
                <div class="login-field">
                    <h1>Login</h1>
                    <section>
                        <p @click="loginWithGoogle">Login with Google</p>
                    </section>
                    <form @submit.prevent="submitForm">
                        <div>
                            <input ref="emailRef" v-model="email" type="text" placeholder="Email">
                            <input v-model="password" type="password" placeholder="Password">
                            <br> <button type="submit">
                                <span v-if="!progress">Login</span>
                                <span v-else>.......</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import firebase from '../utilities/firebase';

export default {
    data() {
        return {
            email: 'alabo@gmail.com',
            password: '123456789',
            progress: false,
        }
    },
    methods: {
        submitForm() {
            this.progress = true;
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.email = ''
                    this.password = ''
                    this.progress = false;
                    this.close()
                })
                .catch(e => {
                    console.log(e);
                    this.progress = false;

                });
        },
        close() {
            this.$emit('close-modal');
        },
        loginWithGoogle() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(() => {
                this.close();
            });
        },
    },
    mounted() {
        this.$refs.emailRef.focus()
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    background-color: #ccc;
    position: fixed;
    opacity: 50%;
    margin-top: -170px;

}

.content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 15px;
}

.modal {
    background-color: white;
    width: 40%;
    position: absolute;
    border-radius: 10px;
    margin: auto;

}

input {
    padding: 10px;
    border: 1px solid#ccc;
    margin-top: 10px;
    border-radius: 5px;
    width: 80%;
}

.login-field {
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 5px;
    padding: 10px;
}

button {
    padding: 6px;
    border: none;
    margin: 10px;
    background-color: yellowgreen;
    border-radius: 5px;
    color: white;
}
</style>
