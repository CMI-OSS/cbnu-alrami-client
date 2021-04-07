import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

import StyledArrow from './style'
import { dateVar } from '@src/apollo/cache'
import { dateMinus, datePlus } from '@src/utils/day'

function Arrow({ direction }: { direction: string }) {
  const plus = () => {
    const newDate = datePlus(dateVar(), 'day').toDate()
    dateVar(newDate)
  }

  const minus = () => {
    const newDate = dateMinus(dateVar(), 'day').toDate()
    dateVar(newDate)
  }
  return (
    <StyledArrow>
      {direction === 'right' ? <BiChevronRight onClick={plus} /> : <BiChevronLeft onClick={minus} />}
    </StyledArrow>
  )
}

export default Arrow
