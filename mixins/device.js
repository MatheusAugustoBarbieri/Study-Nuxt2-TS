export default {
  data() {
    return {
      device_width: 0,
    }
  },
  mounted() {
    if (process.client) {
      this.myEventHandler()
      window.addEventListener('resize', this.myEventHandler)
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.myEventHandler)
  },
  methods: {
    myEventHandler() {
      this.device_width = window.innerWidth
    },
  },
}
