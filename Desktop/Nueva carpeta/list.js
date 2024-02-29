// Lista de contactos con datos predefinidos
const contacts = [
    {
      id: 1,
      name: "Erick Serna",
      lastName: "Serna",
      phone: "123-456-7890",
      location: "New York",
      city: "Brooklyn",
      address: "123 Main St"
    },
    {
      id: 2,
      name: "Jose Armando",
      lastName: "Armando",
      phone: "098-765-4321",
      location: "California",
      city: "Los Angeles",
      address: "456 Second Ave"
    },
    {
      id: 3,
      name: "Jaider herrera",
      lastName: "Herrera",
      phone: "555-555-5555",
      location: "Texas",
      city: "Houston",
      address: "789 Third St"
    },
  ];
  
  // Función para añadir un nuevo contacto a la lista
  function addContact(newContact) {
    contacts.push({
      id: generateId(),
      name: newContact.name,
      lastName: newContact.lastName,
      phone: newContact.phone,
      location: newContact.location,
      city: newContact.city,
      address: newContact.address
    });
  }
  
  // Función para generar un nuevo ID para un contacto
  function generateId() {
    return contacts.length + 1;
  }
  
  // Función para borrar un contacto existente de la lista
  function deleteContact(contactToDelete) {
    const index = contacts.indexOf(contactToDelete);
    if (index !== -1) {
      contacts.splice(index, 1);
    }
  }
  
  // Función para actualizar un contacto existente en la lista
  function updateContact(contactToUpdate) {
    const index = contacts.findIndex(contact => contact.id === contactToUpdate.id);
    if (index !== -1) {
      contacts[index] = {
        id: contactToUpdate.id,
        name: contactToUpdate.name,
        lastName: contactToUpdate.lastName,
        phone: contactToUpdate.phone,
        location: contactToUpdate.location,
        city: contactToUpdate.city,
        address: contactToUpdate.address
      };
    }
  }
  
  // Función para imprimir en consola los contactos presentes en la lista
  function printContacts() {
    console.log("Contactos:");
    contacts.forEach((contact) => {
      console.log(`${contact.id}: ${contact.name} ${contact.lastName} - ${contact.phone} - ${contact.location}, ${contact.city}, ${contact.address}`);
    });
  }
  
  // Ejemplo de uso
  addContact({
    name: "Alice Johnson",
    lastName: "Johnson",
    phone: "555-555-1234",
    location: "Florida",
    city: "Miami",
    address: "321 Fourth Ave"
  });
  
  printContacts(); // Imprime 'Contactos: 1: Erick Serna Serna - 123-456-7890 - New York, Brooklyn, 123 Main St 2: Jose Armando Armando - 098-765-4321 - California, Los Angeles, 456 Second Ave 3: Jaider herrera Herrera - 555-555-5555 - Texas, Houston, 789 Third St 4: Alice Johnson Johnson - 555-555-1234 - Florida, Miami, 321 Fourth Ave'
  
  deleteContact(contacts[1]);
  
  printContacts(); // Imprime 'Contactos: 1: Erick Serna Serna - 123-456-7890 - New York, Brooklyn, 123 Main St 3: Jaider herrera