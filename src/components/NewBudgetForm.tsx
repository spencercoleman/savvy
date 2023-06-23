import { Form } from 'react-router-dom';
import { BiBookAdd, BiBookAlt, BiDollar } from 'react-icons/bi';
import {
    Box,
    Button,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
} from '@chakra-ui/react';

const NewBudgetForm = () => {
    return (
        <Form method="post" action="/budgets">
            <Stack spacing={4}>
                <Box>
                    <FormLabel htmlFor="newBudgetName">Budget name</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={BiBookAlt} color="gray.500" boxSize={5} />
                        </InputLeftElement>
                        <Input
                            type="text"
                            variant="filled"
                            name="newBudgetName"
                            id="newBudgetName"
                            placeholder="e.g. Travel"
                            required
                        />
                    </InputGroup>
                </Box>
                <Box>
                    <FormLabel htmlFor="newBudgetAmount">Amount</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <Icon as={BiDollar} color="gray.500" boxSize={5} />
                        </InputLeftElement>
                        <Input
                            type="number"
                            variant="filled"
                            step={0.01}
                            min={0}
                            name="newBudgetAmount"
                            id="newBudgetAmount"
                            placeholder="e.g. 100"
                            required
                            inputMode="decimal"
                        />
                    </InputGroup>
                </Box>
                <Box>
                    <Button
                        type="submit"
                        display="flex"
                        gap={1}
                        size={{ base: 'sm', md: 'md' }}
                    >
                        <Icon as={BiBookAdd} boxSize={5} />
                        Create Budget
                    </Button>
                </Box>
            </Stack>
        </Form>
    );
};

export default NewBudgetForm;
