import { parseISO } from 'date-fns'
import React, { FC, memo } from 'react'

const Date: FC<{
  date: string
  className?: string
}> = ({ date, className }) => (
  <p {...{ className }}>
    Publié :&nbsp;
    <time dateTime={date} className="text-primary">
      {Intl.DateTimeFormat('fr', { dateStyle: 'long' }).format(
        date && parseISO(date)
      )}
    </time>
  </p>
)

export default memo(Date)
