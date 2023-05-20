import Select from './form/select'

const LangSelector = ({ onChange }) => {
  return (
    <div className="max-w-sm fixed z-30 right-5 top-20">
      <Select
        onChange={onChange}
        label="Choisir une Langue"
        options={[
          { id: 'fr', name: 'Français' },
          { id: 'en', name: 'English' },
        ]}
      />
    </div>
  )
}

export default LangSelector
