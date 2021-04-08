import { gql } from '@apollo/client'

export const GET_CALENDAR_DATE_STATE = gql`
  query GetDate {
    calendarDate @client
  }
`
