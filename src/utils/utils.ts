const range = (start, end, step = 1) => {
  const output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const getTotalCharCode = phrase => {
  return phrase.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
};

const sampleOne = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const generateId = (len = 4) => {
  // prettier-ignore
  const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return sample(characters, len).join('');
};

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));

const sample = (arr, len = 1) => {
  const output = [];

  for (let i = 0; i < len; i++) {
    output.push(sampleOne(arr));
  }

  return output;
};

export { generateId, random, range, sample, clamp };
