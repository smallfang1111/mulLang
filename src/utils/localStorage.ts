const setLocalStorage = (key: string, val: any): void => {
  localStorage.setItem(key, JSON.stringify(val))
}

const getLocalStorage = (key: string): any => {
  return JSON.parse(localStorage.getItem(key) as string)
}

const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key)
}

export { setLocalStorage, getLocalStorage, removeLocalStorage }