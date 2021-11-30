import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Text } from 'grommet';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Container from '../components/Container';
import localisation from '../originData/loc';

const HomePage = () => {
  const text = ['Select your language', 'Vyberte jazyk', '选择你的语言'];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((oriState) => (oriState >= text.length - 1 ? 0 : oriState + 1));
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [text.length]);
  return (
    <Container>
      <Stack justifyContent="center">
        <Text size="2xl" textAlign="center" style={{ marginBottom: 16 }}>
          {text[index]}
        </Text>
        {localisation.map((loc) => (
          <Text size="medium" textAlign="center" style={{ marginBottom: 6 }} key={loc.key}>
            <Link component={RouterLink} justifyContent="center" to={`/l10n/${loc.key}`}>
              {loc.name}
            </Link>
          </Text>
        ))}
      </Stack>
    </Container>
  );
};

export default HomePage;
