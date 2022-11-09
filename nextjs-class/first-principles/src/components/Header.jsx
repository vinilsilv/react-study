export default function Header(props) {
    const title = props.title + "!"
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}