import Calendar from './Calendar'
import Label from './Label'
import ScheduleLabel from './style'

function Schedule() {
  return (
    <ScheduleLabel>
      <Calendar />
      <div className="timeline">
        <Label />
      </div>
    </ScheduleLabel>
  )
}

export default Schedule
