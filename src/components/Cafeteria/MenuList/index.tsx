import { useQuery } from '@apollo/client'
import dayjs from 'dayjs'

import Time from './Time'
import Menu from './Menu'
import MenuEmpty from '@src/components/Cafeteria/MenuList/MenuEmpty'
import Loading from '@components/shared/Loading'
import { GET_CAFETERIA_NAME_STATE, GET_CAFETERIA_DATE_STATE, GET_MENU } from '@src/apollo/quries'

interface Menus {
  date: string
  name: string
  breakfast?: string
  lunch?: string
  dinner?: string
}

interface MenuData {
  cafeteria: Menus
}

function MenuList() {
  const { data: dateState } = useQuery(GET_CAFETERIA_DATE_STATE)
  const { data: nameState } = useQuery(GET_CAFETERIA_NAME_STATE)
  const date = dayjs(dateState.date)

  const { loading, data: menu } = useQuery<MenuData>(GET_MENU, {
    variables: { name: nameState.cafeteriaName, date: `${date.year()}-${date.month() + 1}-${date.date()}` },
  })

  if (loading) return <Loading />
  if (!menu) return <MenuEmpty />

  const [breakfast, lunch, dinner] = [menu.cafeteria.breakfast, menu.cafeteria.lunch, menu.cafeteria.dinner]

  return (
    <>
      {breakfast && (
        <>
          <Time timezone="아침" />
          <Menu menu={breakfast} />
        </>
      )}
      {lunch && (
        <>
          <Time timezone="점심" />
          <Menu menu={lunch} />
        </>
      )}
      {dinner && (
        <>
          <Time timezone="저녁" />
          <Menu menu={dinner} />
        </>
      )}
    </>
  )
}

export default MenuList
