import Dialog from '../../shared/Dialog'
import StyledDetail from './style'
import { RestaurantDetail } from '@components/Restaurant'
import { BiChevronLeft, BiTimeFive } from 'react-icons/bi'
import { RiRestTimeLine } from 'react-icons/ri'
import { IoLocationOutline } from 'react-icons/io5'

interface DetailProps {
  restaurant: RestaurantDetail
  openCallback: Function
}

function Detail({ restaurant, openCallback }: DetailProps) {
  const ContentComponent = ({ closeDialog }: { closeDialog: Function }) => (
    <StyledDetail>
      <div className="header">
        <BiChevronLeft className="arrow" onClick={e => closeDialog(e)} />
        <div className="title">{restaurant.name}</div>
      </div>
      <section>
        <div className="menu-detail">
          {restaurant.details.map((detail, index) => (
            <div className="detail" key={index}>
              <div className="menu">{detail.menu}</div>
              <div className="line" />
              <div className="price">{detail.price.toLocaleString()}원</div>
            </div>
          ))}
        </div>
        <div className="time">
          <BiTimeFive className="icon" /> 영업시간
          <p>{restaurant.time}</p>
        </div>
        <div className="break">
          <RiRestTimeLine className="icon" /> 브레이크타임
          <p>{restaurant.break}</p>
        </div>
        <div className="location">
          <IoLocationOutline className="icon" /> 위치
          <p>{restaurant.address}</p>
        </div>
      </section>
    </StyledDetail>
  )

  return Dialog({ ContentComponent })({ openCallback })
}

export default Detail
