import React, { useEffect, useRef } from "react";
import styles from "./FadeInCards.module.css";
import reactImage from "../../assets/react.png"; // Example image
import QRCodeGenerator from "../../assets/QR_Code_Generator.png"; // Example image
import LIGHAR_TECH from "../../assets/LIGHAR_TECH.png"; // Example image
import calculator from "../../assets/calculator.png"; // Example image
import snakeGame from "../../assets/SNAHE_GAME.png"; // Example image
import kanbenLogo from "../../assets/kanbenLogo.png"; // Example image

const creations = [
  {
    id: 1,
    title: "CALCULATOR",
    description: "its a calculator.",
    image: calculator,
    link: "https://shibsundarchakrabory.github.io/CALCULATOR/",
  },

  {
    id: 2,
    title: "SNAKE GAME",
    description: "a Snake game i created using javascript.",
    image: snakeGame,
    link: "https://shibsundarchakrabory.github.io/LOGIC_BUILDING_PROJECT_1/",
  },
  {
    id: 3,
    title: " QR Code Generator",
    description:
      "You enter the data select the cr code colors press enter and done.",
    image: QRCodeGenerator,
    link: "https://shibsundarchakrabory.github.io/qr_Code_genarator/",
  },
  {
    id: 4,
    title: "kenben Board",
    description: "A kanben board i created using html css and javascript.",
    image: kanbenLogo,
    link: "https://shibsundarchakrabory.github.io/LOGIC_BUILDING_PROJECT_2/",
  },

  {
    id: 5,
    title: "LIGHAR-TECH",
    description: "A Company i site i created.",
    image: LIGHAR_TECH,
    link: "https://lighartech00.github.io/LIGHAR-TECH/",
  },
  {
    id: 6,
    title: "RTTS",
    description: "A text to speach software.",
    image: reactImage,
    link: "#",
  },
  
];

function FadeInCards() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className={styles.creationsContainer}>
      <h2 className={styles.creationsTitle}>My Creations</h2>
      <div className={styles.cardsGrid}>
        {creations.map((creation, index) => (
          <div
            key={creation.id}
            className={styles.card}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img
              src={creation.image}
              alt={creation.title}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{creation.title}</h3>
              <p className={styles.cardDescription}>{creation.description}</p>
              <a
                href={creation.link}
                className={styles.cardLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FadeInCards;
