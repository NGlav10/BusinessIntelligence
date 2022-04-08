export const theme = {
  black: '#000000',
  white: '#FFFFFF',
  beige: '#F6F4E9',
  gray: '#5D5F6D',
  lightGray: '#F3F3F5',
  blue: '#2355be',
};

export const rgbaTheme = (transparency: string = '1') => ({
  black: `rgba(0, 0, 0, ${transparency})`,
  white: `rgba(255, 255, 255, ${transparency})`,
  beige: `rgba(246, 244, 233, ${transparency})`,
  gray: `rgba(93, 95, 109, ${transparency})`,
  lightGray: `rgba(243, 243, 245, ${transparency})`,
  blue: `rgba(35, 85, 190, ${transparency})`,
});
