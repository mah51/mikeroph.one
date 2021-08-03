export type categories = `windows` | `web` | `mac` | 'ios' | 'chrome';

export interface ToolType {
  link: string;
  id: string;
  name: string;
  category: categories[];
  labels?: string[];
  description: string;
}

const Tools: ToolType[] = [
  {
    id: `monzo`,
    category: [`ios`],
    link: `https://monzo.com/`,
    labels: [`Banking`],
    name: `Monzo`,
    description: `A great mobile banking app.`,
  },
  {
    id: `telegram`,
    category: [`windows`, `mac`, `ios`, `web`],
    link: `https://telegram.org/`,
    labels: [`Messaging`],
    name: `Telegram`,
    description: `Instant messaging app with lots of functionality.`,
  },
  {
    id: `vscode`,
    category: [`windows`, `mac`],
    link: `https://code.visualstudio.com/`,
    labels: [`Editor`],
    name: `Visual Studio Code`,
    description: `A lightweight code editor with plenty of plugins.`,
  },
  {
    id: `discord`,
    category: [`windows`, `mac`, `ios`, `web`],
    link: `https://discord.com`,
    labels: [`Voice Chat`],
    name: `Discord`,
    description: `A voice chat app.`,
  },
  {
    id: `webstorm`,
    category: [`windows`, `mac`],
    link: `https://www.jetbrains.com/webstorm/`,
    labels: [`Editor`],
    name: `WebStorm`,
    description: `A JS IDE that works great.`,
  },
  {
    id: `fluent`,
    category: [`chrome`],
    link: `https://www.usefluent.co`,
    labels: [`Language`],
    name: `Fluent`,
    description: `Learn a language in a unique way.`,
  },
  {
    id: `biorender`,
    category: [`web`],
    link: `https://biorender.com`,
    labels: [`Diagram Creation`],
    name: `BioRender`,
    description: `A web application for creating nice looking scientific figures.`,
  },
  {
    id: `appcleaner`,
    category: [`mac`],
    link: `https://freemacsoft.net/appcleaner/`,
    labels: [`Utility`],
    name: `AppCleaner`,
    description: `Uninstalls all the files associated with an app.`,
  },
  {
    id: `bartender`,
    category: [`mac`],
    link: `https://www.macbartender.com/`,
    labels: [`Menu Management`],
    name: `BarTender`,
    description: `Hides items in the menu bar.`,
  },
  {
    id: `kap`,
    category: [`mac`],
    link: `https://getkap.co/`,
    labels: [`Screen Recording`],
    name: `Kap`,
    description: `A superior open source screen recorder.`,
  },
  {
    id: `rocket`,
    category: [`mac`],
    link: `https://matthewpalmer.net/rocket/`,
    labels: [`Emoji`],
    name: `Rocket`,
    description: `Globally search emojis.`,
  },
  {
    id: `aldente`,
    category: [`mac`],
    link: `https://github.com/davidwernhart/AlDente`,
    labels: [`Battery Management`],
    name: `AlDente`,
    description: `Prevents overcooking of your battery!`,
  },
  {
    id: `voicemeeter`,
    category: [`windows`],
    link: `https://vb-audio.com/Voicemeeter/banana.htm`,
    labels: [`Audio`],
    name: `VoiceMeeter`,
    description: `An advanced virtual audio mixer.`,
  },
  {
    id: `obs`,
    category: [`windows`],
    link: `https://obsproject.com/`,
    labels: [`Screen Recording`],
    name: `OBS`,
    description: `Open source software for screen recording.`,
  },
  {
    id: `spark`,
    category: [`mac`, `ios`],
    link: `https://sparkmailapp.com/`,
    labels: [`E-Mail`],
    name: `Spark`,
    description: `The best email client.`,
  },
  {
    id: `pock`,
    category: [`mac`],
    link: `https://pock.dev/`,
    labels: [`TouchBar`],
    name: `Pock`,
    description: `TouchBar customisation.`,
  },
  {
    id: `zotero`,
    category: [`windows`, `mac`, `chrome`],
    link: `https://www.zotero.org/`,
    labels: [`Citation Manager`],
    name: `Zotero`,
    description: `An open source citation manager that focuses on simplicity.`,
  },

  {
    id: `raycast`,
    category: [`mac`],
    link: `https://raycast.com/`,
    labels: [`Spotlight Replacement`],
    name: `Raycast`,
    description: `Spotlight, but its good.`,
  },
  {
    id: `cleanshotx`,
    category: [`mac`],
    link: `https://cleanshot.com/`,
    labels: [`Screenshots`],
    name: `CleanShotX`,
    description: `A better screenshot tool.`,
  },
  {
    id: `iina`,
    category: [`mac`],
    link: `https://iina.io/`,
    labels: [`Playback`],
    name: `IINA`,
    description: `An intuitive media player.`,
  },
  {
    id: `flow`,
    category: [`mac`, `ios`],
    link: `https://flowapp.info/`,
    labels: [`Pomodoro Timer`],
    name: `Flow`,
    description: `A simple app to make use of your time.`,
  },
];
export default Tools;
