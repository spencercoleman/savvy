import { useRef } from 'react';
import { Form, redirect } from 'react-router-dom';
import { deleteItem } from '../utils/helpers';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    Icon,
    Text,
    useDisclosure,
    useToast,
} from '@chakra-ui/react';
import { BiTrash } from 'react-icons/bi';

export const deleteFormAction = () => {
    deleteItem({ key: 'savvy_username' });
    return redirect('/');
};

const DeleteForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef(null);
    const toast = useToast();

    return (
        <>
            <Button
                colorScheme="red"
                onClick={onOpen}
                display="flex"
                gap={1}
                size={{ base: 'sm', md: 'md' }}
            >
                <Icon as={BiTrash} boxSize={5} />
                <Text display={{ base: 'none', md: 'inline-block' }}>
                    Delete Account
                </Text>
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
                            <Form
                                method="post"
                                action="/delete"
                                onSubmit={() =>
                                    toast({
                                        description:
                                            'You deleted your account.',
                                        status: 'info',
                                        duration: 3000,
                                    })
                                }
                            >
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
