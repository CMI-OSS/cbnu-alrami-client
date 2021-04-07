import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import StyledArrow from './style'
import { dateMinus, datePlus } from '@src/utils/day'
import { cafeteriaDateVar } from '@src/apollo/cache'

function Arrow({ direction }: { direction: string }) {
  const plus = () => {
    const newDate = datePlus(cafeteriaDateVar(), 'day').toDate()
    cafeteriaDateVar(newDate)
  }
  const minus = () => {
    const newDate = dateMinus(cafeteriaDateVar(), 'day').toDate()
    cafeteriaDateVar(newDate)
  }
  return (
    <StyledArrow>
      {direction === 'right' ? <BiChevronRight onClick={plus} /> : <BiChevronLeft onClick={minus} />}
    </StyledArrow>
  )
}

export default Arrow
