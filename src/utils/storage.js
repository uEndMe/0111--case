//工具库
const localStorage = window.localStorage;
export function getItem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (e) {
    console.log(e);
    return value;
  }
}

export function setItem(key, value) {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
}

export function removeItem(key) {
  localStorage.removeItem(key);
}

