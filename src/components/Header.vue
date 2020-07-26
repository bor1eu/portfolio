<template>
    <transition name=fade>
        <nav>
            <router-link :to="{name:'About'}" class="header-navigation__link">
                Обо мне
            </router-link>
            <router-link :to="{name:'Projects'}" class="header-navigation__link">
                Мои проекты
            </router-link>
        </nav>
    </transition>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
        
    }),
}
</script>

<style>
    nav {
        display: flex;
        flex-flow: row nowrap;
        margin: 0 auto;

    }


</style>