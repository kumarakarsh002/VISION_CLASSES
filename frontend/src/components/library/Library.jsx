import React from 'react'
import styles from '../library/Library.module.css'
// import { FaBook } from "react-icons/fa";
import {
  FaBook,
  FaFilePdf,
  FaEye,
  FaDownload
} from "react-icons/fa";
import contentdata from '../../../../backend/data/content.json'



const Content = ({studyclass, topic, type, pdf}) => {
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
          <p>Class: {studyclass}</p>
          <h4>Topic: {topic}</h4>
        </div>

        <div className={styles.contentbottom}>
          <span className={styles.pdf}>
            <FaFilePdf /> {type}
          </span>

          <div className={styles.actions}>
            <button
              onClick={() => window.open(pdf, "_blank")}
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
        {contentdata.map((elem) =>{
          return(
            <Content key={elem.id} studyclass={elem.class} topic={elem.topic} type={elem.type} pdf={elem.pdf}/>
          )
        })}
      </div>
    </div>
  )
}

export default Library