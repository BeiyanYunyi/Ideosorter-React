import { Box, Card, CardBody, CardHeader, Text } from 'grommet';
import Container from '../components/Container';
import Header from '../components/Header';
import useResult from '../hooks/useResult';

const ResultPage = () => {
  const result = useResult();
  return (
    <Container>
      <Header />
      <Box align="center" style={{ marginBottom: 8 }}>
        <Text size="xlarge">{result?.result}</Text>
      </Box>
      <Card>
        <CardHeader>
          <img
            src={`/flags/${result?.name}_flag.svg`}
            alt={result?.name}
            style={{ maxWidth: '100%' }}
          />
        </CardHeader>
        <CardBody pad="medium">
          <Text size="medium">{result?.desc}</Text>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ResultPage;
