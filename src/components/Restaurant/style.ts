import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Restaurant = styled.div`
  .names {
    display: flex;
    justify-content: space-around;
    padding-top: 1rem;
    position: sticky;
    top: 3.55rem;
    background-color: #fff;
    z-index: 1;

    .arrow {
      font-size: 2rem;
      margin-left: 1rem;
      margin-right: 0.5rem;
      margin-top: 0.1rem;
    }

    .map {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }

    .names::-webkit-scrollbar {
      display: none !important;
    }
  }
`
export default Restaurant
