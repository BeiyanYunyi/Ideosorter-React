import oriQuestions from './oriQuestions';

const questions = (Object.keys(oriQuestions) as (keyof typeof oriQuestions)[]).map((key) => ({
  name: key,
  ...oriQuestions[key],
}));

export default questions;
