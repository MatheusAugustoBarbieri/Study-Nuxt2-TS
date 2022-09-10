import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  mounted() {
    this.setItemCart()
  },
  methods: {
    ...mapActions({
      setItemCart: 'cart/setItemCart',
    }),
  },
})
