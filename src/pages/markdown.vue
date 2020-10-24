<template>
<div class="hello">
    <h1>Markdown App</h1>
    <section class="container">
        <article class="left">
            <textarea ref="markdownTextArea" :value="rext" @input="update"></textarea>
        </article>
        <article class="right" v-html="markedText"></article>
    </section>
</div>
</template>

<script>
import marked from 'marked';
export default {
    data() {
        return {
            text: '',
            timeout: ''

        }
    },
    computed: {
        markedText() {
            return marked(this.text);
        }
    },
    methods: {
        update(e) {
            const task = () =>
                (this.text = e.target.value);
            this.debounce(task, 500);
        },
        debounce(func, wait = 1000) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(func, wait);
        },

    },
    mounted() {
        this.$refs.markdownTextArea.focus()
    }
};
</script>

<style scoped>
.container {
    display: flex;
}

.left {
    width: 50%;
}

.right {
    width: 30%;
    border: 1px solid gray;
    background-color: aliceblue;
    height: 60vh;
    text-align: left;
}

textarea {
    width: 50%;
    height: 60vh;
}
</style>
