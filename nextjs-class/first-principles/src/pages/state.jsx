import { useState } from "react";
import Layout from "../components/Layout";

export default function State() {

    const [number, setNumber] = useState(3)

    function increase() {
        setNumber(number + 1);
    }

    return (
        <Layout title="Component with State">
            <div>{number}</div>
            <button onClick={increase}>Increase</button>
        </Layout>
    )
}