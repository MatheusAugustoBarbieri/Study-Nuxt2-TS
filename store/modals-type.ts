export enum Enumutations {
  OPEN_HEADER_MENU = 'OPEN_HEADER_MEN',
}

export interface State {
  menu_header_open: boolean
}

export interface Mutations {
  [Enumutations.OPEN_HEADER_MENU](s: State, p: boolean): void
}
