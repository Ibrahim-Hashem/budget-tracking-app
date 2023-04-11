import getLocalStorage from './getLocalStorage';

const setLocalStorage = (key, data) => {
  const previousData = getLocalStorage(key);
  const newData = previousData !== null ? previousData + data : data;
  localStorage.setItem(key, JSON.stringify(newData));
};

export default setLocalStorage;
