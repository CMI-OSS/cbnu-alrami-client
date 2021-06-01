import dayjs from 'dayjs'

import StyledHome from './style'
import { Days } from '@src/constants'

function Home() {
  const DAYS = [Days.Sunday, Days.Monday, Days.Thuesday, Days.Wednesday, Days.Thursday, Days.Friday, Days.Saturday]

  return (
    <StyledHome>
      <div className="date">
        {dayjs(new Date()).month() + 1}월 {dayjs(new Date()).date()}일 {DAYS[dayjs(new Date()).day()]}요일
      </div>
    </StyledHome>
  )
}

export default Home
