export const pinnedRepos: pinnedRepoType[] = [
  {
    id: `mikebot`,
    name: `MikeBot`,
    longDescription: `I wanted to learn how to use JavaScript and this project helped me dive into it. MikeBot utilised the discord API via discord.js to perform a variety of tasks from moderation, games, and general fun. I spent ages over quarantine on this project. If I looked back at the code now I would probably cringe, but its my starting point.`,
  },

  {
    id: `personal-web`,
    name: `My Website`,
    longDescription: `This here website you are reading this content from. The inspiration for this website started when I saw Lee Rob's and Daniel Wirtz's websites (you might see a few similarities 🙃 ). I decided I wanted to try out ChakraUI and so I started developing this website; I learnt a lot about NextJS and Chakra, and had a great time making it.`,
  },
  {
    id: `movie-web-typescript`,
    name: `ScuffedMDB`,
    longDescription: `The first version of this website I built in the latter half of quarantine to rate movies that me and my friends had watched over discord. It went great until I accidentally deleted the database, and then decided it needed a remodel as well. Producing ScuffedMDB (Movie-rating V2.0), made with NextJS and ChakraUI.`,
  },
];

export interface pinnedRepoType {
  id: string;
  name: string;
  longDescription: string;
}
