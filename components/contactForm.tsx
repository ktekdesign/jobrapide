import React, { memo } from 'react'
import Button from '@components/form/Button'
import Alert from '@components/alert'
import useFormData from '@hooks/useFormData'
import Input from '@components/form/input'
import Textarea from '@components/form/textarea'

type Inputs = {
  name: string
  email: string
  number: string
  subject: string
  text: string
}

const initialData = {
  name: '',
  email: '',
  number: '',
  subject: '',
  text: '',
}

const ContactForm = () => {
  const { data, error, handleSubmit, register } = useFormData<Inputs>(
    '/api/contact',
    initialData
  )

  return (
    <form className="border p-4" onSubmit={handleSubmit}>
      <Input label="Nom" {...register('name', { required: true })} />
      <Input
        label="Email"
        type="email"
        {...register('email', { required: true })}
      />
      <Input label="Téléphone" type="tel" {...register('number')} />
      <Input label="Sujet" {...register('subject')} />
      <Textarea
        name="text"
        label="Message"
        rows={5}
        placeholder="Votre message..."
        {...register('text')}
      />

      {(data || error) && <Alert message={data?.message} error={error} />}
      <Button
        id="send-contact"
        label="Envoi du formulaire de contact"
        type="submit"
      >
        Envoyer
      </Button>
    </form>
  )
}

export default memo(ContactForm)
