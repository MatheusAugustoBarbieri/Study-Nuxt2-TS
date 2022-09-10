export default {
  methods: {
    isNameValid(name: string): boolean | string[] | null | string {
      return (
        name &&
        name.length > 2 &&
        typeof name === 'string' &&
        name.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)
      )
    },
  },
}
