import { useState } from "react";

export default function useTableOrForm() {
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const displayForm = () => setVisible('form');
  const displayTable = () => setVisible('table');

  return {
    formVisible: visible === 'form',
    tableVisible: visible === 'table',
    displayForm,
    displayTable
  }
}