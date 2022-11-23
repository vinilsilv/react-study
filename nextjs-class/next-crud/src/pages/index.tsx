import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Yuri', 50, '2'),
    new Client('Hans', 44, '3'),
    new Client('Karl', 24, '4'),
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Simple Registration">
        <Table clients={clients}></Table>
      </Layout>
    </div>
  )
}
