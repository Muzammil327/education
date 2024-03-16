// "use client";
// import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";

// interface Question {
//   _id: string;
//   McqsId: number;
//   name: string;
//   opt1: string;
//   opt2: string;
//   opt3: string;
//   opt4: string;
//   correct: string;
// }

// const Quiz = () => {
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(40);
//   const [quizStarted, setQuizStarted] = useState(false); // State to track whether the quiz has started

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/mcqs`;
//         const response = await axios.get<Question[]>(URL);
//         setQuestions(response.data);
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleNextQuestion = useCallback(() => {
//     const correctAnswer = questions[currentQuestionIndex].correct;
//     if (selectedOption === correctAnswer) {
//       setScore(score + 1);
//     }
//     setSelectedOption("");
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     setTimer(40);
//   }, [currentQuestionIndex, questions, score, selectedOption]);

//   // const handleNextQuestion = () => {
//   //   if (currentQuestionIndex < questions.length - 1) {
//   //     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//   //     setTimer(40); // Reset timer for the next question
//   //   } else {
//   //     // Handle end of quiz logic
//   //     console.log("End of quiz");
//   //   }
//   // };
//   useEffect(() => {
//     let interval: NodeJS.Timeout | null = null;

//     if (quizStarted) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => {
//           if (prevTimer <= 0) {
//             clearInterval(interval!);
//             handleNextQuestion();
//           }
//           return prevTimer - 1;
//         });
//       }, 1000);
//     }

//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   }, [currentQuestionIndex, handleNextQuestion, quizStarted]);

//   const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedOption(e.target.value);
//     setQuizStarted(true); // Start the quiz when an option is selected
//     handleNextQuestion(); // Move to the next question when an option is selected
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="max-w-md mx-auto p-8 bg-white rounded shadow-lg">
//         {quizStarted && currentQuestionIndex < questions.length ? (
//           <>
//             <h2 className="text-2xl font-semibold mb-4">
//               Question {currentQuestionIndex + 1}
//             </h2>
//             <p className="mb-4">{questions[currentQuestionIndex].name}</p>
//             <div className="mb-4">
//               <div className="flex items-center mb-2">
//                 <input
//                   type="radio"
//                   id="opt1"
//                   name="option"
//                   value="opt1"
//                   checked={selectedOption === "opt1"}
//                   onChange={handleOptionChange}
//                 />
//                 <label htmlFor="opt1" className="ml-2">
//                   {questions[currentQuestionIndex].opt1}
//                 </label>
//               </div>
//               <div className="flex items-center mb-2">
//                 <input
//                   type="radio"
//                   id="opt2"
//                   name="option"
//                   value="opt2"
//                   checked={selectedOption === "opt2"}
//                   onChange={handleOptionChange}
//                 />
//                 <label htmlFor="opt2" className="ml-2">
//                   {questions[currentQuestionIndex].opt2}
//                 </label>
//               </div>
//               <div className="flex items-center mb-2">
//                 <input
//                   type="radio"
//                   id="opt3"
//                   name="option"
//                   value="opt3"
//                   checked={selectedOption === "opt3"}
//                   onChange={handleOptionChange}
//                 />
//                 <label htmlFor="opt3" className="ml-2">
//                   {questions[currentQuestionIndex].opt3}
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   id="opt4"
//                   name="option"
//                   value="opt4"
//                   checked={selectedOption === "opt4"}
//                   onChange={handleOptionChange}
//                 />
//                 <label htmlFor="opt4" className="ml-2">
//                   {questions[currentQuestionIndex].opt4}
//                 </label>
//               </div>
//             </div>
//             {quizStarted && (
//               <div>
//                 <p>Time Left: {timer} seconds</p>
//                 {/* Add logic to display the question here */}
//               </div>
//             )}
//           </>
//         ) : quizStarted && currentQuestionIndex >= questions.length ? (
//           <div className="text-center">
//             <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
//             <p>Your Score: {score}</p>
//           </div>
//         ) : (
//           <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//           <div className="max-w-md mx-auto p-8 bg-white rounded shadow-lg">

//             {!quizStarted && (
//               <button
//                 onClick={() => setQuizStarted(true)}
//                 className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//               >
//                 Start Quiz
//               </button>
//             )}
//           </div>
//         </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Quiz;

'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function GetBook() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.NEXT_PUBLIC_API_KEY}get/mcqs`

      const response = await axios.get(URL)
      setData(response.data)
    }
    fetchData()
  }, [])

  return (
    <>
      {/* <SubHeader title="About Us" /> */}
    </>
  )
}
