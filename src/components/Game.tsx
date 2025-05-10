import '#components/Game.css';
import { userQuestionStore } from '#hooks/useQuestionsStore.tsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Arrow } from '#components/Arrow.tsx';
import { useEffect } from 'react';
import { useInformationFooter } from '#hooks/useInformationFooter.tsx';

export const Game = () => {
  const currentQuestion = userQuestionStore(state => state.currentQuestion);
  const questions = userQuestionStore(state => state.questions);
  const goToNextQuestion = userQuestionStore(state => state.goToNextQuestion);
  const goToPrevQuestion = userQuestionStore(state => state.goToPrevQuestion);
  const selectedAnswer = userQuestionStore(state => state.selectedAnswer);
  const resetGame = userQuestionStore(state => state.resetGame);
  const infoFooter = useInformationFooter({ questions });

  const {
    answers,
    code,
    correctAnswer,
    id,
    question,
    userClicked,
    userSelectAnswer
  } = questions[currentQuestion];

  const handleClick = (userSelectAnswer: number, questionId: number) => () =>
    selectedAnswer(userSelectAnswer, questionId);

  const generateBacgkround = (index: number) => {
    if (!userClicked) return 'transparent';
    if (index === correctAnswer) return 'green';
    if (index !== correctAnswer && index === userSelectAnswer) return 'red';
    return 'transparent';
  };

  useEffect(() => {
    function handleKeys(e: KeyboardEvent) {
      const { key } = e;
      if (['ArrowRight', 'd', 'D'].includes(key)) {
        if (currentQuestion >= questions.length - 1) return;
        goToNextQuestion();
      }
      if (['ArrowLeft', 'a', 'A'].includes(key)) {
        if (currentQuestion === 0) return;
        goToPrevQuestion();
      }
    }

    document.addEventListener('keydown', handleKeys);

    return () => {
      document.removeEventListener('keydown', handleKeys);
    };
  }, [currentQuestion]);

  return (
    <section className='game'>
      <article className='game-top'>
        <Arrow
          desabilitado={currentQuestion < 1}
          handleClick={goToPrevQuestion}
          volteado={false}
        />
        {currentQuestion + 1} /{questions.length}
        <Arrow
          desabilitado={currentQuestion >= questions.length - 1}
          handleClick={goToNextQuestion}
          volteado={true}
        />
      </article>
      <article className='game-center'>
        <h2>{question}</h2>
        <SyntaxHighlighter language='javascript' style={monokai}>
          {code}
        </SyntaxHighlighter>
        <aside className='container-answers'>
          {answers.map((answer, index) => (
            <button
              key={index}
              style={{
                backgroundColor: generateBacgkround(index)
              }}
              disabled={userClicked}
              className='answer'
              onClick={handleClick(index, id)}
            >
              {answer}
            </button>
          ))}
        </aside>
      </article>
      <article className='game-bottom'>{infoFooter}</article>
      <article className='game-bottom'>
        <button onClick={resetGame} className='resetGame'>
          Reset Game
        </button>
      </article>
    </section>
  );
};
