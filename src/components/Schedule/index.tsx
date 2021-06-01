import { useQuery } from '@apollo/client'
import dayjs from 'dayjs'

import Calendar from './Calendar'
import Label from './Label'
import StyledSchedule from './style'
import { GET_CALENDAR_DATE_STATE, GET_SCHEDULE } from '@src/apollo/quries'
import Loading from '@components/shared/Loading'

interface ScheduleProps {
  content: string
  start_date: string
  end_date: string | null
}

interface ScheduleData {
  schedule: ScheduleProps[]
}

function Schedule() {
  const { data: dateState } = useQuery(GET_CALENDAR_DATE_STATE)
  const date = dayjs(dateState.calendarDate)
  const { loading, data: schedule } = useQuery<ScheduleData>(GET_SCHEDULE, {
    variables: { year: date.year(), month: date.month() + 1 },
  })

  if (loading) return <Loading />
  if (!schedule) return <></>

  return (
    <StyledSchedule>
      <Calendar />
      <div className="timeline">
        <p>학사일정</p>
        {schedule.schedule.map(scheduleDetail => (
          <Label
            key={scheduleDetail.content}
            content={scheduleDetail.content}
            startDate={scheduleDetail.start_date}
            endDate={scheduleDetail.end_date}
          />
        ))}
      </div>
    </StyledSchedule>
  )
}

export default Schedule
