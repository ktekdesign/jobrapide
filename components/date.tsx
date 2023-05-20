import { parseISO } from 'date-fns'
import React, { FC, memo, useContext } from 'react'
import Translate from './translate'
import { TranslateContext } from '@context/translateContext'

const Date: FC<{
  date: string
  className?: string
}> = ({ date, className }) => {
  const { lang } = useContext(TranslateContext)
  return (
    <p className={className ?? ''}>
      <span>
        <Translate text="Publié" /> :&nbsp;
        <time dateTime={date} className="text-primary">
          {Intl.DateTimeFormat(lang, { dateStyle: 'long' }).format(
            date && parseISO(date)
          )}
        </time>
      </span>
    </p>
  )
}

export default memo(Date)
