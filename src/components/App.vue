<template>
    <div id="app">
        <section class="content">
            <keep-alive>
                <Header/>
                <router-view></router-view>
            </keep-alive>
        </section>
    </div>

</template>

<script>
import Header from './Header.vue';

export default {
    name: 'App',
    components: {
        Header,
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.content {
    width: 1200px;
    background-color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>