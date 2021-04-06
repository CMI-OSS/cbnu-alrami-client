import { useState } from 'react'
import StyledCalendar from './style'
import { yearMonthFormatDate } from '@src/utils/day'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { dateVar } from '@src/apollo/cache'
import dayjs from 'dayjs'

function Calendar() {
  const [date, setDate] = useState(dateVar())

  const plus = () => {
    const newDate = dayjs(dateVar()).add(1, 'month')
    dateVar(newDate.toDate())
    setDate(newDate.toDate())
  }

  const minus = () => {
    const newDate = dayjs(dateVar()).subtract(1, 'month')
    dateVar(newDate.toDate())
    setDate(newDate.toDate())
  }

  return (
    <StyledCalendar>
      <div className="selector">
        <IoIosArrowBack className="icon" onClick={minus} />
        {yearMonthFormatDate(date)}
        <IoIosArrowForward className="icon" onClick={plus} />
      </div>
    </StyledCalendar>
  )
}

export default Calendar
