<template>
    <div>
        <button @click="btnClick">Button</button>
        <hello-world v-if="helloWorldVisible"></hello-world>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        components: {
            'helloWorld': () => import('./components/helloWorld.vue'),
        },
    })
    export default class App extends Vue {
        helloWorldVisible: boolean = false;

        btnClick(e: any) {
            this.helloWorldVisible = !this.helloWorldVisible;
        }
    }
</script>
