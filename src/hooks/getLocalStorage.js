const getLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data ? data : null;
};

export default getLocalStorage;
