import { isEmpty } from '@utils/manipulateArray'
import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'
import useSWR from 'swr'

function useFormData<T>(
  url,
  initialData = null
): {
  data: { status: string; message: string }
  isLoading: boolean
  handleSubmit: () => Promise<void>
  register: UseFormRegister<T>
} {
  const { register, handleSubmit, reset } = useForm<T>()
  const [formData, setFormData] = useState(null)
  const onSubmit: SubmitHandler<T> = (data) => setFormData(data)

  const fetcher = () =>
    axios.post(url, formData).then((response) => {
      setTimeout(() => {
        setFormData(null)
      }, 10000)

      reset(initialData)
      return response.data
    })

  const { data, isLoading } = useSWR(!isEmpty(formData) ? url : null, fetcher)

  return { data, isLoading, handleSubmit: handleSubmit(onSubmit), register }
}

export default useFormData
