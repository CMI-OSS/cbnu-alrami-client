import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Name = styled.div`
  border-radius: 0.7rem;
  padding: 0.5rem;
  background-color: var(--gray);
  box-shadow: var(--menu-box-shadow);
  font-size: 0.9rem;
  cursor: pointer;
  min-width: 19%;
  display: flex;
  justify-content: center;
  margin-right: 1rem;
  margin-bottom: 0.3rem;
  height: 1rem;

  &.active {
    color: var(--name-red);
  }

  &.small {
    min-width: 10%;
  }
`
export default Name
