import Layout from "../components/Layout";

export async function getStaticProps() {
    // fetch()

    return {
        props: {
            number: Math.random()
        }
    }
}

export default function Static(props) {
    return (
        <Layout title="Static Content">
            <div>{props.number}</div>
        </Layout>
    )
}