import { NavLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';
import DeleteForm from './DeleteForm';

interface NavbarProps {
    username: string;
}

Link.defaultProps = {
    fontWeight: 500,
    textDecoration: 'none',
    _hover: {
        textDecoration: 'none',
    },
};

const Navbar = ({ username }: NavbarProps) => {
    return (
        <Flex alignItems="center" gap={8}>
            <Link as={NavLink} to="/" aria-label="Navigate home" fontSize="3xl">
                💸
            </Link>

            {username && (
                <Flex alignItems="center" gap={8} grow={1}>
                    <Link
                        as={NavLink}
                        to="budgets"
                        aria-label="Navigate to budgets"
                    >
                        Budgets
                    </Link>
                    <Link
                        as={NavLink}
                        to="expenses"
                        aria-label="Navigate to expenses"
                    >
                        Expenses
                    </Link>
                    <Box ml="auto">
                        <DeleteForm />
                    </Box>
                </Flex>
            )}
        </Flex>
    );
};

export default Navbar;
