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
      </div>
  )
}

export default App
