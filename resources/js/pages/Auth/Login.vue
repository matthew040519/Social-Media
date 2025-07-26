<template>
    <p>{{ message }}</p>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            message: 'Welcome to the Login Page!'
        };
    },
    mounted() {
        console.log(this.message);
    }
};
</script>