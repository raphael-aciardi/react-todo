import {Header} from "./componetnts/Header.tsx";
import { Button } from "./componetnts/Button.tsx";
import './App.module.css'
import './global.css'
import { Input } from "./componetnts/Input.tsx";
import styles from './App.module.css'
function App() {
  return (
      <div className={styles.appContainer}>
        
        <div className={styles.headerConteiner}>
          <Header />
          <div className={styles.inputContainer}>
            <Input />
            <Button />
          </div>
        </div>

        <div className={styles.tasksContainer}>
          <header>
            <div className={styles.taskNumberContainer}>
              <span className={styles.createdTasks}>Tarefas criadas</span>
              <span className={styles.taskNumber}>0</span>
            </div>

            <div className={styles.taskNumberContainer}>
              <span className={styles.concludedTasks}>Concluídas</span>
              <span className={styles.taskNumber}>0</span>
            </div>
          </header>
          <ul>
            <li>Arros</li>
          </ul>
        </div>
        
      </div>
      
  )
}

export default App
