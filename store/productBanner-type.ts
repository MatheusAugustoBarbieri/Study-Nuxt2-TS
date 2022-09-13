import { Commit } from 'vuex'

export interface State {
  prod_banner: object
}

export enum enumMutations {
  SET_PROD_BANNER = 'SET_PROD_BANNER',
}
export interface Mutations {
  [enumMutations.SET_PROD_BANNER](s: State, p: object): void
}

export enum enumActions {
  SET_PROD_BANNER = 'SET_PROD_BANNER',
}
export interface Actions {
  $axios(arg0: string): { data: any } | PromiseLike<{ data: any }>
  [enumMutations.SET_PROD_BANNER](context: { commit: Commit }): void | unknown
}

export interface Getters {
  getProdBanner: (state: State) => object
}
