import StyledName from './style'
import { cafeteriaNameVar } from '@src/apollo/cache'

function Name({ name }: { name: string }) {
  const handleName = () => {
    cafeteriaNameVar(name)
  }

  return <StyledName onClick={handleName}>{name}</StyledName>
}

export default Name
