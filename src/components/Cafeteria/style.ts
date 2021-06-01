import styled from 'styled-components'

const Cafeteria = styled.div`
  padding-bottom: 5rem;
  background: #fff;
  
  .nearby {
    display: flex;
    font-size: 0.8rem;
    justify-content: center;
    cursor: pointer;

    .arrow {
      font-size: 1rem;
      margin-top: -0.2rem;
    }
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`
export default Cafeteria
