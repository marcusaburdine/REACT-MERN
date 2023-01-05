import { useState } from 'react'
import styles from './PokemonForm.module.css'

export default function Form(props) {
  const [formData, setFormData] = useState({
    searchterm: ""
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.getPokemon(formData.searchterm)
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  )
};