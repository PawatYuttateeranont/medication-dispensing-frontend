<template>
  <div id="header-bar" class="bg-light p-3 mb-3">
    <router-link to="/"><button class="btn btn-light">Home</button></router-link>
    |
    <router-link to="/create"><button class="btn btn-light">Create Prescription</button></router-link>
    |
    <router-link to="/list"><button class="btn btn-light">Prescription List</button></router-link>
  </div>
</template>

<script>
  export default {
    name: 'HeaderBar'
  }
</script>

<style>

</style>
