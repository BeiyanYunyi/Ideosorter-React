const results = [
  {
    name: '4theory',
    result_en: "You're a Fourth Theorist",
    desc_en:
      'The fourth theory is an ideology concieved by the Russian political analyst Aleksandr Dugin that seeks to find a new poltiical theory past Liberalism, Marxism and Fascism.',
    result_cs: 'Jste Čtvrtým teoretikem',
    desc_cs:
      'Čtvrtá politická teorie je ideologie vymyšlena ruským politickým analytikem Aleksandrem Duginem, snažící se najít nobou politickou teorii mimo liberalismus, marxismus a fašismus.',
  },
  {
    name: 'agorism',
    result_en: "You're an Agorist",
    desc_en:
      'Agorism is an ideology concieved by Samuel Edward Konkin III that seeks to establish a society in which all exchanges are voluntary, by the means of engaging in counter-economic activities.',
    result_cs: 'Jste agoristou',
    desc_cs:
      'Agorismus je ideologie vymyšlena Samuelem Edwardem Konkinem III, snažící se nastolit společnost, v níž všechny výměny jsou dobrovolné, prostředkem účastnění se kontraekonomických aktivit.',
  },
  {
    name: 'agsoc',
    result_en: "You're an Agrarian Socialist",
    desc_en:
      'Agrarian Socialism is an ideology that seeks to combine an agrarian lifestyle and socialist economic system, mostly focusing on land redistribution and social ownership of land.',
  },
  {
    name: 'ancap',
    result_en: "You're an Anarcho-Capitalist",
    desc_en:
      'Anarcho-Capitalism, also called Voluntaryism, is an ideology that advocates for the creation of a stateless society based on property rights and the Non-Aggression Principle.',
  },
  {
    name: 'ancol',
    result_en: "You're an Anarcho-Collectivist",
    desc_en:
      'Anarcho-Collectivism is an ideology that seeks to establish a stateless society with worker owned means of production and exchange of goods for labour notes, representative of the labour of the worker.',
  },
  {
    name: 'ancom',
    result_en: "You're an Anarcho-Communist",
    desc_en:
      'Anarcho-Communism is an ideology that seeks to establish a stateless, classless and moneyless society based on a mutual aid gift economy.',
  },
  {
    name: 'angeo',
    result_en: "You're a Geoanarchist",
    desc_en:
      'Geo-anarchism is an ideology that advocates for the establishment of a stateless society where private ownership of businesses is present but land is commonly owned and its usage is taxed to a mutual community fund.',
  },
  {
    name: 'anprim',
    result_en: "You're an Anarcho-Primitivist",
    desc_en:
      'Anarcho-Primitivism is an ideology that advocates for a return to pre-civilization life. It is unique in its opposition to agrculture and pecuary and the embracing of a hunter-gatherer lifestyle',
  },
  {
    name: 'ansynd',
    result_en: "You're an Anarcho-Syndicalist",
    desc_en:
      "Anarcho-Syndicalism is an ideology that seeks to use the power of workers' movements to establish a post-capitalist stateless society based on worker ownership of the means of production",
  },
  {
    name: 'bhl',
    result_en: "You're a Bleeding-Heart Libertarian",
    desc_en:
      'Bleeding-Heart Libertarianism is an ideology that deems that an expansion of civil liberties will be the most benefitial to the disadvanatged',
  },
  {
    name: 'bordiga',
    result_en: "You're a Bordigist/Italian Left-Communist",
    desc_en:
      "Italian Left Communism is an ideology that takes a staunchly anti-revisionist approach to Marx and Lenin's works, being extremely critical of their sucessors' developments",
  },
  {
    name: 'castro',
    result_en: "You're a Castroist",
    desc_en:
      "Castroism is an ideology derived from Fidel Castro's application of Marxism–Leninism to the conditions of Cuba, mostly differening in the role of the vanguard party",
  },
  {
    name: 'fascism',
    result_en: "You're a Classical Fascist",
    desc_en:
      'Fascism is a form of far-right, authoritarian ultranationalism characterized by dictatorial power, forcible suppression of opposition and strong regimentation of society and of the economy',
  },
  {
    name: 'clerfash',
    result_en: "You're a Clerical Fascist",
    desc_en:
      'Clerical fascism is an ideology that combines the political and economic doctrines of fascism with clericalism',
  },
  {
    name: 'councom',
    result_en: "You're a Council Communist",
    desc_en:
      "Council Communism is an ideology that deems that a sucessful socialist society must be one managed by workers' councils and not ",
  },
  {
    name: 'deleon',
    result_en: "You're a De Leonist",
    desc_en:
      'De Lenism is an ideology that combines syndicalist labor organization with Marxist ideas such as the concept of a Dictatorship of the Proletariat',
  },
  {
    name: 'demsoc',
    result_en: "You're a Democatic Socialist",
    desc_en:
      'Democratic Socialism is an ideology that seeks to establish socialism through reform and electoral processes as opposed to revoluitionary means',
  },
  {
    name: 'deng',
    result_en: "You're a Dengist/Socialist with Chinese Characteristics",
    desc_en:
      'Socialism with Chinese Characteristics is an ideology that deems that a stage of state managed capitalism is necessary to create the conditions necessary for a sucessful socialist society',
  },
  {
    name: 'distributism',
    result_en: "You're a Distributist",
    desc_en: 'Distributism is a third-way, free market, center-right ideology',
  },
  {
    name: 'geolib',
    result_en: "You're a Geolibertarian",
    desc_en:
      'Geolibertarianism is an ideology that incorpotates the georgist principles of free trade, free land and the value taxes with the liberatarian principle of minimal government.',
  },
  {
    name: 'georgism',
    result_en: "You're a Georgist",
    desc_en:
      'Georgism is an ideology that deems that for a truly free market to exist first the monopoly on land must be broken. It advocates for a land value tax that if implemented properly will in essence decomofify land ownership',
  },
  {
    name: 'leftroth',
    result_en: "You're a Left-Rothbardian",
    desc_en:
      'Left-Rothbardianism is a left-wing inspired take on traditional Rothbardian Anarcho-Capitalism that sees an Anarcho-Capitalist society as the ideal place to achieve traditionally left wing goals such as social and economic equality.',
  },
  {
    name: 'libert',
    result_en: "You're a Right-Libertarian",
    desc_en:
      'Right-libertarianism is an ideology that supports capitalist property rights and defends market distribution of natural resources and private property',
  },
  {
    name: 'libsoc',
    result_en: "You're a Libertarian Socialist",
    desc_en:
      'Libertarian Socialism is an ideology that deems that the means of production should be owned and managed by their workers with the state providing little to no interference in the economy, contrasted to the ideas of state ownership of State Socialism',
  },
  {
    name: 'lib',
    result_en: "You're a Keynesian Liberal",
    desc_en:
      'Keynesian liberalism is an form of liberal capitalism that deems that for the market to function in an adequate way it must be under the supervision of an interventionist state',
  },
  {
    name: 'luxem',
    result_en: "You're a Luxemburgist",
    desc_en:
      'Luxemburgism is a Marxist-Communist, Libertarian, anti-war, and extremely progressive ideology that believes that the Dictatorship of the Proletariat should be run by democratic workers councils and unions, rather than a Socialist Party.',
  },
  {
    name: 'lwma',
    result_en: "You're a Left-Wing Market Anarchist",
    desc_en:
      'Left-Wing Market Anarchism is an ideology that seeks to establish a stateless society based on a post-capitalist market economy',
  },
  {
    name: 'mao',
    result_en: "You're a Maoist",
    desc_en:
      'Maoism is a variety of Marxism–Leninism that Mao Zedong developed for realising a socialist revolution in the agricultural, pre-industrial society of China. The main difference being is that the peasantry are the revolutionary vanguard in pre-industrial societies rather than the proletariat.',
  },
  {
    name: 'marksoc',
    result_en: "You're a Market Socialist",
    desc_en:
      'Market socialism is an ideology that combines the socialist ideal of worker ownership of the means of production with the competition and resource allocation provided by a market economy',
  },
  {
    name: 'minarch',
    result_en: "You're a Minarchist",
    desc_en:
      "Minarchism is an ideology that deems that the state's sole purposes are to protect its citizens' rights to property, bring criminals to justice and to guard the country's territory against any invasions.",
  },
  {
    name: 'mlm',
    result_en: "You're a Marxist–Leninist–Maoist",
    desc_en:
      'Marxism–Leninism–Maoism is an ideology devised by the Communist Party of Peru that synthesizes the ideas of Marxism–Leninism and Maoism, rejecting certain aspects from the latter like the 3 worlds theory.',
  },
  {
    name: 'ml',
    result_en: "You're a Marxist–Leninist",
    desc_en:
      'Marxism–Leninism is an ideology that deems that establishing and developing socialism in 1 country is a necessity before exporting the revoltion to neighbouring states, an idea that contrasts with the Trotskyist ideal of permanent revolution.',
  },
  {
    name: 'mutualism',
    result_en: "You're a Mutualist",
    desc_en:
      'Mutualism is an ideology who seeks to establish a stateless society based around a combination of free trade of goods between individuals, as long as a mutual credit bank and mutual aid structures.',
  },
  {
    name: 'natan',
    result_en: "You're a National Anarchist",
    desc_en:
      'National Anarchism is an ideology that seeks to establish a stateless society made up of ethno-communes based on a meritocratic mutualist economic system.',
  },
  {
    name: 'natsynd',
    result_en: "You're a National Syndicalist",
    desc_en:
      'National syndicalism is an adaptation of syndicalism to suit the social agenda of integral nationalism.',
  },
  {
    name: 'nazbol',
    result_en: "You're a National Bolshevik",
    desc_en:
      'National Bolshevism is a political movement that combines elements of fascism and Bolshevism',
  },
  {
    name: 'nazcap',
    result_en: "You're a National Capitalist",
    desc_en:
      'National Capitalism is an economically right wing, culturally traditionalist, nationalist and fascist ideology',
  },
  {
    name: 'nazi',
    result_en: "You're a National Socialist",
    desc_en:
      'National Socialism is a form of fascism, with disdain for liberal democracy and the parliamentary system. It incorporates fervent antisemitism, anti-communism, scientific racism, and the use of eugenics into its creed.',
  },
  {
    name: 'neocon',
    result_en: "You're a Neoconservative",
    desc_en:
      'Neoconservativism promotes democracy and interventionism in international affairs, including peace through strength, and are known for espousing disdain for communism and political radicalism.',
  },
  {
    name: 'neolib',
    result_en: "You're a Neoliberal",
    desc_en:
      'Neoliberalism is a fusion of neoclassical and Keynesian economic ideas that seeks to strike a balance between regulations and Laissez-Faire',
  },
  {
    name: 'orthmarx',
    result_en: "You're an Orthodox Marxist",
    desc_en:
      'Orthodox Marxism is an economically far left, progressive ideology that looks to achieve a communist society, a stateless, classless, moneyless society.',
  },
  {
    name: 'paleobert',
    result_en: "You're a Paleolibertarian",
    desc_en:
      'Paleolibertarianism is an ideology developed by American anarcho-capitalist theorists Murray Rothbard and Lew Rockwell that combines traditional conservative cultural values and social philosophy with a libertarian opposition to government intervention.',
  },
  {
    name: 'paleocon',
    result_en: "You're a Paleoonservative",
    desc_en:
      'Paleoconservatism is a form of conservatism that orignally manifestated itself in the isolationist factions of American conservatism who opposed the Vietnam war. Paleoconservatives also commonly oppose free global trade, taking a very protectionist approach with strong tarrifs.',
  },
  {
    name: 'patcon',
    result_en: "You're a Paternalistic Conservative",
    desc_en:
      'Paternalistic conservatism is an ideolody that seeks to combine the social democratic principles of regulated capitalism and strong labour unions with traditional values.',
  },
  {
    name: 'posadism',
    result_en: "You're a Posadist",
    desc_en:
      'Posadism is a radically accelerationist form of Trostksyism that deems nuclear destruction of captalist society as a necessity to establish socialism globally (with some help of our alien comrades, of course)',
  },
  {
    name: 'situationist',
    result_en: "You're a Situationist",
    desc_en:
      'Situationism is a movement of avant-garde libertarian marxists who focused primarily on criticizng capitalism through artistic means',
  },
  {
    name: 'socbert',
    result_en: "You're a Social Libertarian",
    desc_en:
      'Social Libertarianism is a form of Bleeding-Heart Libertarianism that deems that a universal basic income, combined with maximum individual freedoms, is a necessity to achieve a fair society for all including the most socially disadvantaged',
  },
  {
    name: 'socdem',
    result_en: "You're a Social Democrat",
    desc_en:
      'Social Democracy is an ideology that seeks to establish a society whereby capitalism is restricted and controlled by the state and strong labour unions in order to achieve bennefitial outcomes to the working class.',
  },
  {
    name: 'socgeo',
    result_en: "You're a Social Georgist",
    desc_en:
      'Social Georgism is an ideology that deems that Georgist principles of public land ownership and land value tax prefectly complement a free market welfarist society, the most prominent advocate of this ideology is Chinese revolutionary and first president of the Republic of China, Sun Yat-Sen',
  },
  {
    name: 'socnat',
    result_en: "You're a Social Nationalist",
    desc_en:
      'Social Nationalism is a form of nationalism based upon national self-determination, popular sovereignty and social equality',
  },
  {
    name: 'statesoc',
    result_en: "You're a State Socialist",
    desc_en:
      'State Socialism is an ideology that deems that the means of production should be owned and managed by the state, contrasted to the ideals of Libertarian Socialism',
  },
  {
    name: 'strasser',
    result_en: "You're a Strasserist",
    desc_en:
      'Strasserism is an ideology popularized by the Strasser brothers that seeks to blend left wing economics with right wing ultrantionalism.',
  },
  {
    name: 'synd',
    result_en: "You're a Syndicalist",
    desc_en:
      'Syndicalism is an ideology that seeks to advance the demands and rights of workers through strikes.',
  },
  {
    name: 'technocracy',
    result_en: "You're a Technocrat",
    desc_en:
      'Technocracy is an ideology that deems that the state and the economy should be ran by experts of their given field as opposed to elected/inherited politicians and businessmen',
  },
  {
    name: 'theocracy',
    result_en: "You're a Theocrat",
    desc_en:
      'A theocracy is an ideology where the rulers are meant to act as representatives of a deity and enforce the laws of their given religion upon the citizens',
  },
  {
    name: 'tito',
    result_en: "You're a Titoist",
    desc_en:
      'Titoism is an ideology that seeks to combine the vanguardist nature of Leninism with a market socialist economy and worker owned means of production',
  },
  {
    name: 'trot',
    result_en: "You're a Trotskyist",
    desc_en:
      'Trotskyism is an ideology that deems a permanent revoltuion across the world to be a necessity in establishing socialism, contrasting to the Marxist–Leninist idea of socialism in 1 country',
  },
];

export default results;
