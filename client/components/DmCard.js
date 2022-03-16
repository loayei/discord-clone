import Image from 'next/image'
import styles from '../styles/dmCard.module.css'

const DmCard = ({ name, status, avatar, id }) => {
  const changeUrl = () => {}
  return (
    <div className={styles.dmCard} onClick={changeUrl}>
      <div className={styles.dmAvatarContainer}>
        <Image
          height={40}
          width={40}
          src={avatar}
          alt="name"
          className={styles.dmAvatar}
        />
        <div className={styles.dmCardStatus} id={status} />
      </div>
      <p className={styles.dmCardName}>{name}</p>
    </div>
  )
}

export default DmCard
