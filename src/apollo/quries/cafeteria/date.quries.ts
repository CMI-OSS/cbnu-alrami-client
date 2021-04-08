import { gql } from '@apollo/client'

export const GET_CAFETERIA_DATE_STATE = gql`
  query GetDate {
    cafeteriaDate @client
  }
`
