import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
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

  function selectedClient(client: Client) {
    console.log(`Edit ${client.name}`)
  }

  function deletedClient(client: Client) {
    console.log(`Delete ${client.name}`)
  }

  function saveClient(client: Client) {
    console.log(client);
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Simple Registration">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" color="green"
                onClick={() => setVisible('form')}>
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}></Table>
          </>
        ) : (
          <Form client={clients[2]}
            clientChanged={saveClient}
            onCancel={() => setVisible('table')} />
        )}
      </Layout>
    </div>
  )
}
