<template lang="html">
  <main role="main">
    <div class="content-wrap">
      <article class="article">
        <header class="header" role="banner">
          <h1 class="page-header__heading">
            <p>Walker Kennedy</p>
          </h1>
          <nav class="page-header__nav" role="navigation">
            <router-link class="page_header__link" to="static/WalkerKennedy.pdf">contact</router-link>
            <router-link class="page_header__link" to="static/WalkerKennedy.pdf">resumé</router-link>
          </nav>
        </header>
      </article>
    </div>
  </main>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'i love panda'
    }
  }
}
</script>

<style lang="scss" src="./index.scss"></style>
