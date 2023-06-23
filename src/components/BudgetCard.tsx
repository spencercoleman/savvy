import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Progress,
    Heading,
    Flex,
    Text,
    Stack,
} from '@chakra-ui/react';

interface Budget {
    amount: number;
    createdAt: number;
    id: string;
    name: string;
}

const BudgetCard = ({ budget }: { budget: Budget }) => {
    const { amount, name } = budget;

    return (
        <Card variant="filled">
            <CardBody>
                <Stack spacing={4}>
                    <Heading size="md">{name}</Heading>
                    <Progress max={amount} />
                    <Flex justifyContent="space-between" gap={2}>
                        <Text>$0 spent</Text>
                        <Text>of ${amount}</Text>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default BudgetCard;
