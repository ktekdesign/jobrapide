import { Children, memo, startTransition, useEffect, useState } from 'react'

const MagicSlide = ({ children, items = 1, interval = 5000 }) => {
  const initItems = []
  for (let index = 0; index < items; index++) {
    initItems.push(index)
  }
  const [active, setActive] = useState(initItems)

  const total = Children.count(children)
  useEffect(() => {
    setInterval(() => {
      const actives = []
      const last = active[active.length - 1] + 1
      for (let index = last; index < last + items; index++) {
        actives.push(index % total)
      }
      setActive(actives)
    }, interval)
  }, [interval, items, total, active])

  return (
    <div className="flex gap-4">
      {active?.map((item, key) => (
        <div key={key} className="flex-1">
          {Children.toArray(children)[item]}
        </div>
      ))}
    </div>
  )
}

export default memo(MagicSlide)
