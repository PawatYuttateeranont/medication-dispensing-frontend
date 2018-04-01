<template>
  <div id="header-bar" class="bg-light p-3 mb-3">
    <router-link to="/"><button class="btn btn-light">Home</button></router-link>
    |
    <router-link to="/create"><button class="btn btn-light">Create Prescription</button></router-link>
    |
    <router-link to="/list"><button class="btn btn-light">Prescription List</button></router-link>
    |
    <router-link to="/sticker"><button class="btn btn-light">Prescription Sticker</button></router-link>
    |
    <router-link to="/medicine"><button class="btn btn-light">Medicine Info</button></router-link>
    |
    <router-link to="/medicine-expire"><button class="btn btn-light">Medicine Expire</button></router-link>
  </div>
</template>

<script>
  export default {
    name: 'HeaderBar'
  }
</script>

<style>

</style>
