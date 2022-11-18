import { useState } from 'react';
import Layout from '../components/Layout';

export default function Integration() {

    const [code, setCode] = useState(1)
    const [client, setClient] = useState({})

    async function getClient() {
        const res = await fetch(`http://localhost:3000/api/clients/${code}`)
        const data = await res.json()
        setClient(data)

        // fetch(`http://localhost:3000/api/clients/${code}`)
        //     .then(res => res.json())
        //     .then(data => setClient(data))
    }

    return (
        <Layout>
            <div>
                <input type="number" value={code}
                    onChange={e => setCode(e.target.value)} />
                <button onClick={getClient}>Get client</button>
            </div>
            <ul>
                <li>Code: {client.id}</li>
                <li>Name: {client.name}</li>
                <li>Email: {client.email}</li>
            </ul>
        </Layout>
    )
}