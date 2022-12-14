import Layout from "../components/Layout";

export default function JSx() {
    const title = "JSX is a central concept";

    function subtitle() {
        return <h2>{"Pretty cool".toUpperCase()}</h2>
    }

    return (
        <Layout title="Understanding JSX">
            <div>
                <h1>{title}</h1>
                {subtitle()}
                <p>
                    {JSON.stringify({ nome: 'John', age: 30 })}
                </p>
            </div>
        </Layout>
    )
}