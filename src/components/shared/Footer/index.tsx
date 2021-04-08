import { Link, useLocation } from 'react-router-dom'

import StyledFooter from './style'
import { IoCalendarClearOutline, IoRestaurantOutline } from 'react-icons/io5'
import { AiOutlineHome, AiOutlineNotification } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

function Footer() {
const pathName = useLocation().pathname

  return (
    <StyledFooter>
      <Link to="/notice">
        <div className={pathName === '/notice' ? 'active' : undefined}>
          <AiOutlineNotification className="icon" />
          <p>공지사항</p>
        </div>
      </Link>
      <Link to="/schedule">
        <div className={pathName === '/schedule' ? 'active' : undefined}>
          <IoCalendarClearOutline className="icon" />
          <p>학사일정</p>
        </div>
      </Link>
      <Link to="/">
        <div className={pathName === '/' ? 'active' : undefined}>
          <AiOutlineHome className="icon" />
          <p>홈</p>
        </div>
      </Link>
      <Link to="/cafeteria">
        <div className={pathName === '/cafeteria' ? 'active' : undefined}>
          <IoRestaurantOutline className="icon" />
          <p>식단</p>
        </div>
      </Link>
      <Link to="/more">
        <div className={pathName === '/more' ? 'active' : undefined}>
          <BsThreeDots className="icon" />
          <p>더보기</p>
        </div>
      </Link>
    </StyledFooter>
  )
}

export default Footer
