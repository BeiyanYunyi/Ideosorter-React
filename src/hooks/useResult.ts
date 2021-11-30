import { useParams } from 'react-router-dom';
import oriResults from '../originData/oriResults';
import useL10nInfo from './useL10nInfo';

const useResult = () => {
  const { resultName } = useParams() as { l10n: string; resultName: keyof typeof oriResults };
  const l10nKey = useL10nInfo().key;
  const result = oriResults[resultName];
  const keys = Object.keys(oriResults) as (keyof typeof oriResults)[];
  if (!resultName || !keys.find((key) => key === resultName)) return null;
  return {
    name: resultName,
    // @ts-ignore
    result: result[`result_${l10nKey}`] || result.result_en,
    // @ts-ignore
    desc: result[`desc_${l10nKey}`] || result.desc_en,
  };
};

export default useResult;
