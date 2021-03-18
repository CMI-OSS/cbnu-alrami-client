import { gql } from '@apollo/client'

export const GET_CAFETERIA_NAME_STATE = gql`
  query GetCafeteriaName {
    cafeteriaName @client
  }
`
