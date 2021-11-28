import { Divider, Typography } from '@mui/material';
import useL10nInfo from '../hooks/useL10nInfo';

const Header = () => {
  const l10nInfo = useL10nInfo();
  return (
    <>
      <Typography variant="h2" textAlign="center">
        {l10nInfo.title}
      </Typography>
      <Divider sx={{ marginBottom: 1 }} />
    </>
  );
};

export default Header;
