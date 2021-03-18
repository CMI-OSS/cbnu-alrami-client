import { useQuery } from '@apollo/client'
import dayjs from 'dayjs'
import { GET_DATE_STATE } from '@src/apollo/quries'
import StyledDate from './style'

function Date() {
  const { data } = useQuery(GET_DATE_STATE)
  return <StyledDate>{dayjs(data.date).format('YYYY년 MM월 DD일 ddd요일')}</StyledDate>
}

export default Date
