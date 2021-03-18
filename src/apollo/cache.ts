import { makeVar } from '@apollo/client'

export const dateVar = makeVar<Date>(new Date())
export const cafeteriaNameVar = makeVar<String>('본관')
