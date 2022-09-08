export default {
  methods: {
    hasInvalidDigits(phone) {
      if (phone) {
        const phoneArray = phone.split('')
        const noAreaCodeArray = phoneArray.splice(2)
        const stringPhone = noAreaCodeArray.join('')
        return stringPhone.match(/^(\d)\1{8}/g)
      }

      return false
    },

    isPhoneValid(phone) {
      if (this.hasInvalidDigits(phone)) {
        return false
      }

      if (phone && phone.length >= 10) {
        return true
      }
      return false
    },
  },
}
