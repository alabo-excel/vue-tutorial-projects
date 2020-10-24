<template>
<div>
    <transition name="fade">
        <div v-if="currentSlide == 0" class="slide-1"></div>
    </transition>
    <transition name="fade">
        <div v-if="currentSlide == 1" class="slide-2"></div>
    </transition>
    <transition name="fade">
        <div v-if="currentSlide == 2" class="slide-3"></div>
    </transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            currentSlide: 0,
            interval: ""
        };
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.currentSlide === 2) {
                this.currentSlide = 0;
            } else {
                this.currentSlide++

            }
        }, 2000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    }
}
</script>

<style scoped>
.slide-1 {
    width: 100%;
    height: 40vh;
    background-color: teal;
    position: absolute;
    margin: 0px;
    padding: 0px;
}

.slide-2 {
    width: 100%;
    height: 40vh;
    background-color: yellow;
    position: absolute;
    margin: 0px;
    padding: 0px;
}

.slide-3 {
    width: 100%;
    height: 40vh;
    background-color: blue;
    position: absolute;
    margin: 0px;
    padding: 0px;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}

.fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>
