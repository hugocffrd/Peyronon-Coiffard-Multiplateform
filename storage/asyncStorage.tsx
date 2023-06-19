import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeTheme = async (theme) => {
  try {
    const themeJson = JSON.stringify(theme);
    await AsyncStorage.setItem("theme", themeJson);
  } catch (e) {
    console.log("An error occurred", e);
  }
};

export const getThemeAsync = async () => {
  try {
    const themeJson = await AsyncStorage.getItem("theme");
    return themeJson != null ? JSON.parse(themeJson) : null;
  } catch (e) {
    console.log("An error occurred", e);
  }
};

export const removeFavoriteNounours = async () => {
  try {
    await AsyncStorage.removeItem("theme");
  } catch (e) {
    console.log("An error occurred", e);
  }
};

export const clearAllStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log("An error occurred", e);
  }
};
