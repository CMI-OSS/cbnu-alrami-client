import Selector from './Selector'

function Notice() {
  const sites = [
    { id: 1, name: '테스트' },
    { id: 2, name: '테스트2' },
    { id: 3, name: '테스트3' },
    { id: 4, name: '테스트4' },
    { id: 5, name: '테스트5' },
    { id: 6, name: '테스트6' },
    { id: 7, name: '테스트7' },
    { id: 8, name: '테스트8' },
    { id: 9, name: '테스트9' },
    { id: 10, name: '테스트10' },
  ]
  return (
    <>
      <Selector sites={sites} />
    </>
  )
}

export default Notice
