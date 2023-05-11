const isMoreThanOneDay = (date: string) => {
  if (!date) return true
  const dt_date = new Date(date)
  const now = new Date()

  const date_timeStamp = dt_date.getTime()
  const now_timeStamp = now.getTime()

  return now_timeStamp - date_timeStamp > 86400000
}

export default isMoreThanOneDay
