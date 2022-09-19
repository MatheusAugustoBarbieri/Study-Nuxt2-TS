import { Commit } from 'vuex'
export interface StateCart {
  cart_product: Array<object>
}

export enum EnumMutationsCart {
  SET_ITEM_CART = 'SET_ITEM_CART',
}
export interface MutationsCart {
  [EnumMutationsCart.SET_ITEM_CART](s: StateCart, p: Array<object>): void
}

export enum EnumActionsCart {
  SET_ITEM_CART = 'SET_ITEM_CART',
  REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
  CLEAR_ALL = 'CLEAR_ALL',
}
export interface ActionsCart {
  [EnumActionsCart.SET_ITEM_CART](
    context: { commit: Commit },
    p: object,
  ): void | unknown

  [EnumActionsCart.REMOVE_ITEM_CART](
    context: { commit: Commit },
    p: { id: any },
  ): void | unknown

  [EnumActionsCart.CLEAR_ALL](
    context: { commit: Commit },
    p: object,
  ): void | unknown
}
