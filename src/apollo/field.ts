import { cafeteriaDateVar, calendarDateVar, cafeteriaNameVar, resturantLocationNameVar } from './cache'

export const cafeteriaDate = {
  read() {
    return cafeteriaDateVar()
  },
}

export const calendarDate = {
  read() {
    return calendarDateVar()
  },
}

export const cafeteriaName = {
  read() {
    return cafeteriaNameVar()
  },
}

export const resturantLocationName = {
  read() {
    return resturantLocationNameVar()
  },
}
