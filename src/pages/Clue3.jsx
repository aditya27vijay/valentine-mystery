import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/memory.jpeg";
import "../styles/photoReveal.css";

export default function Clue3() {
  const navigate = useNavigate();

  // ✏️ EDIT QUESTIONS HERE
  const questions = [
    {
      question: "Where was this moment from?",
      options: ["Toscano", "A random place", "Soy Soi"],
      correctIndex: 2,
    },
    {
      question: "What were we feeling here?",
      options: ["Nothing special", "Comfort", "Pure happiness"],
      correctIndex: 2,
    },
    {
      question: "Why does this moment matter to me?",
      options: ["It doesn’t", "It was fun", "Because it has you"],
      correctIndex: 2,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [blurLevel, setBlurLevel] = useState(20); // higher = more blur

  const handleAnswer = (index) => {
    if (index === questions[current].correctIndex) {
      setFeedback("💜 That’s right");

      setTimeout(() => {
        setFeedback("");
        setBlurLevel((prev) => Math.max(prev - 7, 0));

        if (current < questions.length - 1) {
          setCurrent(current + 1);
        } else {
          setBlurLevel(0);
        }
      }, 800);
    } else {
      setFeedback("Almost… try again 💗");
    }
  };

  const finished = blurLevel === 0;

  return (
    <div className="photo-container">
      <div className="photo-card">
        <p className="photo-title">Clue 3</p>

        <div className="photo-wrapper">
          <img
            src={image}
            alt="Memory"
            className="photo"
            style={{ filter: `blur(${blurLevel}px)` }}
          />
        </div>

        {!finished ? (
          <>
            <p className="photo-question">
              {questions[current].question}
            </p>

            <div className="photo-options">
              {questions[current].options.map((opt, index) => (
                <button
                  key={index}
                  className="photo-option"
                  onClick={() => handleAnswer(index)}
                >
                  {opt}
                </button>
              ))}
            </div>

            {feedback && <p className="photo-feedback">{feedback}</p>}
          </>
        ) : (
          <>
            <p className="photo-reveal">
              This moment mattered because it was ours 💖
            </p>

            <button
              className="photo-next-btn"
              onClick={() => navigate("/final")}
            >
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
}
