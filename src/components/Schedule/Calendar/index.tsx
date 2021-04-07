import { useState } from 'react'
import StyledCalendar from './style'
import { yearMonthFormatDate, dateMinus, datePlus } from '@src/utils/day'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { dateVar } from '@src/apollo/cache'
import { calendar, Week } from '@src/utils/calendar'
import { Days } from '@src/constants'

function Calendar() {
  const [date, setDate] = useState(dateVar())
  const thisMonth = new Date().getMonth()
  const thisYear = new Date().getFullYear()

  const plus = () => {
    const newDate = datePlus(dateVar(), 'month').toDate()
    dateVar(newDate)
    setDate(newDate)
  }

  const minus = () => {
    const newDate = dateMinus(dateVar(), 'month').toDate()
    dateVar(newDate)
    setDate(newDate)
  }

  const fullMonth: Week[] = calendar(date)
  const DAYS = [Days.Sunday, Days.Monday, Days.Thuesday, Days.Wednesday, Days.Thursday, Days.Friday, Days.Saturday]

  return (
    <StyledCalendar>
      <div className="selector">
        <IoIosArrowBack className="icon" onClick={minus} />
        {yearMonthFormatDate(date)}
        <IoIosArrowForward className="icon" onClick={plus} />
      </div>
      <table className="calendar">
        <thead>
          <tr className="weekdays">
            {DAYS.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fullMonth.map(week => (
            <tr key={week.numOfWeek} className="days">
              {week.days.map(day => (
                <td
                  key={`${day.month}-${day.date}`}
                  className={
                    day.month !== date.getMonth()
                      ? 'day other-month'
                      : day.date === date.getDate() && day.month === thisMonth && day.year === thisYear
                      ? 'day today'
                      : day.day === 6
                      ? 'day sat'
                      : day.day === 0
                      ? 'day sun'
                      : 'day'
                  }>
                  {day.date}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledCalendar>
  )
}

export default Calendar
