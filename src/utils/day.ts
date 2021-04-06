import dayjs from 'dayjs'

function fullFormatDate(date: Date) {
  return dayjs(date).format('YYYY년 MM월 DD일 (ddd)')
}

function yearMonthFormatDate(date: Date) {
  return dayjs(date).format('YYYY년 M월')
}

export { fullFormatDate, yearMonthFormatDate }
