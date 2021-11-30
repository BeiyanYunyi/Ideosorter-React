import Stack from '@mui/material/Stack';
import { Button, Card, CardBody, Text } from 'grommet';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Header from '../components/Header';
import NotFoundPage from './NotFoundPage';
import useL10nInfo from '../hooks/useL10nInfo';
import useQuestion from '../hooks/useQuestion';

const QuestionPage = () => {
  const l10nInfo = useL10nInfo();
  const navigate = useNavigate();
  const question = useQuestion();
  if (!question) return <NotFoundPage />;
  return (
    <Container>
      <Header />
      <Card>
        <CardBody pad="medium">
          <Text size="large">{question.question}</Text>
        </CardBody>
      </Card>
      <Stack spacing={1} sx={{ marginTop: 1 }}>
        {question.options.map((option) => (
          <Button
            primary
            color={option.color}
            style={{
              padding: 16,
              alignContent: 'center',
              justifyContent: 'center',
              display: 'inline-flex',
            }}
            key={question.name + option.text}
            onClick={() => {
              if (option.isQuestion) {
                navigate(`/l10n/${l10nInfo.key}/questions/${option.target}`);
              } else {
                navigate(`/l10n/${l10nInfo.key}/results/${option.target}`);
              }
            }}
            label={<Text style={{ fontSize: 36 }}>{option.text}</Text>}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default QuestionPage;
