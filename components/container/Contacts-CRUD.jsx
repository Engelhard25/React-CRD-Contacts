import React, { useState } from 'react';
import { Contact } from '../../models/Contact';
import ContactTable from '../pure/Contact-table';
import ContactForm from '../pure/forms/ContactForm';


const ContactsCRUD = () => {

    // Create default contact
    const DefaultContact = new Contact('Default name', 'Default phone', false);

    // Update State of Contact
    const [ContactState, setConstactState] = useState([DefaultContact]);

    // Change status of contact to online or offline
    function OnlineStatus (Contact) {
        const index = ContactState.indexOf(Contact);
        const TempContact = [...ContactState];
        TempContact[index].online = !TempContact[index].online;
        setConstactState(TempContact);
    }

    // Delete Contacts
    function DeleteContact (Contact) {
        const index = ContactState.indexOf(Contact);
        const TempContact = [...ContactState];
        TempContact.splice(index,1);
        setConstactState(TempContact)
    }

    // Add Contacts
    function AddContact (Contact) {
        const TempContact = [...ContactState];
        TempContact.push(Contact);
        setConstactState(TempContact)
    }


    return (
        <div>
            <div className='card'>
                <div className='card-header p-3'>
                    <h5>Contacs list:</h5>
                </div>

                <div className='card-body' date-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '20rem'}} >
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Phone number</th>
                                <th scope='col'>Online</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ContactState.map((Contact, index) => {
                                return (
                                    <ContactTable
                                        key={index}
                                        Contact={Contact}
                                        completed={OnlineStatus}
                                        deleted={DeleteContact}
                                    ></ContactTable>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <ContactForm add={AddContact}></ContactForm>
        </div>
    );
}

export default ContactsCRUD;
