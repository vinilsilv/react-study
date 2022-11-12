import Navigator from '../components/Navigator'

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navigator goTo="/stylish" text="Stylish" color="crimson" />
            <Navigator goTo="/example" text="Example" color="purple" />
            <Navigator goTo="/jsx" text="JSX" />
        </div>
    )
}