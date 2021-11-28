interface Button {
  name: string;
  text_en: string;
  text_cs: string;
  color: string;
}

const buttons: Button[] = [
  { name: 'yes', text_en: 'Yes', text_cs: 'Ano', color: '#1b5e20' },
  { name: 'no', text_en: 'No', text_cs: 'Ne', color: '#b71c1c' },
  {
    name: 'nostate',
    text_en: "The state shouldn't exist",
    text_cs: 'Stát by neměl existovat.',
    color: '#000000',
  },
  { name: 'conditional', text_en: 'Conditional', text_cs: 'Podmínečné', color: '#0a8f00' },
  { name: 'unconditional', text_en: 'Unconditional', text_cs: 'Nepodmínečné', color: '#e0d500' },
  { name: 'capitalism', text_en: 'Capitalism', text_cs: 'Kapitalismus', color: '#e0d500' },
  { name: 'corporatism', text_en: 'Corporatism', text_cs: 'Korporatismus', color: '#75530e' },
  { name: 'workers', text_en: 'Workers', text_cs: 'Dělníci', color: '#ff0000' },
  { name: 'unions', text_en: 'Unions', text_cs: 'Odbory', color: '#ff0000' },
  { name: 'state', text_en: 'State', text_cs: 'Stát', color: '#852013' },
  { name: 'electoralism', text_en: 'Electoralism', text_cs: 'Elektoralismus', color: '#c210ad' },
  { name: 'revolution', text_en: 'Revolution', text_cs: 'Revoluce', color: '#ff0000' },
  { name: 'welfare', text_en: 'Welfare', text_cs: 'Socialní dávky', color: '#ff0000' },
  { name: 'noneed', text_en: 'Not needed', text_cs: 'Není potřeba', color: '#f5dd00' },
  { name: 'dasein', text_en: 'Dasein', text_cs: 'Dasen', color: '#000000' },
  { name: 'classnation', text_en: 'Class/Nation', text_cs: 'Třída/Národ', color: '#cd0000' },
];

export default buttons;
