import dayjs from 'dayjs'

import StyledHome from './style'
import { Days } from '@src/constants'

function Home() {
  const DAYS = [Days.Sunday, Days.Monday, Days.Thuesday, Days.Wednesday, Days.Thursday, Days.Friday, Days.Saturday]
  const today = new Date()

  return (
    <StyledHome>
      <div className="date">
        {dayjs(today).month() + 1}월 {dayjs(today).date()}일 {DAYS[dayjs(today).day()]}요일
      </div>
    </StyledHome>
  )
}

export default Home
