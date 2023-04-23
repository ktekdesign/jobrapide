import React, { memo } from 'react'
import Input from '@components/form/input'
import TextArea from '@components/form/textarea'
import Button from '@components/form/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { outputErrors } from '@utils/outputErrors'

type Inputs = {
  name: string
  email: string
  number: string
  text: string
}

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const contact = {
        ...data,
      }

      await axios.post('/api/contact/', contact)

      reset({
        name: '',
        email: '',
        number: '',
        text: '',
      })
    } catch (error) {
      return outputErrors(error)
    }
  }
  console.log(register('text', { required: true }))
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border p-4">
        <Input label="Nom" {...register('name', { required: true })} />
        <Input
          type="email"
          label="Email"
          {...register('email', { required: true })}
        />
        <Input type="tel" label="Téléphone" {...register('number')} />
        <TextArea
          label="Message"
          placeholder="Votre message..."
          {...register('text', { required: true })}
        />
        <Button id="send-contact" type="submit">
          Envoyer
        </Button>
      </div>
    </form>
  )
}

export default memo(ContactForm)
