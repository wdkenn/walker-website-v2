<template lang="html">
  <main role="main">
    <div class="content-wrap">
      <article class="article">
        <header class="header" role="banner">
          <h1 class="page-header__heading">
            <p>Walker Kennedy</p>
          </h1>
          <nav class="page-header__nav" role="navigation">
            <a class="page_header__link" href="#" v-scroll-to="'#contact'">contact</a>
            <a class="page_header__link" href="static/WalkerKennedy.pdf">resumé</a>
          </nav>
        </header>
        <section class="section--about">
          <h3 class="section--about__header">who am i?</h3>
          <div class="section--about__body">
            <p>I'm a software engineer who has built both mobile and web apps professionally.</p>
            <p>I like tackling new challenges, technical or otherwise.</p>
            <p>I enjoy working on products that improve people's lives.</p>
            <p>I love all things music and <a href="https://youtu.be/qchPLaiKocI">getting down</a>.</p>
          </div>
        </section>
        <section class="section--experience">
          <h3 class="section--experience__header">what's my experience?</h3>
          <div class="section--experience__body">
            <p>At <a href="http://www.bowdoin.edu/">Bowdoin College</a>, I focused on building software to <a href="http://community.bowdoin.edu/news/2013/08/walker-kennedy-15-creates-hi-tech-tool-to-teach-traditional-afro-latin-music/">teach music</a> and <a href="https://youtu.be/M-ixth688vI">make music</a>.</p>
            <p>I developed iOS and Android apps at <a href="https://runkeeper.com/">runkeeper</a>.</p>
            <p>Currently, I'm a product engineer at <a href="https://www.pillpack.com/">PillPack</a>.</p>
          </div>
        </section>
        <section class="section--music">
          <h3 class="section--music__header">what am i listening to?</h3>
          <div class="section--music__body">
            <p>Recently I listened to </p>
          </div>
        </section>
        <section id="section--image">
          <img src="../../../assets/HipsterWalker.png" alt="Walker sits on a couch holding several vinyl record sleeves. The wall behind him is covered in vinyl records.">
        </section>
        <section id="contact" class="section--contact">
          <h3 class="section--contact__header">contact</h3>
          <div class="section--contact__links">
            <a class="section--contact__link" href="mailto:walker@walker-kennedy.com">email</a>
            <a class="section--contact__link" href="https://github.com/wdkenn">github</a>
            <a class="section--contact__link" href="https://www.linkedin.com/in/walkerkennedy/">linkedin</a>
          </div>
        </section>
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
