import useLocalStorage from './useLocalStorage.js';

const useDarkMode = () => {
    const [darkModeOn,setDarkModeOn] = useLocalStorage('dark',false);

    return [darkModeOn,setDarkModeOn];
}

export default useDarkMode;