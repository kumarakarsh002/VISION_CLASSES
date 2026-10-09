import React from 'react'
import styles from '../library/Library.module.css'
// import { FaBook } from "react-icons/fa";
import {
  FaBook,
  FaFilePdf,
  FaEye,
  FaDownload
} from "react-icons/fa";
import content from '../../../../backend/data/content.json'



const Content = () => {
  return (
    <>

      <div className={styles.content}>
        <div className={styles.contenttop}>
          <div className={styles.logo}>
            <FaBook />
          </div>
          <span>Notes</span>
        </div>

        <div className={styles.contentmiddle}>
          <p>Class: 12th</p>
          <h4>Topic: Mathematics</h4>
        </div>

        <div className={styles.contentbottom}>
          <span className={styles.pdf}>
            <FaFilePdf /> PDF
          </span>

          <div className={styles.actions}>
            <button
              onClick={() => window.open("/notes/notes.pdf", "_blank")}
              title="View PDF"
            >
              <FaEye /> View
            </button>
            <button><FaDownload /></button>
          </div>
        </div>
      </div>

    </>
  )
}



const Library = () => {
  return (
    <div className={styles.library}>
      <div className={styles.header}>
        <div className={styles.badge}>📘 STUDY LIBRARY</div>
        <h1>VISION CLASSES</h1>
        <p>A Library for Notes & Questions</p>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.contentdiv}>
        <Content />
        <Content />
      </div>
    </div>
  )
}

export default Library