import React, { memo } from 'react'
import Label from '@components/form/label'
import Input from '@components/form/input'

const ContactForm = () => {
  return (
    <div className="border p-4">
      <div className="row">
        <Label title="Nom" />
        <Input id="grid-first-name" />
      </div>
      <div className="row">
        <Label title="email" type="email" />
        <Input id="grid-first-name" />
      </div>
      <div className="row">
        <Label title="Téléphone" />
        <Input id="grid-first-name" />
      </div>
      <div className="row">
        <Label title="Message" />
        <textarea
          className="form-input"
          id="grid-first-name"
          rows={5}
        ></textarea>
      </div>
    </div>
  )
}

export default memo(ContactForm)
