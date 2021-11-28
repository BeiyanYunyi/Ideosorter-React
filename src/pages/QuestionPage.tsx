import { Container, Typography, Paper, Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import useL10nInfo from '../hooks/useL10nInfo';
import useQuestion from '../hooks/useQuestion';

const QuestionPage = () => {
  const l10nInfo = useL10nInfo();
  const navigate = useNavigate();
  const question = useQuestion();
  if (!question) return <Container>No question!</Container>;
  return (
    <Container>
      <Header />
      <Paper sx={{ padding: 1 }} elevation={1}>
        <Typography variant="h6">{question.question}</Typography>
      </Paper>
      <Stack spacing={1} sx={{ marginTop: 1 }}>
        {question.options.map((option) => (
          <Button
            sx={{ fontSize: 36, textTransform: 'none' }}
            variant="contained"
            key={option.opt}
            onClick={() => {
              if (option.isQuestion) {
                navigate(`/l10n/${l10nInfo.key}/questions/${option.target}`);
              } else {
                navigate(`/l10n/${l10nInfo.key}/results/${option.target}`);
              }
            }}
          >
            {option.text}
          </Button>
        ))}
      </Stack>
    </Container>
  );
};

export default QuestionPage;
