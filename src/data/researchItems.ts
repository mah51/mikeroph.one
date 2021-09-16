export const researchItems: ResearchItem[] = [
  {
    id: 'deep-learning-antibody',
    title: 'Deep learning: a new technology in antibody design',
    tags: ['Deep learning', 'Antibodies', 'Antibody design', 'Dissertation'],
    authors: [{ name: 'Michael Hall', avatar: '/static/images/profile.jpeg' }],
    abstract:
      'Antibodies are highly diverse proteins, that specifically target a large range of molecules. This diversity can be utilised via engineering techniques to produce antibodies that bind specific targets. Currently the discovery process to identify antibodies that can bind to the desired target are drawn out and expensive to perform. However, a computational tool named deep learning is a rapidly developing technology that can be trained to recognise patterns within data. This dissertation discovered, that the lack of data available specific to antibody structures prevents effective teaching of more complex deep learning networks, resulting in most research being focused on general protein structure. However, programs focused on protein structure make fairly effective predictions, and are rapidly improving. Neural network architectures varied depending on their application, with convolutional neural networks being preferred when less training data was available and residual neural networks chosen to analyse complex relationships. One article utilised a long short-term memory network, which due to its data persistence, that acts like memory, utilised the large dataset it was provided with, to achieve a high accuracy of 92.43% on a test set of data. Unfortunately, due to poor reporting in a lot of the literature, it is hard to compare current programs quantitatively, however a set of reporting standards and uniform test data sets could address this problem.',
    date: '2020-04-07',
    pdf: '/static/report.pdf',
  },
];

export interface ResearchItem {
  id: string;
  title: string;
  tags: string[];
  authors: { name: string; avatar: string }[];
  abstract: string;
  date: string;
  pdf: string;
}
