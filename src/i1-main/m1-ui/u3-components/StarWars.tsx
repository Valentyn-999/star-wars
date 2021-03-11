import React, {ChangeEvent, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getFilmsTC} from "../../m2-bll/starWars-reducer";



export const StarWars = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFilmsTC())
    },[])


    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value
        console.log(inputValue)
    }

    const searchButtonHandler = () => {

    }

    return <>
        <div>
            <input type="text" onChange={searchInputHandler}/>
            <button onClick={searchButtonHandler}>Search</button>
        </div>
    </>
}