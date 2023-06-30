import React, { useState } from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Conversations from '../Conversations/Conversations';
import Contacts from '../Contacts/Contacts';
import NewConversationsModal from '../NewConversationsModal/NewConversationsModal';
import NewContactsModal from '../NewContactsModal/NewContactsModal';

const CONVERSATIONSKEY = 'conversations';
const CONTACTSKEY = 'contacts';


const Sidebar = ({ id }) => {
    const [activeKey, setActiveKey] = useState(CONVERSATIONSKEY)
    const conversationsOpen = activeKey === CONVERSATIONSKEY;
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div style={{width: '250px'}} className='d-flex flex-column'>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONSKEY}>Converstions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTSKEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="border-right flex-grow-1 overflow-auto">
                    <Tab.Pane eventKey={CONVERSATIONSKEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTSKEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-right small">
                    Your ID: <span className="text-muted">{id}</span>
                </div>
                <Button onClick={() => setModalOpen(true)} className="rounded-0">
                    New {conversationsOpen ? 'Conversation' : 'Contact'}
                </Button>
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ? 
                    <NewConversationsModal closeModal={closeModal} /> :
                    <NewContactsModal  closeModal={closeModal} />
                }
            </Modal>
        </div>
    )
}

export default Sidebar
