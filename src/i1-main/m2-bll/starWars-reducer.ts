import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./store";
import {AxiosResponse} from "axios";
import {starWarsAPI} from "../m3-dal/api";

const initialState = {
    _id: '',
    email: '',
    name: '',
    publicCardPacksCount: 0,
    created: new Date(),
    updated: new Date(),
    isAdmin: false,
    verified: false,
    rememberMe: false,
}
type InitialStateType = typeof initialState

type PROFILE = ReturnType<typeof profileAC>


type ActionsType = PROFILE


export const starWarsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case profileChanged:
            return {
                ...state
            }
        default:
            return state
    }
}
//ac
export const profileAC = (_id: string) => ({type: profileChanged} as const)
//tc
export const getFilmsTC = ():ThunkType => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
    // dispatch(packsLoaderAC(true))
    starWarsAPI.getFilms()
        .then((res:AxiosResponse<any>) => {
            debugger
            // dispatch(cardPacksAC(res.data.cardPacks))
        })
        .catch((err) => {
            debugger

        })
        .finally(() => {
            // dispatch(packsLoaderAC(false))
        })
}

const profileChanged = 'profileChanged'

type ThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>