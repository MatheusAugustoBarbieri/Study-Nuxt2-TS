import { mapActions } from 'vuex'
export default {
  mounted() {
    this.setItemCart()
  },
  methods: {
    ...mapActions({
      setItemCart: 'cart/setItemCart',
    }),
  },
}
