import { Trash } from 'phosphor-react'
import { Checkbox } from './Checkbox.tsx'
import styles from './Task.module.css'


export function Task() {
  return (
    <li className={styles.task}>
      <Checkbox />
      <span className={styles.content}>
        <p> Lavar a roupa da Sara</p>
      </span>
      <button className={styles.trashButton}>
        <Trash className={styles.trashIcon} size={24} />
      </button>
    </li>
  )
} 