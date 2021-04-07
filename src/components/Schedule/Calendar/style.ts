import styled from 'styled-components'

const Calendar = styled.div`
  .selector {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
    font-weight: 700;

    .icon {
      position: relative;
      font-size: 1.3rem;
      padding-left: 1rem;
      padding-right: 1rem;
      top: -3px;
    }
  }

  .calendar {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.7rem;
    font-size: 0.8rem;

    .weekdays {
      color: gray;

      th {
        padding-top: 0.5rem;
        padding-bottom: 0.7rem;
        width: 14.28%;
        border-bottom: 2px solid lightgray;
      }
    }

    .days {
      .day {
        width: 14.28%;
        text-align: center;
        padding: 0.2rem;

        &.other-month {
          color: gray;
        }

        &.today {
          position: relative;

          &::after {
            content: '';
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: inline-block;
            position: absolute;
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 50%;
            background-color: lightgray;
            z-index: -1;
          }
        }

        &.sun {
          color: red;
        }

        &.sat {
          color: blue;
        }
      }
    }
  }
`
export default Calendar
