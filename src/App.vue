<template>
  <div id="app">
    <header class="flex justify-between items-center py-4 md:py-8">
      <!-- logo - start -->
      <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" class="w-6 h-auto text-indigo-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        SmartPort
      </a>
      <!-- logo - end -->

      <!-- nav - start -->
      <nav class="hidden lg:flex gap-12">
        <router-link to="/" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Home</router-link>
        <router-link to="/berths" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Berths</router-link>
        <router-link to="/schedule" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">BookingSchedule</router-link>
        <router-link to="/tides" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Tides</router-link>
      </nav>
      <!-- nav - end -->

      <!-- buttons - start -->
      <div class="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
        <router-link to="/login" class="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">Sign in</router-link>

        <!-- <a href="#" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Sign up</a> -->
      </div>

      <button type="button" class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button>
      <!-- buttons - end -->
    </header>
    <router-view />
  </div>
</template>

<script>
import Tides from "./components/Tides.vue"
import Berths from "./components/Berths.vue"
import BookingSchedule from "./components/BookingSchedule.vue"
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
    Berths,
    BookingSchedule,
    Login,
    Tides
  },
};
</script>