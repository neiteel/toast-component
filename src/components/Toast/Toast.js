import React from 'react'

import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'

import { ToastContext } from '../ToastProvider'
import VisuallyHidden from '../VisuallyHidden'

import styles from './Toast.module.css'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ id, comment, icon, type }) {
  const { close } = React.useContext(ToastContext)

  const IconComponent = ICONS_BY_VARIANT[icon]
  // console.log(id)

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.iconContainer}>
        <IconComponent />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{icon} -</VisuallyHidden>
        {comment}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => close(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  )
}

export default Toast
