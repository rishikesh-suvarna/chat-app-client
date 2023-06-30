import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { useContacts } from '../../Context/ContactsProvider';
import { useConversations } from '../../Context/ConversationsProvider';

const NewConversationsModal = ({ closeModal }) => {

    const { contacts } = useContacts();
    const { createConversation } = useConversations();

    const [selectedContactIds, setSelectedContactIds] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        createConversation(selectedContactIds)

        closeModal();
    }

    
    const handleCheckBoxChange = (id) => {
        setSelectedContactIds(prevSelectedContactIds =>  {
            if(prevSelectedContactIds.includes(id)){
                return prevSelectedContactIds.filter(prevId => {
                    return id !== prevId;
                })
            } else {
                return [...prevSelectedContactIds, id]
            }
        })
    }
    return (
        <>
            <Modal.Header closeButton>
                Create Conversation
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                            type="checkbox"
                            value={selectedContactIds.includes(contact.id)}
                            label={contact.name}
                            onChange={() => handleCheckBoxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}

export default NewConversationsModal
