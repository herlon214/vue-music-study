<template>
  <div id="app">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter has-text-centered">
        <h1 class="title is-1">music theory study</h1>

        <router-link to="/third-and-fifth" class="button is-primary is-outlined">third and fifth notes of a scale</router-link>
        <br><br>
        <router-view></router-view>
        <br><small>made with ❤ by <strong>Herlon Aguiar</strong></small>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
