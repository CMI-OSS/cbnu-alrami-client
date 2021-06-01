import { useQuery } from '@apollo/client'

import Dialog from '../shared/Dialog'
import StyledRestaurant from './style'
import Name from './Name'
import MapDialog from './Map'
import Shop from './Shop'
import Loading from '@components/shared/Loading'
import { RestaurantLocationNames } from '@src/constants'
import { GET_LOCATION_STATE, GET_RESTAURANTS_BY_LOCATION } from '@src/apollo/quries'
import { RiMap2Line } from 'react-icons/ri'

export interface Menu {
  menu: string
  price: number
}
export interface RestaurantDetail {
  address: string
  location: string
  longitude?: number
  latitude?: number
  name: string
  details: Menu[]
  time: string
  break: string
}

export interface RestaurantData {
  restaurants: RestaurantDetail[]
}

function Restaurant() {
  const NAMES = [
    RestaurantLocationNames.Main,
    RestaurantLocationNames.Middle,
    RestaurantLocationNames.Back,
    RestaurantLocationNames.Side,
    RestaurantLocationNames.West,
  ]
  const { data: location } = useQuery(GET_LOCATION_STATE)
  const { loading, data: restaurants } = useQuery<RestaurantData>(GET_RESTAURANTS_BY_LOCATION, {
    variables: { location: location.resturantLocationName },
  })

  if (loading || !restaurants) return <Loading />

  let openDialog: Function
  const mapOpenCallback = (cb: Function) => {
    openDialog = cb
  }

  return (
    <StyledRestaurant>
      <div className="names">
        {NAMES.map(name => (
          <Name key={name} {...{ name }} />
        ))}
        <button type="button" className="map" onClick={() => openDialog()}>
          <RiMap2Line />
        </button>
      </div>
      <div onClick={() => openDialog()}>
        <img src="/img/map.png" alt="지도" width="100%" />
      </div>
      <div className="shop-list">
        {restaurants.restaurants.map((restaurant, index) => (
          <Shop key={index} {...{ restaurant }} />
        ))}
      </div>
      <MapDialog openCallback={mapOpenCallback} />
    </StyledRestaurant>
  )
}

export default Dialog({ title: '맛집', ContentComponent: Restaurant })
