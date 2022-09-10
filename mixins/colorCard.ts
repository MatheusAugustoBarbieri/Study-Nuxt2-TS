import { Iproduto, Iprod } from '@/interfaces/Iproduto'
export default {
  methods: {
    bgType(prod: Iproduto) {
      if (prod && prod.types) {
        return [
          ...new Set(
            prod.types.map((x: Iprod) => {
              return x.type.name === 'grass'
                ? '#81BD8C'
                : x.type.name === 'poison'
                ? '#81BD8C'
                : x.type.name === 'fire'
                ? '#FFA860'
                : x.type.name === 'flying'
                ? '#B0BFD8'
                : x.type.name === 'water'
                ? '#37A7F2'
                : '#B0BFD8'
            }),
          ),
        ][0]
      } else {
        return '#B0BFD8'
      }
    },
  },
}
