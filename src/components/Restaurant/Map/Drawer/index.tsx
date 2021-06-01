import StyledDrawer from './style'
import { RestaurantDetail } from '@components/Restaurant'
import RestaurantDetailDialog from '../../Detail'

interface DrawerProps {
  restaurant: RestaurantDetail
}

function Drawer({ restaurant }: DrawerProps) {
    let openDialog: Function
  
    const restaurantOpenCallback = (cb: Function) => {
      openDialog = cb
    }
  return (
    <StyledDrawer onClick={() => openDialog()}>
      <picture>
        <img
          src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180130_263%2F1517301583613dwuaL_JPEG%2FZh5SeEjUT12rWxcLJ2nstPaB.jpg"
          alt="상점"
        />
      </picture>
      <div className="info">
        <div className="name">{restaurant.name}</div>
        <div className="address">{restaurant.address}</div>
        <div className="menu">
          {restaurant.details[0].menu} {restaurant.details[0].price.toLocaleString()}원
        </div>
      </div>
      <RestaurantDetailDialog {...{ restaurant }} openCallback={restaurantOpenCallback} />

    </StyledDrawer>
  )
}

export default Drawer
