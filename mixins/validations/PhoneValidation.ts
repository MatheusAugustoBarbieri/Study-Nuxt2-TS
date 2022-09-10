export default {
  methods: {
    // retorna boolean ou array com string ou nulo
    hasInvalidDigits(phone: string): boolean | string[] | null {
      if (phone) {
        const phoneArray = phone.split('')
        const noAreaCodeArray = phoneArray.splice(2)
        const stringPhone = noAreaCodeArray.join('')
        return stringPhone.match(/^(\d)\1{8}/g)
      }

      return false
    },

    isPhoneValid(phone: string): boolean {
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
