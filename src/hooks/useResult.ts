import { useParams } from 'react-router-dom';
import results from '../originData/results';
import useL10nInfo from './useL10nInfo';

const useResult = () => {
  const { resultName } = useParams() as { l10n: string; resultName: string };
  const l10nKey = useL10nInfo().key;
  const result = results.find((res) => res.name === resultName);
  if (!result) return null;
  return {
    name: result.name,
    // @ts-ignore
    result: result[`result_${l10nKey}`] || result.result_en,
    // @ts-ignore
    desc: result[`desc_${l10nKey}`] || result.desc_en,
  };
};

export default useResult;
