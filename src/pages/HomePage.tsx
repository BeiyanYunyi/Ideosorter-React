import { Container, Link, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import localisation from '../originData/loc';

const HomePage = () => {
  const text = ['Select your language', 'Vyberte jazyk'];
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
        <Typography variant="h4" textAlign="center" gutterBottom>
          {text[index]}
        </Typography>
        {localisation.map((loc) => (
          <Typography textAlign="center" gutterBottom key={loc.key}>
            <Link component={RouterLink} justifyContent="center" to={`/l10n/${loc.key}`}>
              {loc.name}
            </Link>
          </Typography>
        ))}
      </Stack>
    </Container>
  );
};

export default HomePage;
