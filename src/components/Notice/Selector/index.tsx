import { SelectorWrapper } from './style'

interface Site {
  id: number
  name: string
}

interface SelectorProps {
  sites: Site[]
}

function Selector({ sites }: SelectorProps) {
  return (
    <SelectorWrapper>
      {sites.map(site => (
        <li key={site.id}>{site.name}</li>
      ))}
    </SelectorWrapper>
  )
}

export default Selector
