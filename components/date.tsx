import { parseISO } from 'date-fns'
import React, { memo } from 'react'

const Date = ({ dateString }) => {
  const date = parseISO(dateString)
  return (
    <span>
      Publié :&nbsp;
      <time dateTime={dateString} className="text-primary">
        {Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(date)}
      </time>
    </span>
  )
}

export default memo(Date)
