import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  client: Client;
  clientChanged?: (client: Client) => void;
  onCancel?: () => void;
}

export default function Form(props: FormProps) {
  const id = props.client?.id ?? null
  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)

  return (
    <div>
      {id ? (
        <Input
          className="mb-4"
          readOnly
          text="Code"
          value={id} />
      ) : false}
      <Input
        className="mb-4"
        text="Name"
        valueChanged={setName}
        value={name} />
      <Input
        text="Age"
        type="number"
        valueChanged={setAge}
        value={age} />

      <div className="mt-7 flex justify-end">
        <Button color="blue" className="mr-2" 
          onClick={() => props.clientChanged?.(new Client(name, +age, id))}>
          {id ? 'Edit' : 'Save'}
        </Button>
        <Button onClick={props.onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  )
}