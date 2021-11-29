import { Stack } from '@mui/material';
import { Box, Card, CardBody, Text, Button } from 'grommet';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Header from '../components/Header';
import useL10nInfo from '../hooks/useL10nInfo';

const InstructionPage = () => {
  const l10nInfo = useL10nInfo();
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <Box align="center">
        <Text size="2xl" textAlign="center">
          {l10nInfo.instructions_title}
        </Text>
      </Box>
      <Card>
        <CardBody pad="medium">
          <Text size="large">{l10nInfo.instructions_text}</Text>
        </CardBody>
      </Card>
      <Stack spacing={1} sx={{ marginTop: 1 }}>
        <Button
          primary
          color="#2196f3"
          style={{
            padding: 16,
            alignContent: 'center',
            justifyContent: 'center',
            display: 'inline-flex',
            color: 'white',
          }}
          onClick={() => {
            navigate(`/l10n/${l10nInfo.key}/questions/private_property`);
          }}
          label={<Text style={{ fontSize: 36 }}>{l10nInfo.instructions_gotitbutton}</Text>}
        />
        <Button
          style={{
            padding: 16,
            alignContent: 'center',
            justifyContent: 'center',
            display: 'inline-flex',
            color: 'white',
          }}
          primary
          color="red"
          onClick={() => {
            navigate(`/l10n/${l10nInfo.key}`, { replace: true });
          }}
          label={<Text style={{ fontSize: 36 }}>{l10nInfo.instructions_nevermind}</Text>}
        />
      </Stack>
    </Container>
  );
};
export default InstructionPage;
