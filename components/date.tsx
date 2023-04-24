import { isEmpty } from '@utils/manipulateArray'
import { parseISO } from 'date-fns'
import React, { memo } from 'react'

const Date = ({ dateString }) => {
  if (isEmpty(dateString)) return <></>

  return (
    <span>
      Publié :&nbsp;
      <time dateTime={dateString} className="text-primary">
        {Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(
          parseISO(dateString)
        )}
      </time>
    </span>
  )
}

export default memo(Date)
