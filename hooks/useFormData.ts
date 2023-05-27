import { fetchData } from '@utils/fetchData'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

function useFormData<T>(url, initialData = null) {
  const { register, handleSubmit, reset } = useForm<T>()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const onSubmit: SubmitHandler<T> = (data) => {
    fetchData({ url, data, method: 'POST' })
      .then((response) => {
        reset(initialData)
        setError(null)
        setData(response)
      })
      .catch(() => setError('error'))
  }

  return { data, error, handleSubmit: handleSubmit(onSubmit), register }
}

export default useFormData
