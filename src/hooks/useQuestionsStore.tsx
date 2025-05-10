import { create } from 'zustand';
import type { Question } from '#types/types.d.ts';
import { URL } from '#utils/constants.tsx';
import { persist } from 'zustand/middleware';

interface State {
  currentQuestion: number;
  questions: Question[];
  fetchQuestion: (limit: number) => Promise<void>;
  selectedAnswer: (userSelectAnswer: number, questionId: number) => void;
  goToNextQuestion: () => void;
  goToPrevQuestion: () => void;
  resetGame: () => void;
}

export const userQuestionStore = create<State>()(
  persist(
    (set, get) => ({
      currentQuestion: 0,
      questions: [],
      fetchQuestion: async (limit: number) => {
        const resp = await fetch(URL);
        const json = await resp.json();
        const newQuestions = json.sort(() => Math.random() - 0.5).slice(0, limit);
        set(_ => ({ questions: newQuestions }));
      },
      selectedAnswer: (userSelectAnswer: number, questionId: number) => {
        const { questions } = get();
        const newQuestions = structuredClone(questions);
        const questionIndex = newQuestions.findIndex(q => q.id === questionId);
        const { correctAnswer } = newQuestions[questionIndex];
        newQuestions[questionIndex].isUserCorrectAnswer =
          userSelectAnswer === correctAnswer;
        newQuestions[questionIndex].userSelectAnswer = userSelectAnswer;
        newQuestions[questionIndex].userClicked = true;
        set(_ => ({
          questions: newQuestions
        }));
      },
      goToNextQuestion: () => {
        set(state => ({ currentQuestion: state.currentQuestion + 1 }));
      },
      goToPrevQuestion: () => {
        set(state => ({ currentQuestion: state.currentQuestion - 1 }));
      },
      resetGame: () => {
        set({ currentQuestion: 0, questions: [] });
      }
    }),
    {
      name: 'questions'
    }
  )
);
