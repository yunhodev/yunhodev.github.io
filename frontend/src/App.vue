<template>
  <div class="d-flex flex-column min-vh-100">
  <header>
    <!-- Responsive navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/#/">YunhoDev</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" :class="{ active: homeCurrnent}" @click="setCurrent('home')" aria-current="page" href="/#/">Home</a></li>
                        <li class="nav-item"><a class="nav-link" :class="{ active: docsCurrnent}" @click="setCurrent('docs')" href="/#/docs">Docs</a></li>
                        <li class="nav-item"><a class="nav-link" :class="{ active: toolsCurrnent}" @click="setCurrent('tools')" href="/#/tools">Tools</a></li>
                        <li class="nav-item"><a class="nav-link" :class="{ active: sitemapCurrnent}" @click="setCurrent('sitemap')" href="/#/sitemap">SiteMap</a></li>
                        <li class="nav-item" @click="setCurrent('other')" v-if="!isLogin"><a class="btn btn-light" href="/#/sign%20in">Sign in</a></li>
                        <li v-if="isLogin" class="nav-item dropdown">
                          <a href="#" class="d-block link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" @click="setCurrent('other')" href="/#/profile">Profile</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" @click="setCurrent('other')" href="/#/sign-out">Sign Out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  <router-view/>
  <!-- Footer-->
  
    <footer class="py-5 bg-dark mt-auto">
      <div class="container"><p class="m-0 text-center text-white">Copyright &copy; YunhoDev 2024</p></div>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  //const currentPath = ref(window.location.hash)
  var currentUrl = ref(window.location.hash)
  //alert(currentUrl.value)
  /*var currentUrl = window.location.href
  document.body.append(currentUrl)*/
  /*window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })*/
  var isLogin = ref(false)
  var homeCurrnent = ref(false)
  var toolsCurrnent = ref(false)
  var docsCurrnent = ref(false)
  var sitemapCurrnent = ref(false)
  var otherCurrent = ref(false)
  function setCurrent(page) {
    page == 'home' ? homeCurrnent.value = true : homeCurrnent.value = false
    page == 'tools' ? toolsCurrnent.value = true : toolsCurrnent.value = false
    page == 'docs' ? docsCurrnent.value = true : docsCurrnent.value = false
    page == 'sitemap' ? sitemapCurrnent.value = true : sitemapCurrnent.value = false
    page == 'other' ? otherCurrent.value = true : otherCurrent.value = false
  }
  if(currentUrl.value == '#/') {
    setCurrent('home')
  } else if(currentUrl.value == '#/tools') {
    setCurrent('tools')
  } else if(currentUrl.value == '#/docs') {
    setCurrent('docs')
  } else if(currentUrl.value == '#/sitemap') {
    setCurrent('sitemap')
  } else if(currentUrl.value == '#/profile') {
    setCurrent('profile')
  }
</script>

<style>
footer {
  /*position: fixed;*/
  left: 0px;
  bottom: 0px;
  width: 100%;
}
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
