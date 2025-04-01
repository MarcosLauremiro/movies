interface ThemeColors {
  primary: string;
  secondary: string;
  lightBlue: string;
  mint: string;
  text: string;
  background: string;
  cardBg: string;
  textSecondary: string;
}

export interface Theme {
  colors: ThemeColors;
}

export const lightTheme: Theme = {
  colors: {
    primary: "#3674B5",
    secondary: "#578FCA",
    lightBlue: "#A1E3F9",
    mint: "#D1F8EF",
    text: "#333333",
    background: "#FFFFFF",
    cardBg: "#F5F5F5",
    textSecondary: '#666666',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: "#402E7A",
    textSecondary: '#CCCCCC',
    secondary: "#4C3BCF",
    lightBlue: "#4B70F5",
    mint: "#3DC2EC",
    text: "#FFFFFF",
    background: "#121212",
    cardBg: "#1E1E1E",
  },
};
