import dayjs from 'dayjs'

export interface calendarProps {
  date: number
  day: number
  month: number
  year: number
}

function calendar(date: Date): calendarProps[][] {
  const fullMonth: calendarProps[] = []
  const parsingFullMonth: calendarProps[][] = Array.from(Array(6), () => Array(7))
  const month = date.getMonth()
  const year = date.getFullYear()

  // 이번달 마지막 날
  const lastDateOfThisMonth = new Date(dayjs(date).endOf('month').format()).getDate()
  // 저번달 마지막 날
  const lastDateOfLastMonth = new Date(dayjs(date).subtract(1, 'month').endOf('month').format()).getDate()
  // 저번달 마지막 요일
  const lastDayOfLastMonth = new Date(dayjs(date).subtract(1, 'month').endOf('month').format()).getDay()
  // 이번달 첫 요일
  const firstDayOfThisMonth = new Date(dayjs(date).startOf('month').format()).getDay()
  // 이번달 마지막 요일
  const lastDayOfThisMonth = new Date(dayjs(date).endOf('month').format()).getDay()

  // 저번달 구하기
  let dateOfLastMonth = lastDateOfLastMonth - lastDayOfLastMonth
  if (lastDayOfLastMonth !== 6) {
    for (let day = 0; day <= lastDayOfLastMonth; day += 1) {
      fullMonth.push({ date: dateOfLastMonth, day, month: month - 1, year })
      dateOfLastMonth += 1
    }
  }

  // 이번달 구하기
  let dayOfMonth = firstDayOfThisMonth
  for (let dateOfThisMonth = 1; dateOfThisMonth <= lastDateOfThisMonth; dateOfThisMonth += 1) {
    if (dayOfMonth === 7) dayOfMonth = 0
    fullMonth.push({ date: dateOfThisMonth, day: dayOfMonth, month, year })
    dayOfMonth += 1
  }

  // 다음달 구하기
  let dateOfNextMonth = 1
  for (let day = lastDayOfThisMonth + 1; day <= 6; day += 1) {
    fullMonth.push({ date: dateOfNextMonth, day, month: month + 1, year })
    dateOfNextMonth += 1
  }

  let firstIdx = 0
  for (let secondIdx = 0; secondIdx < fullMonth.length; secondIdx += 1) {
    const day = fullMonth[secondIdx]
    parsingFullMonth[firstIdx][day.day] = day
    if (day.day === 6) firstIdx += 1
  }

  return parsingFullMonth
}

export { calendar }
