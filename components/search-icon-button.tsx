import { memo } from 'react'
import Button from '@components/form/Button'
import SearchIcon from '/public/images/search.svg'

const SearchIconButton = (props) => (
  <li className="reveal">
    <Button {...props} label="Faire une recherche">
      <SearchIcon className="icon" />
    </Button>
  </li>
)

export default memo(SearchIconButton)
