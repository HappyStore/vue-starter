<template>
    <div class="card">
        Hello, world
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class App extends Vue {

    }
</script>

<style scoped lang="scss">
    .card {
        color: blue;
    }
</style>
