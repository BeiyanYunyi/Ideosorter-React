import { Button, Container, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import useL10nInfo from '../hooks/useL10nInfo';

const L10nPage = () => {
  const navigate = useNavigate();
  const l10nInfo = useL10nInfo();
  return (
    <Container>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="outlined"
          size="large"
          sx={{ fontSize: 18 }}
          onClick={() => {
            navigate('instructions');
          }}
        >
          {l10nInfo.index_startbutton}
        </Button>
      </div>
      {l10nInfo.index_text.map((para) => (
        <div key={para.title}>
          <Typography variant="h4">{para.title}</Typography>
          <Typography gutterBottom>{para.content}</Typography>
        </div>
      ))}
      <Typography variant="h4">{l10nInfo.index_contacts_text}</Typography>
      {l10nInfo.index_contacts.map((para) => (
        <Typography gutterBottom key={para}>
          {para}
        </Typography>
      ))}
      <Typography>
        <Link href={l10nInfo.index_contacts_ghpage.link}>
          {l10nInfo.index_contacts_ghpage.text}
        </Link>
      </Typography>
    </Container>
  );
};

export default L10nPage;
