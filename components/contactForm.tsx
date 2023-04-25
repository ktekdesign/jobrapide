import React, { memo, useState } from 'react'
import Button from '@components/form/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import Label from '@components/form/label'
import Alert from '@components/alert'
import useSWR from 'swr'
import { isEmpty } from '@utils/manipulateArray'
import Loading from '@components/loading'

type Inputs = {
  name: string
  email: string
  number: string
  subject: string
  text: string
}

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const [contactData, setContactData] = useState(null)
  const fetcher = (url) =>
    axios.post(url, contactData).then((response) => {
      reset({
        name: '',
        email: '',
        number: '',
        subject: '',
        text: '',
      })
      setTimeout(() => setContactData(null), 10000)

      return response.data
    })

  const { data, isLoading } = useSWR(
    !isEmpty(contactData) ? '/api/contact' : null,
    fetcher
  )
  console.log(data)
  const onSubmit: SubmitHandler<Inputs> = (data) => setContactData(data)

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
      <Loading
        data={{ show: data?.status, message: data?.message }}
        loading={isLoading}
      >
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
