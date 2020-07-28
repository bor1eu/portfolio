<template>
    <nav>
        <router-link :to="{name:'About'}" class="header-navigation__link">
            Обо мне
        </router-link>
        <router-link :to="{name:'Projects'}" class="header-navigation__link">
            Мои проекты
        </router-link>
    </nav>
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
        justify-content: center;
        margin: 0 auto;
        padding-top: 30px;
        border-bottom: 1px solid #eee;
        font-size: 1em;
        color: blue;
    }
    nav > a {
        padding: 0 30px;
        text-decoration: none;
    }
    nav > a:hover {
        border-bottom: 2px solid #eee;
    }
</style>