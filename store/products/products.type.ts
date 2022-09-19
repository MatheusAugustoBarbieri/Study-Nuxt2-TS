import { Commit } from 'vuex'

export interface StateProducts {
  products: Array<object>
}

export enum EnumMutationsProducts {
  SET_PRODUCTS = 'SET_PRODUCTS',
}
export interface MutationsProducts {
  [EnumMutationsProducts.SET_PRODUCTS](s: StateProducts, p: Array<object>): void
}

export enum EnumActionsProducts {
  SET_PRODUCTS = 'SET_PRODUCTS',
}

export interface ActionsProducts {
  [EnumActionsProducts.SET_PRODUCTS](context: { commit: Commit }): void
}

export interface GettersProducts {
  getProducts: (s: StateProducts) => object
}
