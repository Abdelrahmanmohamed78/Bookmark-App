"use client"
import React, { useState } from "react";
import styles from "./questions.module.css";
import MainHeader from "./main-header";
import QuestionsDetails from "./questionsDetails";
import MainBtn from "./main-btn";
function Questions() {
  return (
    <section className={styles.questionsHolder}>
      <div className="container">
        <MainHeader>
          <h3>Frequently asked questions</h3>
          <p>
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </MainHeader>
        <QuestionsDetails></QuestionsDetails>
        <MainBtn>More Info</MainBtn>
      </div>
    </section>
  );
}

export default Questions;
