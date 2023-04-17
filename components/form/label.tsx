import React, { memo } from 'react'

const Label = ({ title, ...props }) => (
  <label className="form-label" htmlFor="grid-state" {...props}>
    {title}
  </label>
)

export default memo(Label)
