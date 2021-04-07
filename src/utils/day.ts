import dayjs from 'dayjs'

function fullFormatDate(date: Date) {
  return dayjs(date).format('YYYY년 MM월 DD일 (ddd)')
}

function yearMonthFormatDate(date: Date) {
  return dayjs(date).format('YYYY년 M월')
}

function datePlus(date: Date, type: dayjs.OpUnitType) {
  return dayjs(date).add(1, type)
}

function dateMinus(date: Date, type: dayjs.OpUnitType) {
  return dayjs(date).subtract(1, type)
}

export { fullFormatDate, yearMonthFormatDate, datePlus, dateMinus }
