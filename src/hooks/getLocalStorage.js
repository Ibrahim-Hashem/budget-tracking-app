const getLocalStorage = (key) => {
  if (key) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      return [];
    }
  }
};

export default getLocalStorage;
