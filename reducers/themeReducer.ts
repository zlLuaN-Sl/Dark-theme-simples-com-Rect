export type ThemeState  = {
    theme: 'light' | 'dark'
}

export type ThemeAction = {
    type: 'toggleTheme'
}


export const themeReducer = (state:ThemeState, action: ThemeAction): ThemeState => {

    if(action.type === 'toggleTheme') {
        if(state.theme === 'light') {
        return {
            theme: 'dark'
        }
    } else {
        return {
            theme: 'light'
        }
    }

    }
    return state;
}