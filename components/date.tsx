import { parseISO } from 'date-fns'
import { FC, memo } from 'react'

const Date: FC<{
  date: string
  className?: string
}> = ({ date, className }) => (
  <p {...{ className }}>
    Publié :&nbsp;
    <time dateTime={date} className="text-primary">
      {date &&
        Intl.DateTimeFormat('fr', { dateStyle: 'long' }).format(parseISO(date))}
    </time>
  </p>
)

export default memo(Date)
