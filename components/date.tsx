import { memo } from 'react'

const DateComponent = ({ date, ...props }) => (
  <p {...props}>
    Publié :&nbsp;
    <time dateTime={date} className="text-primary">
      {date &&
        Intl.DateTimeFormat('fr', { dateStyle: 'long' }).format(
          Date.parse(date)
        )}
    </time>
  </p>
)

export default memo(DateComponent)
