<template>
    <div class="card">
        Hello, world
        <button @click="btnClick">Button</button>
        <card v-if="cardVisible"></card>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        components: {
            'Card': () => import('./components/card.vue'),
        },
    })
    export default class App extends Vue {
        cardVisible: boolean = false;

        btnClick(e: any) {
            this.cardVisible = !this.cardVisible;
        }
    }
</script>

<style scoped lang="scss">
    .card {
        color: blue;
    }
</style>
