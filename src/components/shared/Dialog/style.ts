import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Dialog = styled.div`
  position: fixed;
  top: 0px;
  left: 100vw;
  width: 100vw;
  bottom: 0px;
  background-color: white;
  z-index: 1;
  transition: 0.2s;
  min-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  &.open {
    left: 0px;
  }

  .header {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid gray;
    position: sticky;
    top: 0px;
    background: #fff;
    width: 100%;
    text-align: center;
    z-index: 1;

    .title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 0.3rem;
    }

    .arrow {
      position: absolute;
      font-size: 1.7rem;
      left: 5px;
      top: 15px;
    }
  }
`
export default Dialog
