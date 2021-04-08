import StyledLabel from './style'
import { monthDateDayFormatDate } from '@src/utils/day'

interface LabelProps {
  content: string
  startDate: string
  endDate: string
}

function Label({ content, startDate, endDate }: LabelProps) {
  return (
    <StyledLabel>
      <div className="content">{content}</div>
      <div className="term">
        {monthDateDayFormatDate(new Date(startDate))}~{monthDateDayFormatDate(new Date(endDate))}
      </div>
    </StyledLabel>
  )
}

export default Label
