<template>
<div>
    <h1>calender app</h1>
    <section class="heading">
        <h2>{{currentMonthName}}</h2>
        <h2>{{currentYear}}</h2>
    </section>

    <section>
        <p v-for="day in days" :key="day">{{day}}</p>
    </section>

    <section>
        <p v-for="num in startDay()" :key="num"></p>

        <p v-for="num in daysInMonth(currentYear, currentMonth)" :key="num">{{num}}</p>
    </section>
    <section class="controls">
        <button @click="prev">prev</button>
        <button @click="next">next</button>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            currentDate: new Date().getDate(),
            currentMonth: new Date().getMonth(),
            // currentMonthName: new Date().toLocaleString("default", {
            //     month: "long"
            // }),
            currentYear: new Date().getFullYear(),
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        };
    },
    methods: {
        daysInMonth() {
            // const month = new Date().getMonth() + 1;
            return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        },
        startDay() {
            return new Date(this.currentYear, this.currentMonth).getDay();
        },
        next() {
            if (this.currentMonth === 11) {
                this.currentMonth = 0;
                this.currentYear++;
            } else {
                this.currentMonth++;
            }
        },
        prev() {
            if (this.currentMonth === 0) {
                this.currentMonth = 11;
                this.currentYear--;
            } else {
                this.currentMonth--;
            }
        },
    },
    computed: {
        currentMonthName() {
            return new Date(
                this.currentYear,
                this.currentMonth
            ).toLocaleString("default", {
                month: "long"
            });
        }
    }

};
</script>

<style scoped>
section {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    width: 100%;
}

section p {
    font-weight: bold;
    width: 14.28%;
}

.heading {
    display: flex;
    justify-content: space-between;
}

.controls {
    display: flex;
    justify-content: space-between;
}

button {
    border-radius: 5px;
    border: none;
    padding: 5px;
}
</style>
