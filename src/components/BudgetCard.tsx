import {
    Budget,
    fetchSpentAmount,
    formatCurrencyAmount,
} from '../utils/helpers';
import {
    Card,
    CardBody,
    Progress,
    Heading,
    Flex,
    Text,
    Stack,
} from '@chakra-ui/react';

interface BudgetCardProps {
    budget: Budget;
}

const BudgetCard = ({ budget }: BudgetCardProps) => {
    const { amount, name } = budget;
    const spentAmount = fetchSpentAmount(budget.id);

    return (
        <Card variant="filled">
            <CardBody>
                <Stack spacing={4}>
                    <Heading size="md">{name}</Heading>
                    <Progress max={amount} />
                    <Flex justifyContent="space-between" gap={2}>
                        <Text>{formatCurrencyAmount(spentAmount)} spent</Text>
                        <Text>of {formatCurrencyAmount(amount)}</Text>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default BudgetCard;
