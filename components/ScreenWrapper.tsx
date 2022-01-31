import React from 'react'
import styles from '../styles/ScreenWrapper.module.scss'

const ScreenWrapper: React.FC = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>
}

export default ScreenWrapper
