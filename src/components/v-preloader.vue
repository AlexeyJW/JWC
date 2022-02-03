<script setup>
</script>
<template>
 <div class="preloader-5"></div>
</template>
<style>
.preloader-5 {
    display: block;
    position: absolute;
    top:50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: 10px auto;
    border-radius: 50%;
    border: 3px solid transparent;
    /* border-top-color:var(--sidebar-bg-color); */
    animation: preloader-5-spin 2s linear infinite;
    z-index:1001;
}
.preloader-5:before {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color:var(--sidebar-bg-color);
    animation: preloader-5-spin 3s linear infinite;
}
.preloader-5:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #337AB7;
    animation: preloader-5-spin 1.5s linear infinite;
}
@keyframes preloader-5-spin {
    0%   {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>