import { Typography } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InstructionPage from './pages/InstructionPage';
import L10nPage from './pages/L10nPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';

const App = () => (
  <Routes>
    <Route path="/l10n/:l10n/instructions" element={<InstructionPage />} />
    <Route path="/l10n/:l10n/results/:resultName" element={<ResultPage />} />
    <Route path="/l10n/:l10n/questions/:questionName" element={<QuestionPage />} />
    <Route path="/l10n/:l10n" element={<L10nPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<Typography>404</Typography>} />
  </Routes>
);

export default App;
