<template>
    <p>{{ message }}</p>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                message: 'Welcome to the Home Page!'
            };
        },
        mounted() {
            console.log(this.message);
        }
    };
</script>