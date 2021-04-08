import styled from 'styled-components'

const Selector = styled.div`
  display: flex column;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  background: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  position: sticky;
  top: 0;

  &::after {
    content: '';
    display: flex;
    margin-top: 0.7rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 1px;
    background: var(--detail-menu-gray);
  }

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
