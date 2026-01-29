import { useState } from "react";
import "../styles/quiz.css";

export default function Clue1() {
  // ✏️ EDIT QUESTIONS HERE
  const questions = [
    {
      question: "What is my favourite thing about you?",
      options: ["Your stinky navel", "Your Voluptuous Ass", "Your gorgeous eyes"],
      correctIndex: 2,
    },
    {
      question: "What is my favourite movie?",
      options: ["Inception", "Interstellar", "Barbie and some princess bs"],
      correctIndex: 1,
    },
    {
      question: "What did you unknowingly steal from me?",
      options: ["My sleep", "My attention", "My heart 💜"],
      correctIndex: 2,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("playing"); 
  // status: "playing" | "failed" | "success"

  const handleOptionClick = (index) => {
    setSelected(index);

    setTimeout(() => {
      const correct = questions[current].correctIndex === index;

      if (!correct) {
        setStatus("failed");
        return;
      }

      // correct answer
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setStatus("success");
      }
    }, 500);
  };

  const resetQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setStatus("playing");
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {status === "playing" && (
          <>
            <p className="quiz-progress">
              Question {current + 1} of {questions.length}
            </p>

            <h2 className="quiz-question">
              {questions[current].question}
            </h2>

            <div className="quiz-options">
              {questions[current].options.map((option, index) => (
                <button
                  key={index}
                  className={`quiz-option ${
                    selected === index ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(index)}
                  disabled={selected !== null}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}

        {status === "failed" && (
          <>
            <h2 className="quiz-question">Almost 💔</h2>
            <p className="quiz-finish">
              That didn’t feel quite right.
              <br />
              Want to try again?
            </p>

            <button className="quiz-next-btn" onClick={resetQuiz}>
              Try Again
            </button>
          </>
        )}

        {status === "success" && (
          <>
            <h2 className="quiz-question">Clue Unlocked 💖</h2>
            <p className="quiz-finish">
              You know me better than anyone.
              <br />
              Let’s move forward.
            </p>

            <button className="quiz-next-btn">
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
}
