import { dateVar, cafeteriaNameVar } from './cache'

export const date = {
  read() {
    return dateVar()
  },
}

export const cafeteriaName = {
  read() {
    return cafeteriaNameVar()
  },
}
