import Layout from "../../../components/Layout";
import { useRouter } from 'next/router';
// import router from 'next/router';
// import { useEffect } from "react";

export default function ClientByCode() {
    const router = useRouter();

    // const routerVal = router.query.code
    // useEffect(() => {
    //     console.log(router.query.code)
    // }, [])

    return (
        <Layout title="Dynamic Navigation">
            <div>Company = {router.query.company}</div>
            <div>Code = {router.query.code}</div>
        </Layout>
    )
}