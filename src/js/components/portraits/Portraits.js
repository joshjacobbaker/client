import React from "react"

// Styles
import styles from "./_Portraits.module.scss"

const Portraits = () => {
  return (
    <div className={styles.portraits}>
      <div className={styles.portrait1}>1</div>
      <div className={styles.portrait2}>2</div>
      <div className={styles.portrait3}>3</div>
      <div className={styles.portrait4}>4</div>
    </div>
  )
}

export default Portraits

// https://betterprogramming.pub/build-an-image-slider-with-react-es6-264368de68e4
