import Calendar from './Calendar'
import Label from './Label'
import StyledSchedule from './style'

function Schedule() {
  return (
    <StyledSchedule>
      <Calendar />
      <div className="timeline">
        <p>학사일정</p>
        <Label content="1" startDate="2021-04-01T00:00:00.000Z" endDate="2021-04-23T00:00:00.000Z" />
        <Label content="2" startDate="2021-04-01T00:00:00.000Z" endDate="2021-04-23T00:00:00.000Z" />
        <Label content="3" startDate="2021-04-01T00:00:00.000Z" endDate="2021-04-23T00:00:00.000Z" />
        <Label content="4" startDate="2021-04-01T00:00:00.000Z" endDate="2021-04-23T00:00:00.000Z" />
        <Label content="5" startDate="2021-04-01T00:00:00.000Z" endDate="2021-04-23T00:00:00.000Z" />
        <Label content="6" startDate="2021-04-01T00:00:00.000Z" endDate="2021-04-23T00:00:00.000Z" />
      </div>
    </StyledSchedule>
  )
}

export default Schedule
