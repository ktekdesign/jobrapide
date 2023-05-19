import React, { memo, useCallback, useTransition } from 'react'

const FooterTab = ({
  active,
  setActive,
  items = ['Emplois par secteur', 'Emplois par région'],
}) => {
  const [isPending, startTransition] = useTransition()

  const getActive = useCallback(
    (e) =>
      startTransition(() => {
        setActive(Number(e.target.dataset.order))
      }),
    [setActive]
  )

  return (
    <ul
      className={`flex-col${
        (active === 1 && '-reverse') || ''
      } tab lg:flex-row${(isPending && ' bg-dark') || ''}`}
    >
      {items?.map((item, key) => (
        <li
          data-active={active === key}
          data-order={key}
          onClick={getActive}
          key={key}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
export default memo(FooterTab)
