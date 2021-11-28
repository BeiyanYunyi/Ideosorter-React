import oriResults from './oriResults';

const results = (Object.keys(oriResults) as (keyof typeof oriResults)[]).map((key) => ({
  name: key,
  ...oriResults[key],
}));

export default results;
