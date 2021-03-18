import styled from 'styled-components'

const Selector = styled.div`
  display: flex column;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  .date {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .names {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: none;
  }

  .names::-webkit-scrollbar {
    display: none !important;
  }
`
export default Selector
