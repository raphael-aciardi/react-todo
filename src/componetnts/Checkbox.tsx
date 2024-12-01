import { CheckCircle, Circle } from "phosphor-react";
import styles from './Checkbox.module.css'

export function Checkbox() {
  return (
    <button className={styles.buttonContainer} >
      <Circle className={styles.checkIcon} size={24} />
    </button>
  )
}