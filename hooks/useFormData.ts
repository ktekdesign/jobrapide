import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'

function useFormData<T>(
  url,
  initialData = null
): {
  data: { status: string; message: string }
  handleSubmit: () => Promise<void>
  register: UseFormRegister<T>
} {
  const { register, handleSubmit, reset } = useForm<T>()
  const [data, setData] = useState(null)

  const onSubmit: SubmitHandler<T> = (data) => {
    axios.post(url, data).then((response) => {
      reset(initialData)
      return setData(response.data)
    })
  }

  return { data, handleSubmit: handleSubmit(onSubmit), register }
}

export default useFormData
