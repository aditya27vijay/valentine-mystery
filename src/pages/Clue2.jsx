import { useState } from "react";
import "../styles/letter.css";
import { useNavigate } from "react-router-dom";


export default function Clue2() {
  // ✏️ EDIT YOUR LETTER HERE
  const letterParts = [
    "I never expected",
    "you",
    "to become",
    "the place",
    "where my heart",
    "feels safest.",
  ];

  const navigate = useNavigate();


  const [revealed, setRevealed] = useState(
    Array(letterParts.length).fill(false)
  );

  const revealWord = (index) => {
    const updated = [...revealed];
    updated[index] = true;
    setRevealed(updated);
  };

  const allRevealed = revealed.every(Boolean);


  return (
    <div className="letter-container">
      <div className="letter-card">
        <p className="letter-title">Private Letter</p>

        <p className="letter-text">
          {letterParts.map((part, index) => (
            <span key={index}>
              {revealed[index] ? (
                <span className="letter-word">{part}</span>
              ) : (
                <button
                  className="letter-blank"
                  onClick={() => revealWord(index)}
                >
                  ▢▢▢
                </button>
              )}{" "}
            </span>
          ))}
        </p>

        {allRevealed && (
          <>
            <p className="letter-reveal">
              Some truths only appear when you take your time 💜
            </p>

            <button className="letter-next-btn" onClick={() => navigate("/clue3")}>
  Continue
</button>

          </>
        )}
      </div>
    </div>
  );
}
