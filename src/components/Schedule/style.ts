import styled from 'styled-components'

const Schedule = styled.div`
  .timeline {
    background-color: var(--schedule-background);
    overflow-y: auto;
    padding: 1rem;
    min-height: calc(100vh - 358.374px);

    p {
      color: var(--schedule-gray);
      padding-top: 0.5rem;
      padding-bottom: 1rem;
      font-size: 1rem;
      font-weight: bold;
    }
  }
`
export default Schedule
