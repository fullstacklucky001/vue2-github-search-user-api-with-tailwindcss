<script>
export default {
    emits: ['response'],
    created() {
        this.$emit('response', 'hello from child')
    }
}
</script>

<template>
    <h1>Child component</h1>
</template>