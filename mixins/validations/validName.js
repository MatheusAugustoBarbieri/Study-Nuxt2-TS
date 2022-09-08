export default {
  methods: {
    isNameValid(name) {
      return (
        name &&
        name.length > 2 &&
        typeof name === 'string' &&
        name.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)
      )
    },
  },
}
