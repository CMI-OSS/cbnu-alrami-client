import styled from 'styled-components'

const Calendar = styled.div`
  .selector {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 1.25rem;
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

    .weekdays {
      color: gray;
      border-bottom: 1px solid gray;

      th {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        width: 14.28%;
      }
    }

    .style {
      margin-bottom: 0.5rem;
    }

    .days {
      .day {
        width: 14.28%;
        text-align: center;
        padding: 0.5rem;

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
            width: 2rem;
            height: 2rem;
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
