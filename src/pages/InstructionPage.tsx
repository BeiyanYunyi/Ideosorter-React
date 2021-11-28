import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import useL10nInfo from '../hooks/useL10nInfo';

const InstructionPage = () => {
  const l10nInfo = useL10nInfo();
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <Typography variant="h4" textAlign="center">
        {l10nInfo.instructions_title}
      </Typography>
      <Paper sx={{ padding: 1 }} elevation={1}>
        <Typography variant="h6">{l10nInfo.instructions_text}</Typography>
      </Paper>
      <Stack spacing={1} sx={{ marginTop: 1 }}>
        <Button
          sx={{ fontSize: 36, textTransform: 'none' }}
          variant="contained"
          onClick={() => {
            navigate(`/l10n/${l10nInfo.key}/questions/private_property`);
          }}
        >
          {l10nInfo.instructions_gotitbutton}
        </Button>
        <Button
          sx={{ fontSize: 36, textTransform: 'none' }}
          variant="contained"
          color="error"
          onClick={() => {
            navigate(`/l10n/${l10nInfo.key}`, { replace: true });
          }}
        >
          {l10nInfo.instructions_nevermind}
        </Button>
      </Stack>
    </Container>
  );
};
export default InstructionPage;
