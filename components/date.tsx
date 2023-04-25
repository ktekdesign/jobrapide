import { isEmpty } from '@utils/manipulateArray'
import { parseISO } from 'date-fns'
import React, { FC, HTMLAttributes, memo } from 'react'

interface DateContainerProps extends HTMLAttributes<HTMLElement> {
  dateString?: string
}

const Date: FC<DateContainerProps> = ({ dateString, ...props }) => {
  if (isEmpty(dateString)) return <></>

  return (
    <p {...props}>
      <span>
        Publié :&nbsp;
        <time dateTime={dateString} className="text-primary">
          {Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(
            parseISO(dateString)
          )}
        </time>
      </span>
    </p>
  )
}

export default memo(Date)
