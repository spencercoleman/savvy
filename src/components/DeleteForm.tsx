import { useRef } from 'react';
import { Form } from 'react-router-dom';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
} from '@chakra-ui/react';

const DeleteForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef(null);

    return (
        <>
            <Button colorScheme="red" onClick={onOpen}>
                Delete Account
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete your account
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure you want to delete your account and
                            data? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Form method="post" action="/delete">
                                <Button
                                    ref={cancelRef}
                                    onClick={onClose}
                                    colorScheme="gray"
                                >
                                    Cancel
                                </Button>
                                <Button type="submit" ml={4} colorScheme="red">
                                    Delete
                                </Button>
                            </Form>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default DeleteForm;
