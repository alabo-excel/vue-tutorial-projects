<template>
<div>
    <h1>Dc Heros</h1>

    <ul>
        <li v-for="(hero, index) in dcHeros" :key="hero.name">
            <div>
                {{hero.name}}

                <span @click="removeHero(index)">x</span>
            </div>
        </li>
    </ul>
    <form @submit.prevent="addNewHero">
        <input v-model="newHero" type="text" ref="newHeroRef">
        <button type="submit">Add Hero</button>

    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            newHero: '',
            dcHeros: [{
                    name: 'superman'
                },
                {
                    name: 'batman'
                }
            ]
        }
    },
    methods: {
        addNewHero() {
            if (this.newHero !== "") {
                this.dcHeros.push({
                    name: this.newHero
                });
                this.newHero = '';
            }
        },
        removeHero(index) {
            this.dcHeros = this.dcHeros.filter((hero, i) => i != index)
        }
    },
    mounted() {
        this.$refs.newHeroRef.focus();
    }
}
</script>

<style scoped>
li {
    list-style-type: none;
    font-size: 20px;
    font-weight: bold;
}

button {
    background-color: green;
    border: none;
    padding: 10px;
}

input {
    padding: 8px;
}
</style>
