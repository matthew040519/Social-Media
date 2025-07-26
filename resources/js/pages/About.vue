<template>
    <p>{{ message }}</p>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            message: 'Welcome to the About Page!'
        };
    },
    mounted() {
        console.log(this.message);
    }
};
</script>