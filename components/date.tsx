import { parseISO } from 'date-fns'
import React, { FC, memo } from 'react'

const Date: FC<{
  date: string
  className?: string
}> = ({ date, className }) => (
  <p className={className ?? ''}>
    <span>
      Publié :&nbsp;
      <time dateTime={date} className="text-primary">
        {Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(
          date && parseISO(date)
        )}
      </time>
    </span>
  </p>
)

export default memo(Date)
