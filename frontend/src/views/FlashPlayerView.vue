<template>
    <!-- Page header with logo and tagline-->
    <div class="py-5 bg-light border-bottom mb-4">
        <div class="container">
            <div class="text-center my-5">
                <h1 class="fw-bolder">Profile</h1>
                <p class="lead mb-0">사용자 정보</p>
            </div>
        </div>
    </div>
    <script>
    window.RufflePlayer = window.RufflePlayer || {};
    window.addEventListener("load", (event) => {
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        const container = document.getElementById("swf_container");
        container.appendChild(player);
        player.load(swf);
    });
    </script>
    <script src="@/js/ruffle/ruffle.js" />

</template>
  
<script setup>
    from { ref } import 'vue'
    const swf = ref('@/swf/prison/game.swf')
</script>

<style>
    
</style>