import getLocalStorage from './getLocalStorage';

const setLocalStorage = (key, value) => {
  const data = getLocalStorage(key);
  data.push(value);
  localStorage.setItem(key, JSON.stringify(data));
};

export default setLocalStorage;
