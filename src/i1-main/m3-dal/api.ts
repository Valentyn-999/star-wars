import axios from "axios";

export type StarWarDataType = {
    films: string
    people: string
    planets: string
    species: string
    starships: string
    vehicles: string
}
const instance = axios.create ({
    baseURL: 'https://swapi.dev/api/',
    // withCredentials: true,
    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     Accept: 'application/json',
    //     'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
    //     'Content-Type': 'application/json',
    //     // 'Access-Control-Allow-Headers': 'Accept',
    //     'Access-Control-Allow-Methods': 'GET',
    //     mode: 'no-cors'
    // },
    headers: {
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        // 'Access-Control-Allow-Origin': 'http://localhost:3000/',
        // 'Access-Control-Request-Headers': 'origin, x-requested-with'
        // ' Access-Control-Allow-Origin': 'origin',
        // 'Access-Control-Allow-Origin': null,
        'Content-Type': 'application/json',
        Vary: 'Accept',
        'Allow': ['GET', 'HEAD', 'OPTIONS'],
        'crossDomain': true,



    },


})


export const starWarsAPI = {
    getFilms() {
        debugger
        return instance.get<string>(`films/`)

    }
}