<template>
<div id="container">
    <h2>Real Time Chat</h2>
    <section class="content">
        <div id="msg" v-for="chat in state.chats" :key="chat.message" :class="chat.userId === state.userId ? 'right': 'left'">{{chat.message}}</div>
        <input @keydown.enter="addMsg" placeholder="Start Typing......" v-model="state.message" type="text">
    </section>
</div>
</template>

<script>
import {
    onMounted,
    reactive

} from 'vue';
import firebase, {
    chatsRef
} from '../utilities/firebase'
export default {
    setup() {
        const state = reactive({
            chats: [],
            message: "",
            userId: null

        });
        onMounted(async () => {
            chatsRef.on("child_added", (snapshot) => {
                state.userId = firebase.auth().currentUser.uid;
                state.chats.push({
                    key: snapshot.key,
                    ...snapshot.val()
                })
            });
        });

        function addMsg() {
            const newChat = chatsRef.push()
            newChat.set({
                userId: state.userId,
                message: state.message
            });
            state.message = ""
        }
        return {
            state,
            addMsg
        };
    },
};
</script>

<style scoped>
.content {
    border: 1px solid #ccc;
    width: 40%;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
}

#msg {
    padding: 10px;
    text-transform: capitalize;
}

input {
    border-radius: 5px;
    border: 2px solid #ccc;
    padding: 5px;
}

.right {
    text-align: right;
    background-color: wheat;
    border-radius: 10px;
    margin: 10px;
}

.left {
    text-align: left;
}
</style>
