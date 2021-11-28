import { Container, Paper, Typography } from '@mui/material';
import Header from '../components/Header';
import useResult from '../hooks/useResult';

const ResultPage = () => {
  const result = useResult();
  return (
    <Container>
      <Header />
      <Typography variant="h4" textAlign="center">
        {result?.result}
      </Typography>
      <img
        src={`/flags/${result?.name}_flag.svg`}
        alt={result?.name}
        style={{ maxWidth: '100%' }}
      />
      <Paper sx={{ padding: 1 }} elevation={1}>
        <Typography variant="h6">{result?.desc}</Typography>
      </Paper>
    </Container>
  );
};

export default ResultPage;
