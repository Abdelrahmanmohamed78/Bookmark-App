"use client";
import React, { useState } from "react";
import styles from "./questionsDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowDown19, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";

function QuestionsDetails() {
  let questionsInfo = [
    {
      id: 1,
      title: "What is Bookmark?",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
    },
    {
      id: 2,
      title: "How can i request a new browser?",
      description: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
    },
    {
      id: 3,
      title: "Is there a mobile app?",
      description: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.`,
    },
    {
      id: 4,
      title: "What about other chromium browsers?",
      description: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit. More Info 35,000+ already joined Stay up-to-date with what we’re doing Contact Us Features Pricing Contact`,
    },
  ];
  let [activeQuestion, setActiveQuestion] = useState(null);
  return (
    <ul className={styles.questions}>
      {questionsInfo.map((question) => {
        return (
          <li
            key={question.id}
            className={`${styles.question} ${
              question.id === activeQuestion && styles.show
            }`}
            onClick={() =>
              setActiveQuestion(
                activeQuestion == question.id ? null : question.id
              )
            }
          >
            <div className={styles.title}>
              <h3>{question.title}</h3>
              <span className={styles.arrow}>
                <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
              </span>
            </div>
            <div className={styles.content}>
              <p>{question.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default QuestionsDetails;
