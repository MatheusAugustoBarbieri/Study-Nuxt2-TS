export default {
  methods: {
    validateEmail(email: string): boolean | unknown {
      try {
        if (email) {
          // eslint-disable-next-line no-useless-escape
          return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email,
          )
        }
        return false
      } catch (error: unknown) {
        return error
      }
    },
  },
}
