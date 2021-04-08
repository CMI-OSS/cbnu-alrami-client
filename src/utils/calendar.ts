import dayjs from 'dayjs'

export interface Week {
  numOfWeek: number
  days: Day[]
}

export interface Day {
  date: number
  day: number
  month: number
  year: number
}

function calendar(date: Date): Week[] {
  const fullMonth: Day[] = []
  const parsingFullMonth: Week[] = Array.from(Array(6), (_, index) => ({
    numOfWeek: index + 1,
    days: Array(7),
  }))
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
    parsingFullMonth[firstIdx].days[day.day] = day
    if (day.day === 6) firstIdx += 1
  }

  return parsingFullMonth
}

function getDayClassName(displayDate: Date, year: number, month: number, date: number, day: number): string {
  const today = new Date()
  if (month !== displayDate.getMonth()) return 'day other-month'
  if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) return 'day today'
  if (day === 6) return 'day sat'
  if (day === 0) return 'day sun'

  return 'day'
}

export { calendar, getDayClassName }
