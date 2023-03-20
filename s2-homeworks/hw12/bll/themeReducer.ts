const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: TChangeThemeId): TInitState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId:action.id }

        default:
            return state
    }
}
type TInitState = {
    themeId: number
}
type TChangeThemeId = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
