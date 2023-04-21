<script>
import ThemeSwitcher from './ThemeSwitcher.vue';
import SearchBar from './SearchBar.vue';

export default {
    components: {
        ThemeSwitcher,
        SearchBar
    }
}

</script>

<template>
    <div class="flex min-h-screen flex-col justify-start p-10 items-center bg-white">
        <main class="w-full max-w-[800px]">
            <div class="flex justify-between mb-6">
                <a href="#">
                    <h1>devfinder</h1>
                </a>
                <ThemeSwitcher />
            </div>
            <SearchBar>

            </SearchBar>
        </main>
    </div>
</template>