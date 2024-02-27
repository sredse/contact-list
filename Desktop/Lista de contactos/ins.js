// Lista de contactos con datos predefinidos
const contacts = [
{ name: "Erick Serna" },
{ name: "Jose Armando" },
{ name: "Jaider herrera" },
];

// Función para añadir un nuevo contacto a la lista
function addContact(newContact) {
contacts.push(newContact);
}

// Función para borrar un contacto existente de la lista
function deleteContact(contactToDelete) {
const index = contacts.indexOf(contactToDelete);
if (index !== -1) {
    contacts.splice(index, 1);
}
}

// Función para imprimir en consola los contactos presentes en la lista
function printContacts() {
console.log("Contactos:");
contacts.forEach((contact) => {
    console.log(contact.name);
});
}

// Ejemplo de uso
addContact({ name: "Alice Johnson" });
printContacts(); // Imprime 'Contactos: John Doe Jane Smith Mike Johnson Alice Johnson'

deleteContact(contacts[1]);
printContacts(); // Imprime 'Contactos: John Doe Mike Johnson Alice Johnson'
