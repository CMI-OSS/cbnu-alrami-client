import { useReactiveVar } from '@apollo/client'
import StyledCalendar from './style'
import { yearMonthFormatDate, dateMinus, datePlus } from '@src/utils/day'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { calendarDateVar } from '@src/apollo/cache'
import { calendar, Week, getDayClassName } from '@src/utils/calendar'
import { Days } from '@src/constants'

function Calendar() {
  const date = useReactiveVar(calendarDateVar)
  const fullMonth: Week[] = calendar(date)
  const DAYS = [Days.Sunday, Days.Monday, Days.Thuesday, Days.Wednesday, Days.Thursday, Days.Friday, Days.Saturday]

  const plus = () => {
    const newDate = datePlus(calendarDateVar(), 'month').toDate()
    calendarDateVar(newDate)
  }
  const minus = () => {
    const newDate = dateMinus(calendarDateVar(), 'month').toDate()
    calendarDateVar(newDate)
  }

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
                  className={getDayClassName(date, day.year, day.month, day.date, day.day)}>
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
