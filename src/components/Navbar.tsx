import { NavLink } from 'react-router-dom';
import { BiCalculator, BiDollarCircle, BiColor } from 'react-icons/bi';
import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import DeleteForm from './DeleteForm';

interface NavbarProps {
    username: string;
}

Link.defaultProps = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    fontWeight: 500,
    textDecoration: 'none',
    _hover: {
        textDecoration: 'none',
    },
};

const Navbar = ({ username }: NavbarProps) => {
    return (
        <Flex justifyContent="space-between" gap={8}>
            <Link as={NavLink} to="/" aria-label="Navigate home">
                <Icon as={BiColor} boxSize={8} color="blue.500" />
                <Text
                    fontSize="2xl"
                    display={{ base: 'none', md: 'inline-block' }}
                >
                    Savvy
                </Text>
            </Link>

            {username && (
                <Link
                    as={NavLink}
                    to="budgets"
                    aria-label="Navigate to budgets"
                >
                    <Icon as={BiCalculator} boxSize={6} />
                    <Text display={{ base: 'none', md: 'inline-block' }}>
                        Budgets
                    </Text>
                </Link>
            )}
            {username && (
                <Link
                    as={NavLink}
                    to="expenses"
                    aria-label="Navigate to expenses"
                >
                    <Icon as={BiDollarCircle} boxSize={6} />
                    <Text display={{ base: 'none', md: 'inline-block' }}>
                        Expenses
                    </Text>
                </Link>
            )}
            {username && <DeleteForm />}
        </Flex>
    );
};

export default Navbar;
