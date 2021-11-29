import { Box, Heading } from 'grommet';
import useL10nInfo from '../hooks/useL10nInfo';

const Header = () => {
  const l10nInfo = useL10nInfo();
  return (
    <>
      <Box align="center">
        <Heading style={{ marginTop: 8, marginBottom: 8 }}>{l10nInfo.title}</Heading>
      </Box>
      <hr style={{ marginBottom: 8 }} />
    </>
  );
};

export default Header;
