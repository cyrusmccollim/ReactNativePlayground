let isDarkMode = true;
const setDarkMode = (flag : boolean) : void => { isDarkMode = flag}

enum Scheme { light = '#e8e8e8', dark = '#1c1c1c' }
// const schemeTextStyle = (flip : boolean) : {} => { return { color: (flip? !isDarkMode : isDarkMode)? Scheme.light : Scheme.dark } }
// const schemeBgStyle = (flip : boolean) : {} => { return { backgroundColor: (flip? !isDarkMode : isDarkMode)? Scheme.dark : Scheme.light } }
const schemeColor = (flip : boolean) : string => { return (flip? !isDarkMode : isDarkMode)? Scheme.dark : Scheme.light }

export {
    setDarkMode,
    // schemeTextStyle,
    // schemeBgStyle,
    schemeColor,
    isDarkMode
}