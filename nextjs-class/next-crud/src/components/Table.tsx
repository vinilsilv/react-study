import Client from "../core/Client";
import { IconEdit, IconTrash } from "./Icons";

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void
  deletedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

  const displayActions = props.selectedClient || props.selectedClient

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Code</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {displayActions ? <th className="p-4">Actions</th> : false}
      </tr>
    )
  }

  function renderData() {
    return props.clients?.map((client: Client, i) => {
      return (
        <tr key={client.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {displayActions ? renderActions(client) : false}
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center" >
        {props.selectedClient ? (
          <button className={`
          flex justify-center items-center
          text-green-600 rounded-full
          hover:bg-purple-50 p-2 m-1
        `} onClick={() => props.selectedClient?.(client)}
          >{IconEdit}</button>
        ) : false}

        {props.deletedClient ? (
          <button className={`
          flex justify-center items-center
          text-red-600 rounded-full
          hover:bg-purple-50 p-2 m-1
        `} onClick={() => props.deletedClient?.(client)}
          >{IconTrash}</button>
        ) : false}

      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}