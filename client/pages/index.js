import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        conversationlist chat view
        {/* chatlist */}
        {/* chatview */}
      </div>
    </div>
  )
}
