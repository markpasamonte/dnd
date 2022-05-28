import Vue from "vue";
import App from "./App.vue";
import draggable from "vuedraggable";

Vue.config.productionTip = false;

Vue.component('fxm-form', {
  name: 'fxm-form',
    props: [
        "formMode"
    ],
    components: {
        draggable
    },
    data() {
      return {
        list: ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF']
      }
    },
    mounted() {},
    methods:{},
    template: `
    <div>
      <h1>Dragable Test</h1>
      <draggable :list="list" class="drag-container">
        <div v-for="item in list" class="drag-item">{{ item }}</div>
      </draggable>
    </div>
`
});

new Vue({
  render: h => h(App)
}).$mount("#app");
