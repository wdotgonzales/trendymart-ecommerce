import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,

    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react';

import { ChakraProvider } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const Orders = () => {
    const temporaryOrderData = [
        { orderId: 374234672346, date: '07/21/2001', totalAmount: '200', status: 'Completed', modalContent: 'hakdog_1' },
        { orderId: 374234672356, date: '12/25/2025', totalAmount: '224.5', status: 'Completed', modalContent: 'hakdog_2' },
        { orderId: 374234672316, date: '12/25/2025', totalAmount: '224.5', status: 'Completed', modalContent: 'hakdog_3' }

    ];
    return <>
        <ChakraProvider>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Order ID</Th>
                            <Th>Date</Th>
                            <Th isNumeric>Total Amount</Th>
                            <Th>Status</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            temporaryOrderData.map((data) => {
                                const { isOpen, onOpen, onClose } = useDisclosure()
                                const { orderId, date, totalAmount, status, modalContent } = data;
                                return <>
                                    <Tr key={orderId}>
                                        <Td>{orderId}</Td>
                                        <Td>{date}</Td>
                                        <Td isNumeric><span className='font-bold'>${totalAmount}</span></Td>
                                        <Td><span className='font-bold text-green-600'>{status}</span></Td>
                                        <Td><Button onClick={onOpen}>Open Modal</Button></Td>
                                    </Tr>

                                    <Modal isOpen={isOpen} onClose={onClose} key={orderId}>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Modal Title</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                {modalContent}
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </>
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </ChakraProvider>
    </>
}

export default Orders;