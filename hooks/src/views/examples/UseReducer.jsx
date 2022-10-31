import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name || ''}</span>
                    : <span className="text">Sem usuario</span>
                }
                <span className="text">{state.number}</span>

                <div>
                    <button
                        className="btn"
                        onClick={() => numberAdd2(dispatch)}
                    >
                        +2
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberTimes7' })}
                    >
                        *7
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberDividedBy25' })}
                    >
                        /25
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberRound' })}
                    >
                        Numero inteiro
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberAdd9', payload: 9 })}
                    >
                        +9
                    </button>

                    {state.user ?
                        <button className="btn" onClick={() => dispatch({ type: 'logout' })}>Logout</button>
                        : <button className="btn" onClick={() => login(dispatch, 'Peter')}>Login</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default UseReducer
