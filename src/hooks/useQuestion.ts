import { useParams } from 'react-router-dom';
import buttons from '../originData/buttons';
import oriQuestions from '../originData/oriQuestions';
import useL10nInfo from './useL10nInfo';

const useQuestion = () => {
  const { questionName } = useParams() as { l10n: string; questionName: keyof typeof oriQuestions };
  const l10nKey = useL10nInfo().key;

  // To check the url.
  const keys = Object.keys(oriQuestions) as (keyof typeof oriQuestions)[];
  if (!questionName || !keys.find((key) => key === questionName)) return null;

  const targetQuestion = oriQuestions[questionName];
  const options = targetQuestion.answers.map((key) => {
    const text =
      buttons.find((btn) => btn.name === key)![`text_${l10nKey}`] ||
      buttons.find((btn) => btn.name === key)!.text_en;
    // @ts-ignore
    const nextQuestion: string = targetQuestion.nextquestion[key];
    const target: string =
      nextQuestion || // @ts-ignore
      targetQuestion.results[key];
    return {
      opt: key,
      text,
      target,
      isQuestion: !!nextQuestion,
      color: buttons.find((btn) => btn.name === key)!.color,
    };
  });
  const formattedQuestion = {
    name: questionName,
    question: targetQuestion[`question_${l10nKey}`] || targetQuestion.question_en,
    options,
  };
  return formattedQuestion;
};

export default useQuestion;
