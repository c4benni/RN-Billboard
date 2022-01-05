export const splitArtists = (str: string): string[] => {
  return str.split(/\s+Feat\.\s+|\s+&\s+/);
};
