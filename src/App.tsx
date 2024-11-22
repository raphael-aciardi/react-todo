import {Header} from "./componetnts/Header.tsx";
import './App.module.css'
import './global.css'
import { Input } from "./componetnts/Input.tsx";
import styles from './App.module.css'
function App() {

  return (
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.inputContainer}>
          <Input />
        </div>
      </div>
  )
}

export default App
