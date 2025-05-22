import React from 'react'
import Image from 'next/image'
import styles from "./Cv.module.scss"
import Link from 'next/link'

const Cv = () => {
  return (
    <div className={styles.cv} >
        <h3>C v</h3>
        <div className={styles.imgwrapper}>
        <Image src="/assets/img/olarotimicv.png" width="300" objectFit="cover" height="200" layout="responsive" alt='cv'/>
        </div>

        <Link href="mailto:ademolarotimi2000@gmail.com">Contact Me</Link>
    </div>
  )
}

export default Cv