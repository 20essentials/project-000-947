export interface Question {
  id: number;
  question: string;
  code: string;
  answers: string[];
  correctAnswer: number;
  userSelectAnswer?: number;
  userClicked?: boolean = false;
  isUserCorrectAnswer?: boolean;
}
