export const getFiveDigimons = (array,count) => {
  return array.sort(() => 0.5 - Math.random()).slice(0, count);
};