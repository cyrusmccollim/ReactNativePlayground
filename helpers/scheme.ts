let isDarkMode = true;
const setDarkMode = (flag : boolean) : void => { isDarkMode = flag}

enum Scheme { light = '#e8e8e8', dark = '#1c1c1c' }
const schemeText = (flip : boolean) : {} => { return { color: (flip? isDarkMode : !isDarkMode)? Scheme.light : Scheme.dark } }
const schemeBg = (flip : boolean) : {} => { return { backgroundColor: (flip? isDarkMode : !isDarkMode)? Scheme.dark : Scheme.light } }

export {
    setDarkMode,
    schemeText,
    schemeBg,
}