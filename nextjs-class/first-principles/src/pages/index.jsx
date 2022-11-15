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
            <Navigator goTo="/navigation" text="Navigation #01" color="green"/>
            <Navigator goTo="/client/sp-1/123" text="Navigation #02" color="blue"/>
            <Navigator goTo="/state" text="Component with state" color="pink"/>
        </div>
    )
}