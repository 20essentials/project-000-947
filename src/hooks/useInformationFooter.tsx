import type { Question } from '#types/types.d.ts';

interface Props {
  questions: Question[];
}

export const useInformationFooter = ({ questions }: Props) => {
  let correct = 0;
  let incorrect = 0;
  let withoutResponse = 0;

  questions.forEach(question => {
    const { isUserCorrectAnswer, userClicked } = question;
    if (isUserCorrectAnswer) correct++;
    else if (!isUserCorrectAnswer && userClicked) incorrect++;
    else withoutResponse++;
  });

  return `✅ ${correct} correctas - ❌ ${incorrect} incorrectas - 😅 ${withoutResponse} sin responder`;
};
