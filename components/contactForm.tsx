import React, { memo } from 'react'
import Label from '@components/form/label'
import Input from '@components/form/input'

const ContactForm = () => {
  return (
    <div className="border p-4">
      <div className="row">
        <Label title="Nom" htmlFor="first-name" />
        <Input id="first-name" />
      </div>
      <div className="row">
        <Label title="email" htmlFor="email" />
        <Input id="email" type="email" />
      </div>
      <div className="row">
        <Label title="Téléphone" htmlFor="phone" />
        <Input id="phone" />
      </div>
      <div className="row">
        <Label title="Message" htmlFor="message" />
        <textarea className="form-input" id="message" rows={5}></textarea>
      </div>
    </div>
  )
}

export default memo(ContactForm)
