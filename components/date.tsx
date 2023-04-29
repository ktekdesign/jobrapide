import ComponentsProps from '@utils/interfaces/components'
import { isEmpty } from '@utils/manipulateArray'
import { parseISO } from 'date-fns'
import React, { FC, memo } from 'react'

interface DateContainerProps extends ComponentsProps {
  date?: string
}

const Date: FC<DateContainerProps> = ({ date, className }) =>
  isEmpty(date) ? (
    <></>
  ) : (
    <p className={className}>
      <span>
        Publié :&nbsp;
        <time dateTime={date} className="text-primary">
          {Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(
            parseISO(date)
          )}
        </time>
      </span>
    </p>
  )

export default memo(Date)
