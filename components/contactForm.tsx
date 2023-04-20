import React, { memo } from 'react'
import Input from '@components/form/input'
import TextArea from '@components/form/textarea'
import Button from '@components/form/Button'

const ContactForm = () => (
  <div className="border p-4">
    <Input id="first-name" label="Nom" />
    <Input id="email" type="email" label="Email" />
    <Input id="phone" type="tel" label="Téléphone" />
    <TextArea id="message" label="Message"></TextArea>
    <Button id="send-contact" type="submit">
      Envoyer
    </Button>
  </div>
)

export default memo(ContactForm)
