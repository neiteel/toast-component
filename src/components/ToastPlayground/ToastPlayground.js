import React from 'react'

import { ToastContext } from '../ToastProvider'
import Button from '../Button'
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext)
  const [comment, setComment] = React.useState('')
  const [hasAgreed, setHasAgreed] = React.useState(VARIANT_OPTIONS[0])

  function handleSubmit(event) {
    event.preventDefault()

    createToast(comment, hasAgreed)

    setComment('')
    setHasAgreed(VARIANT_OPTIONS[0])
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {/* {toggle && (
        <Toast
          comment={comment}
          icon={hasAgreed}
          type={hasAgreed}
          close={close}
        />
      )} */}
      <ToastShelf />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={comment}
                onChange={(event) => {
                  setComment(event.target.value)
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option, index) => {
                return (
                  <label
                    key={`variant-${option}`}
                    htmlFor={`variant-${option}`}
                  >
                    <input
                      id={`variant-${option}`}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={option === hasAgreed}
                      onChange={(event) => {
                        setHasAgreed(event.target.value)
                      }}
                    />
                    {option}
                  </label>
                )
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
