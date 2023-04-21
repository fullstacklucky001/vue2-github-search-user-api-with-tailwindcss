<script>
import Icon from './IconGroup.vue';

export default {
    components: { Icon },
    props: {
        noResult: Boolean
    },
    data() {
        return {
            search: ''
        }
    },

    methods: {
        handleSearch() {
            console.log(this.search)
        }
    }
}

</script>

<template>
    <section class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <Icon icon="search" class="text-primary" />
        </div>
        <input type="search" v-model="search" @keyup.enter="handleSearch"
            class="block w-full pl-14 p-5 text-sm text-gray-900 rounded-lg shadow-lg bg-white dark:bg-secondary-light dark:placeholder-gray-dark dark:text-white focus:outline-none dark:placeholder:text-gray-light"
            placeholder="Search Github username..." required>
        <p v-if="noResult" class="text-red-500 absolute right-32 bottom-4">No results</p>
        <button
            class="text-white absolute right-2.5 bottom-2.5 bg-primary px-4 py-2 rounded-lg hover:bg-blue-400 focus:outline-none text-h3"
            data-testid="submit-btn" @click="handleSearch">
            Search
        </button>

    </section>
</template>