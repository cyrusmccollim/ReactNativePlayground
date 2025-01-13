let isDarkMode = true;
const setDarkMode = (updateTo : boolean) : void => {isDarkMode = updateTo}

enum Scheme { light = '#e8e8e8', dark = '#1c1c1c' }
const schemeTextStyle = (flip : boolean) : {} => { return { color: (flip? !isDarkMode : isDarkMode)? Scheme.light : Scheme.dark } }
const schemeBgStyle = (flip : boolean) : {} => { return { backgroundColor: (flip? !isDarkMode : isDarkMode)? Scheme.dark : Scheme.light } }
const schemeShadowStyle = (flip : boolean) : {} => { return { shadowColor: (flip? !isDarkMode : isDarkMode)? Scheme.light : Scheme.dark } }
const schemeColor = (flip : boolean) : string => { return (flip? !isDarkMode : isDarkMode)? Scheme.dark : Scheme.light }

export {
    setDarkMode,
    schemeTextStyle,
    schemeBgStyle,
    schemeColor,
    schemeShadowStyle,
    isDarkMode
}