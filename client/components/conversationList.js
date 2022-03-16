import styles from '../styles/conversationList.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import friends from '../assets/icons/friends.svg'
import nitro from '../assets/icons/nitro.svg'

import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'
import DmCard from './DmCard'

const dummyDms = [
  {
    roomId: 1,
    name: 'Satoshi',
    avatar: avatar1,
  },
  {
    roomId: 2,
    name: 'Vitalik',
    avatar: avatar2,
  },
  {
    roomId: 3,
    name: 'Kevin',
    avatar: avatar3,
  },
  {
    roomId: 4,
    name: 'Mark',
    avatar: avatar4,
  },
]

const conversationList = () => {
  const [dms, setDms] = useState(dummyDms)
  return (
    <div className={styles.conversations}>
      <div className={styles.conversationListTop}>
        <input type="search" placeholder="Start/Find a chat" />
      </div>
      <div className={styles.conversationsContainer}>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              height={23}
              width={23}
              src={friends}
              alt="friends"
              className={styles.svg}
            />
          </div>
          <p>Friends</p>
        </div>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <Image
              height={23}
              width={23}
              src={nitro}
              alt="nitro"
              className={styles.svg}
            />
          </div>
          <p>Nitro</p>
        </div>
        <div className={styles.dmTitle}>Direct Messages</div>
        {dms.map((dm, index) => (
          <DmCard
            key={index}
            name={dm.name}
            id={dm.id}
            avatar={
              dm.avatar ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
            }
            status="online"
          />
        ))}
      </div>
    </div>
  )
}

export default conversationList
