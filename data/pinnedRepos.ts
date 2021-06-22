export const pinnedRepos: pinnedRepoType[] = [
  {
    image:
      'https://user-images.githubusercontent.com/47287285/119244610-38467080-bb6a-11eb-8c0e-2e241a31dac8.png',
    name: 'WormTracker',
    id: 'WormTracker',
    longDescription:
      'A quick tool I whipped up to help count worm tracks in grids on pictures of agar plates. Pretty weird, and super scuffed, but it worked well for the short time it was used.',
  },
  {
    id: `mikebot`,
    name: `MikeBot`,
    longDescription: `I wanted to learn how to use JavaScript and this project helped me dive into it. MikeBot utilised the discord API via discord.js to perform a variety of tasks from moderation, games, and general fun. I spent ages over quarantine on this project. If I looked back at the code now I would probably cringe, but it's my starting point.`,
  },

  {
    id: `michael-hall.me`,
    name: `My Website`,
    image:
      'https://user-images.githubusercontent.com/47287285/120091560-0b630200-c104-11eb-8b08-1c34bdfd98ab.png',
    longDescription: `This here website you are reading this content from. The inspiration for this website started when I saw Lee Rob's and Daniel Wirtz's websites (you might see a few similarities 🙃 ). I wanted to try out ChakraUI, so I started developing this website; I learnt a lot about NextJS and Chakra, and had a great time making it.`,
  },
  {
    id: `movie-web-typescript`,
    name: `ScuffedMDB`,
    image:
      'https://user-images.githubusercontent.com/47287285/119243076-915ad800-bb5b-11eb-96c3-a943db35e4ea.png',
    longDescription: `I built the first version of this website during the latter half of quarantine to rate movies that my friends and I had watched over discord. It went great until I accidentally deleted the database.  Then decided it needed a remodel as well. Producing ScuffedMDB (Movie-rating V2.0), made with NextJS and ChakraUI.`,
  },
]

export interface pinnedRepoType {
  id: string
  name: string
  image?: string
  longDescription: string
}
