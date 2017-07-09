import Vue from 'vue'
import Home from '@/components/steps/HomeStep/index'

describe('index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.page-header__heading p').textContent)
      .to.equal('Walker Kennedy')
  })

  it('should handle load state for listeningToText', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.section--music__body p').textContent)
      .to.equal('Let me think...')
  })

  it('should handle failed state for listeningToText', done => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    vm.isLoading = false
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.section--music__body p').textContent)
        .to.equal('Oops, I\'m having trouble finding my recent listens.')
      done()
    })
  })

  it('should display artist name and song if set', done => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    vm.isLoading = false
    vm.recentSong = 'test'
    vm.recentArtist = 'test'
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.section--music__body p').textContent)
        .to.equal('I\'m listening to "test" by test.')
      done()
    })
  })
})
