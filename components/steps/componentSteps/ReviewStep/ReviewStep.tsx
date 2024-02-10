import React from 'react'
import styles from "./ReviewStep.module.css"
import ModalCV from '../modalCV/ModalCV'
const ReviewStep = () => {
  return (
    <div className={styles.body}>
      <div className={styles.ModalCV}>

        <div className={styles.paraghrp}>
        <h3>
          CV ATS
        </h3>
          <span>
            Sistema de Seguimiento de Candidatos, es un tipo de software de gestión de candidaturas utilizado por los reclutadores y empleadores de las empresas.
          </span>
        </div>


        <ModalCV />


      </div>
    </div>
  )
}

export default ReviewStep
