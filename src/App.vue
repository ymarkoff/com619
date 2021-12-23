<template>
  <!-- <div :class="{ dark: isDarkModeActive }">
    <div class="flex flex-row h-screen antialiased text-gray-800">
      <Sidebar @toggle-dark-mode="isDarkModeActive = !isDarkModeActive" />
      <Chat />
      <Login />
    </div>
  </div> -->
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>|<router-link to="/about"
        >About</router-link
      >
      |<router-link to="/login"
        >Login</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import Chat from "./components/Chat.vue"
import Sidebar from "./components/Sidebar.vue"
import About from "./components/About.vue"
import Login from "./components/Login.vue"
import Home from "./components/Home.vue"

export default {
  name: "App",
  data() {
    return {
      isDarkModeActive: false,
    };
  },
  components: {
    Home,
    Chat,
    About,
    Sidebar,
    Login
  },
};
</script>