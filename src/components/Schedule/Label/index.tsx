import StyledLabel from './style'
import { monthDateDayFormatDate } from '@src/utils/day'

interface LabelProps {
  content: string
  startDate: string
  endDate: string | null
}

function Label({ content, startDate, endDate }: LabelProps) {
  return (
    <StyledLabel>
      <div className="content">{content}</div>
      {endDate === null ? (
        <div className="term">{monthDateDayFormatDate(new Date(startDate))}</div>
      ) : (
        <div className="term">
          {monthDateDayFormatDate(new Date(startDate))}~{monthDateDayFormatDate(new Date(endDate))}
        </div>
      )}
    </StyledLabel>
  )
}

export default Label
