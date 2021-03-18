import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

export const SelectorWrapper = styled.ul`
  display: flex;
  overflow-x: auto;
  padding: 0.5em;
  background-color: white;

  & > li {
    flex-shrink: 0;
    margin: 0.3em;
    border-radius: 20px;
    padding: 0.3em 0.5em;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 9px;
    color: var(--black-500);
  }
`
