import Link from 'next/link';
import styles from '../styles/Stylish.module.css';

export default function Stylish() {

    return (
        <div className={styles.purple}>
            <Link href="/">
                <h1>Home</h1>
            </Link>
            <h1>Style using CSS Modules</h1>
        </div>
    )
}