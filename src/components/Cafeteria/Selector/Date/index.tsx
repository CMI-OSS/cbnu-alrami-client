import { useReactiveVar } from '@apollo/client'

import StyledDate from './style'
import { cafeteriaDateVar } from '@src/apollo/cache'
import { fullFormatDate } from '@src/utils/day'

function Date() {
  const date = useReactiveVar(cafeteriaDateVar)
  return <StyledDate>{fullFormatDate(date)}</StyledDate>
}

export default Date
