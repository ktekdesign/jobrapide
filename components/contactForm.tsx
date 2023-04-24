import React, { memo, useState } from 'react'
import Button from '@components/form/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { outputErrors } from '@utils/outputErrors'
import Label from './form/label'
import Alert from './alert'

type Inputs = {
  name: string
  email: string
  number: string
  subject: string
  text: string
}

const ContactForm = () => {
  const [showAlert, setShowAlert] = useState('sucess')
  const [alertMessage, setAlertMessage] = useState('')
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    try {
      axios.post('/api/contact/', data)
      setAlertMessage('Nous vous contacterons dans les plus brefs délais')
      setShowAlert('success')
      setTimeout(() => setShowAlert('hidden'), 10000)
      reset({
        name: '',
        email: '',
        number: '',
        subject: '',
        text: '',
      })
    } catch (error) {
      setAlertMessage('Une erreur est survenue')
      setShowAlert('error')
      return outputErrors(error)
    }
  }

  return (
    <form className="border p-4" onSubmit={handleSubmit(onSubmit)}>
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
      <Button
        id="send-contact"
        label="Envoi du formulaire de contact"
        type="submit"
      >
        Envoyer
      </Button>
      <Alert show={showAlert} message={alertMessage} />
    </form>
  )
}

export default memo(ContactForm)
