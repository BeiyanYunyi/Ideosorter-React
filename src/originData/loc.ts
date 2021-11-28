interface Al10n {
  key: 'en' | 'cs' | 'zhCN';
  name: string;
  title: string;
  // Index
  index_startbutton: string;
  index_text: { title: string; content: string }[];
  index_contacts_text: string;
  index_contacts: string[];
  index_contacts_ghpage: { link: string; text: string };
  // Instructions
  instructions_title: string;
  instructions_text: string;
  instructions_gotitbutton: string;
  instructions_nevermind: string;
}

const localisation: Al10n[] = [
  {
    key: 'en',
    name: 'English',
    title: 'Ideosorter',
    index_startbutton: 'Click here to start!',
    index_text: [
      {
        title: 'What is Ideosorter?',
        content:
          "Ideosorter is, in essence, a political quiz that attempts to assign an ideology that matches your views the closest by asking questions to you based on a flowchart model. This test will sort you into one of 57 different ideologies based on your answers to these questions; maybe you'll discover something you didn't know about yourself!",
      },
      {
        title: "I don't understand one of the questions!",
        content:
          "If there's anything you don't understand, we've tried to make any terminology easily looked up, and if it's still not clear, tell us so we can make some changes to the questions!",
      },
      { title: "I don't like my matched ideology!", content: '¯_(ツ)_/¯' },
    ],
    index_contacts_text: 'Contacts:',
    index_contacts: ['TheGhostOfInky#9229', 'theghostofinky@gmail.com'],
    index_contacts_ghpage: {
      link: 'https://github.com/Ideosorter/ideosorter.github.io',
      text: 'GitHub Page',
    },
    instructions_title: 'Instructions',
    instructions_text:
      'You will be presented with a series of questions. For each one, click the button with your opinion on it.',
    instructions_gotitbutton: 'Got it!',
    instructions_nevermind: 'Wait, nevermind!',
  },
  {
    key: 'cs',
    name: 'Čeština (Not finished)',
    title: 'Ideosorter',
    index_startbutton: 'Začněte kliknutím sem!',
    index_text: [
      {
        title: 'Co je Ideosorter?',
        content:
          'Ideosorter je v podstatě politický kvíz, který se pokouší přiřadit ideologii, která se nejvice shoduje s Vašimi názory pokladaním dotazů založených na vývojovém diagramu. Tento test Vás zařadí do jedné z 57 ideologií podle Vaších odpovědí. Možná o sobě objevíte něco, co jste nevěděli!',
      },
      {
        title: 'Nerozumím jedné z otázek!',
        content:
          'Pokud něčemu nerozumíte, pokusili jsme se použit snadno dohledatelnou terminologii, ale pokud je něco pořád nejasné, dejte nám vědět, abychom to mohli napravit!',
      },
      { title: 'Nelíbí se mi moje přiřazená ideologie!', content: '¯_(ツ)_/¯' },
    ],
    index_contacts_text: 'Kontakty:',
    index_contacts: ['TheGhostOfInky#9229', 'theghostofinky@gmail.com'],
    index_contacts_ghpage: {
      link: 'https://github.com/Ideosorter/ideosorter.github.io',
      text: 'Stránka na Githubu',
    },
    instructions_title: 'Instrukce',
    instructions_text:
      'Budete Vám představena série otázek. Pro každou otázku stiskněte tlačítko s Vaším názorem.',
    instructions_gotitbutton: 'Chápu!',
    instructions_nevermind: 'Počkat, zapomeňte na to.',
  },
  {
    key: 'zhCN',
    name: '简体中文',
    title: 'Ideosorter',
    index_startbutton: '点击开始',
    index_text: [
      {
        title: 'Ideosorter 是什么？',
        content:
          'Ideosorter 本质上是一个政治测验，它将通过向你提出问题来得出一个与你的观点最接近的意识形态。这个测试将基于流程图模型，根据你对这些问题的回答，把你的政治立场分为57种不同意识形态之一。也许你会发现一些你自己都不知道的东西！',
      },
      {
        title: '有个问题我不知道！',
        content:
          '作者们已经尽量使任何术语容易查找。如果你有什么不明白的地方，请告诉作者，这样他们就可以做一些修改。',
      },
      { title: '我不喜欢我被匹配到的意识形态！', content: '¯_(ツ)_/¯' },
    ],
    index_contacts_text: '作者',
    index_contacts: ['TheGhostOfInky#9229', 'theghostofinky@gmail.com'],
    index_contacts_ghpage: {
      link: 'https://github.com/Ideosorter/ideosorter.github.io',
      text: 'GitHub 页面',
    },
    instructions_title: '说明',
    instructions_text: '你将会面对一系列单选题。请根据你的观点，选出最符合的一项。',
    instructions_gotitbutton: '懂了',
    instructions_nevermind: '就当我没来过',
  },
];

export default localisation;
