import Link from '@mui/material/Link';
import { Button, Paragraph } from 'grommet';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Header from '../components/Header';
import useL10nInfo from '../hooks/useL10nInfo';

const L10nPage = () => {
  const navigate = useNavigate();
  const l10nInfo = useL10nInfo();
  return (
    <Container>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <Button
          primary
          size="large"
          style={{ fontSize: 18 }}
          onClick={() => {
            navigate('instructions');
          }}
          label={l10nInfo.index_startbutton}
        />
      </div>
      {l10nInfo.index_text.map((para) => (
        <div key={para.title}>
          <Paragraph fill margin="none" size="xxlarge">
            {para.title}
          </Paragraph>
          <Paragraph fill>{para.content}</Paragraph>
        </div>
      ))}
      <Paragraph fill margin="none" size="xxlarge">
        {l10nInfo.index_contacts_text}
      </Paragraph>
      {l10nInfo.index_contacts.map((para) => (
        <Paragraph size="small" key={para}>
          {para}
        </Paragraph>
      ))}
      <Link href={l10nInfo.index_contacts_ghpage.link}>{l10nInfo.index_contacts_ghpage.text}</Link>
    </Container>
  );
};

export default L10nPage;
