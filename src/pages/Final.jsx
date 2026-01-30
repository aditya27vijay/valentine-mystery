import { useState } from "react";
import confetti from "canvas-confetti";
import "../styles/final.css";

export default function Final() {
  const correctOrder = ["Will", "you", "be", "my", "Valentine?"];

  const [words, setWords] = useState([
    "my",
    "Will",
    "Valentine?",
    "be",
    "you",
  ]);

  const [draggedIndex, setDraggedIndex] = useState(null);
  const [solved, setSolved] = useState(false);
  const [answeredYes, setAnsweredYes] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "70%", left: "50%" });

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDrop = (index) => {
    if (draggedIndex === null) return;

    const newWords = [...words];
    const draggedWord = newWords[draggedIndex];

    newWords.splice(draggedIndex, 1);
    newWords.splice(index, 0, draggedWord);

    setWords(newWords);
    setDraggedIndex(null);

    if (JSON.stringify(newWords) === JSON.stringify(correctOrder)) {
      setSolved(true);
    }
  };

  // 😈 Move NO button randomly (mobile-safe)
  const moveNoButton = () => {
    const top = Math.floor(Math.random() * 60) + 20;
    const left = Math.floor(Math.random() * 60) + 20;

    setNoPosition({
      top: `${top}%`,
      left: `${left}%`,
    });
  };

  // 🎉 CONFETTI BLAST
  const celebrateYes = () => {
    setAnsweredYes(true);

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.4 },
      });
    }, 300);
  };

  return (
    <div className="final-container">
      <div className="final-card">
        {!solved ? (
          <>
            <p className="final-title">Final Question</p>
            <p className="final-instruction">
              Arrange the words to reveal the question 💜
            </p>

            <div className="word-row">
              {words.map((word, index) => (
                <div
                  key={index}
                  className="word-box"
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDrop(index)}
                >
                  {word}
                </div>
              ))}
            </div>
          </>
        ) : !answeredYes ? (
          <>
            <h1 className="final-reveal">
              Will you be my Valentine? 💘
            </h1>

            <div className="answer-buttons">
              <button className="yes-btn" onClick={celebrateYes}>
                YES 💖
              </button>

              <button
                className="no-btn"
                style={{ top: noPosition.top, left: noPosition.left }}
                onClick={moveNoButton}
              >
                NO 🙄
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="final-reveal">She said YES 💖</h1>
            <p className="final-sub">
              You just made me the happiest person ever 🥹
            </p>
          </>
        )}
      </div>
    </div>
  );
}
