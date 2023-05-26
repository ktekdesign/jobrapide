import React, { memo } from 'react'

const TAB_ITEMS = ['Emplois par secteur', 'Emplois par région']

const FooterTab = ({
  deferredActive,
  getActive,
  isPending,
  items = TAB_ITEMS,
}) => (
  <ul data-loading={isPending} data-active={deferredActive} className="tab">
    {items?.map((item, key) => (
      <li
        data-active={deferredActive === key}
        data-order={key}
        onClick={getActive}
        key={key}
      >
        {item}
      </li>
    ))}
  </ul>
)

export default memo(FooterTab)
