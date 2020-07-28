<template>
    <div id="app">
        <section class="content">
            <!-- <keep-alive> -->
                <Header/>
                <router-view></router-view>
                <!-- <About/> -->
            <!-- </keep-alive> -->
        </section>
    </div>
</template>

<script>
import Header from './Header.vue';
import About from './About.vue';

export default {
    name: 'App',
    components: {
        Header,
        About
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
    max-width: 1200px;
    background-color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 auto;
}

</style>