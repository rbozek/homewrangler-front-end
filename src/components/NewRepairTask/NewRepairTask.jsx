// npm imports
import { useState } from 'react'

// css
import styles from './NewRepairTask.module.css'

const NewRepairTask = (props) => {
  const [formData, setFormData] = useState({ task: '' })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddRepairTask(formData)
    setFormData({ task: '' })
  }

  return ( 
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea 
        required
        name="task"
        value={formData.task}
        placeholder="Add a Task"
        onChange={handleChange}
      />
      <button type="submit">🛠️✨</button>
    </form>
  )
}

export default NewRepairTask

