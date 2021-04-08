import styled from 'styled-components'

const Label = styled.div`
  background-color: #fff;
  padding: 0.8rem;
  box-shadow: var(--menu-box-shadow);
  margin-bottom: 0.8rem;
  font-size: 0.8rem;
  border-left: 5px solid var(--label-red);

  .content {
    font-weight: 700;
    padding-bottom: 0.8rem;
  }

  .term {
    color: gray;
  }

  :last-child {
    margin-bottom: 4rem;
  }
`
export default Label
