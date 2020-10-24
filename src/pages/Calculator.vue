<template>
<div id="">
    <h1>Calculator</h1>
    <div>
        <p id="display">{{calculation}}</p>
        <button @click="pressed('1')">1</button>
        <button @click="pressed('2')">2</button>
        <button @click="pressed('3')">3</button>
        <button @click="pressed('+')">+</button><br>
        <br>
        <button @click="pressed('4')">4</button>
        <button @click="pressed('5')">5</button>
        <button @click="pressed('6')">6</button>
        <button @click="pressed('-')">-</button><br>
        <br>
        <button @click="pressed('7')">7</button>
        <button @click="pressed('8')">8</button>
        <button @click="pressed('9')">9</button>
        <button @click="pressed('*')">*</button><br>
        <br>

        <button @click="pressed('0')" id="zero">0</button>

        <button @click="pressed('/')">/</button>
        <button @click="pressed('=')">=</button>

    </div>
</div>
</template>

<script>
// import {
//     ref
// } from "vue";
export default {
    // setup() {
    //     const calculation = ref {};
    //     const operations = ["+", "-", "*", "/"]

    //     function pressed(value) {
    //         if (value === '=') calculate();
    //         else if (operations.includes(value)) applyOperation();
    //         else appendNumber()
    //     };
    //     return {
    //         calculation,
    //         pressed
    //     };
    // },
};
</script>

<style scoped>
button {
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 40px;

}

#zero {
    width: 90px;
}

#display {
    font-size: 20px;
}
</style>
