import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      device_width: 0 as number,
    }
  },
  mounted() {
    this.myEventHandler()
  },
  destroyed() {
    window.removeEventListener('resize', this.myEventHandler)
  },
  methods: {
    myEventHandler(): void {
      if (process.client) {
        this.device_width = window.innerWidth
        window.addEventListener('resize', this.myEventHandler)
      }
    },
  },
})
