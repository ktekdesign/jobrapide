import { memo } from 'react'
import Select from './form/select'

const LangSelector = ({ onChange }) => (
  <div className="max-w-sm fixed z-30 right-5 top-20">
    <Select
      onChange={onChange}
      title="Choisir une Langue"
      options={[
        { id: 'fr', name: 'Français' },
        { id: 'en', name: 'English' },
      ]}
    />
  </div>
)

export default memo(LangSelector)
