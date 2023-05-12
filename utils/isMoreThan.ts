const isMoreThan = (date, cacheTime = 86400000) => {
  if (!date) return true
  const dt_date = new Date(date)
  const now = new Date()

  const date_timeStamp = dt_date.getTime()
  const now_timeStamp = now.getTime()

  return now_timeStamp - date_timeStamp > cacheTime
}

export default isMoreThan
