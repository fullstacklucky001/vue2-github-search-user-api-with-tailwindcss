<template>
    <button class="inline-flex items-center text-gray-dark hover:text-secondary-dark" @click="isDark = !isDark">
        {{ isDark ? 'Light' : 'Dark' }}
        <Icon v-if="isDark" icon="sun" class="ml-2" />
        <Icon v-else icon="moon" class="ml-2" />
    </button>
</template>

<script>
import Icon from './IconGroup.vue';

export default {
    components: { Icon },

    data() {
        return {
            isDark: {
                type: Boolean,
                default: false
            }
        }
    }
}
</script>
