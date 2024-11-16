import React from 'react'
import { useContacts } from '../context/Context'
function TestPage() {
    const [contacts, setContacts] = useContacts();
    console.log(contacts);
  return (
    <div>TestPage</div>
  )
}

export default TestPage