import { Game } from '#components/Game.tsx';
import { StartGame } from '#components/StartGame.tsx';
import { userQuestionStore } from '#hooks/useQuestionsStore.tsx';

export const App = () => {
  const questions = userQuestionStore(state => state.questions);

  return (
    <section className='container'>
      <h1 className='title'>
        JavaScript Quiz <img src='jsLogo.svg' alt='Js Logo' />
      </h1>
      {questions.length === 0 ? <StartGame /> : <Game />}
    </section>
  );
};
