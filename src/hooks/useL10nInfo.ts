import { useParams } from 'react-router-dom';
import localisation from '../originData/loc';

const useL10nInfo = () => {
  const params = useParams() as { l10n: string };
  return (
    localisation.find((loc) => loc.key === params.l10n) ||
    localisation.find((loc) => loc.key === 'en')!
  );
};

export default useL10nInfo;
