import React from 'react'
import styles from "./Loader.module.css";

const Loader = () => {
  return (
        <div className='position-absolute top-50 start-50 translate-middle'>
            <div className={styles['loader--ripple']}>
            <div></div>
            <div></div>
            </div>
        </div>
  )
}

export default Loader