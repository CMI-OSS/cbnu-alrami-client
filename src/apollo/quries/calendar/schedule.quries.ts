import { gql } from '@apollo/client'

export const GET_SCHEDULE = gql`
  query getSchedule($year: Int!, $month: Int!) {
    schedule(year: $year, month: $month) {
      start_date
      end_date
      content
    }
  }
`
