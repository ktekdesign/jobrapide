import React, { memo } from 'react'
import Button from '@components/form/Button'
import Label from '@components/form/label'
import Alert from '@components/alert'
import Loading from '@components/loading'
import useFormData from '@hooks/useFormData'

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
  const { data, handleSubmit, register } = useFormData<Inputs>(
    '/api/contact',
    initialData
  )

  return (
    <form className="border p-4" onSubmit={handleSubmit}>
      <div className="row">
        <Label htmlFor="name">Nom</Label>
        <input
          id="name"
          name="name"
          className="form-input"
          {...register('name', { required: true })}
        />
      </div>
      <div className="row">
        <Label htmlFor="email">Email</Label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          {...register('email')}
        />
      </div>
      <div className="row">
        <Label htmlFor="number">Téléphone</Label>
        <input
          id="number"
          name="number"
          type="tel"
          className="form-input"
          {...register('number')}
        />
      </div>
      <div className="row">
        <Label htmlFor="subject">Sujet</Label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="form-input"
          {...register('subject')}
        />
      </div>
      <div className="row">
        <Label htmlFor="text">Message</Label>
        <textarea
          id="text"
          name="text"
          rows={5}
          className="form-input"
          placeholder="Votre message..."
          {...register('text')}
        ></textarea>
      </div>
      <Loading data={{ show: data?.status, message: data?.message }}>
        <Alert />
        <Button
          id="send-contact"
          label="Envoi du formulaire de contact"
          type="submit"
        >
          Envoyer
        </Button>
      </Loading>
    </form>
  )
}

export default memo(ContactForm)
