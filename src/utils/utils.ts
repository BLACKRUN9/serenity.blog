import { THEMES } from "../shared/enums";

// env
const env = process.env.NODE_ENV;
export const IS_DEV_MODE = env === "development" ? true : false;

export const CURRENT_YEAR = new Date().getFullYear();

export function slugToTitle(slug: string) {
  const words = slug.split("-");
  const titleWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return titleWords.join(" ");
}

/**
 *
 * @param classes string
 * @returns string
 */
export const combineClasses = function (...classes: any): string {
  return classes.filter((item: any) => !!item).join(" ");
};

/**
 * Changes Dark / Light Theme
 */
export const changeTheme = (): void => {
  const lsTheme = localStorage.getItem("theme");
  localStorage.setItem(
    "theme",
    lsTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
  );

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  location.reload();
};

/**
 * Add no scroll class to body when modal isopen
 */
export const addBodyNoScroll = (): void => {
  document.body.classList.add("no-scroll");
};

/**
 * Removes no scroll class to body when modal isopen
 */
export const removeBodyNoScroll = (): void => {
  document.body.classList.remove("no-scroll");
};

/**
 * Generates a random linear gradient color using HSL color model.
 * @return {string} The generated linear gradient color in string format.
 */
export const getRandomGradientColor = (): string => {
  const hue1 = Math.floor(Math.random() * 360);
  const hue2 = (hue1 + Math.floor(Math.random() * 180)) % 360;
  const saturation = 75 + Math.floor(Math.random() * 25);
  const lightness1 = 50 + Math.floor(Math.random() * 25);
  const lightness2 = 50 + Math.floor(Math.random() * 25);
  return `linear-gradient(${hue1}deg, hsl(${hue1}, ${saturation}%, ${lightness1}%), hsl(${hue2}, ${saturation}%, ${lightness2}%))`;
};

export const getRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getSpecificColorPalette = (): string[] => {
  const colorPalette = ['#09b7c5', '#fc0a7c', '#ff7300', '#fdc99c', '#0063ff'];
  const shuffledPalette = colorPalette.sort(() => Math.random() - 0.5); // Acak urutan warna

  return shuffledPalette;
};

const specificColorPalette = getSpecificColorPalette();
const color1 = specificColorPalette[0];
const color2 = specificColorPalette[1];
const color3 = specificColorPalette[2];
const color4 = specificColorPalette[3];
const color5 = specificColorPalette[4];


console.log(color1, color2, color3, color4, color5);




export const getRandomColorPalette = (): string[] => {
  const colorPalette = [];

  for (let i = 0; i < 4; i++) {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colorPalette.push(color);
  }

  return colorPalette;
};


const colorPalette = getRandomColorPalette();
const random1 = colorPalette[0];
const random2 = colorPalette[1];
const random3 = colorPalette[2];
const random4 = colorPalette[3];

console.log(random1, random2, random3, random4);
