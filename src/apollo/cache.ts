import { makeVar } from '@apollo/client'

export const cafeteriaDateVar = makeVar<Date>(new Date())
export const calendarDateVar = makeVar<Date>(new Date())
export const cafeteriaNameVar = makeVar<String>('본관')
export const resturantLocationNameVar = makeVar<String>('중문')
