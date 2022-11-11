import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Stylish.module.css';

export default function Stylish() {

    return (
        <Layout title="CSS Modularized example">
            <div className={styles.purple}>
                <h1>Style using CSS Modules</h1>
            </div>
        </Layout>
    )
}