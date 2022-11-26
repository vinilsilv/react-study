import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientCollection";
import Client from "../core/Client";
import ClientRepo from "../core/ClientRepo";
import useTableOrForm from "./useTableOrForm";

export default function useClients() {
  const repo: ClientRepo = new ClientCollection();

  const { formVisible, tableVisible, displayForm, displayTable } = useTableOrForm()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      displayTable()
    })
  }

  function selectClient(client: Client) {
    setClient(client);
    displayForm()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    displayTable()
  }

  function newClient() {
    setClient(Client.empty())
    displayForm()
  }

  return {
    tableVisible,
    formVisible,
    client,
    clients,
    deleteClient,
    newClient,
    saveClient,
    selectClient,
    getAll,
    displayTable
  }
}