import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    n = parseInt(n)
    if (n < 0) return -1
    if (n == 0) return 1

    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])
    // setFatorial(calcFatorial(number))

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01 " />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === 1 ? 'Nao existe' : fatorial}</span>
                </div>
                <input type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="input" />
            </div>

            <SectionTitle title="Exercicio #02 " />
            <div className="center">

            </div>
        </div>
    )
}

export default UseEffect
