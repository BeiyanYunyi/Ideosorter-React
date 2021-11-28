import { useParams } from 'react-router-dom';
import buttons from '../originData/buttons';
import questions from '../originData/questions';
import useL10nInfo from './useL10nInfo';

const useQuestion = () => {
  const { questionName } = useParams() as { l10n: string; questionName: string };
  const l10nKey = useL10nInfo().key;
  const targetQuestion = questions.find((quest) => quest.name === questionName);
  if (!targetQuestion) return null;
  const questionOptions = Object.keys(targetQuestion.nextquestion).map((key) => ({
    opt: key,
    text: buttons.find((btn) => btn.name === key)![`text_${l10nKey}`],
    // @ts-ignore
    target: targetQuestion?.nextquestion[key] as string,
    isQuestion: true,
  }));
  const resultOptions = Object.keys(targetQuestion.results).map((key) => ({
    opt: key,
    text: buttons.find((btn) => btn.name === key)![`text_${l10nKey}`],
    // @ts-ignore
    target: targetQuestion.results[key] as string,
    isQuestion: false,
  }));
  const options = questionOptions.concat(...resultOptions);
  const formattedQuestion = {
    name: targetQuestion.name,
    question: targetQuestion[`question_${l10nKey}`],
    options,
  };
  return formattedQuestion;
};

export default useQuestion;
