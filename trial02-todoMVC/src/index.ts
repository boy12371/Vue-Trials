import Vue from 'vue'
import HelloComponent from './components/Hello.vue'

const v = new Vue({
  el: '#app',
  template: `
    <div>
        <h1 v-if="seen" v-bind:title="name" v-bind:class="name">Hello {{name}}!</h1>
        Name: <input v-model="name" type="text">
        <HelloComponent :name="name" :initialEnthusiasm="5" />
    </div>`,
  data: {
    name: 'World',
    seen: true,
  },
  components: {
    HelloComponent,
  },
})
