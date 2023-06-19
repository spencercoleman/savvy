import { NavLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';
import DeleteForm from './DeleteForm';

interface NavbarProps {
    username: string;
}

Link.defaultProps = {
    fontWeight: 500,
};

const Navbar = ({ username }: NavbarProps) => {
    return (
        <Flex gap={8} alignItems="center">
            <Link as={NavLink} to="/" aria-label="Navigate home" fontSize="3xl">
                💸
            </Link>
            <Link as={NavLink} to="budgets" aria-label="Navigate to budgets">
                Budgets
            </Link>
            <Link as={NavLink} to="expenses" aria-label="Navigate to expenses">
                Expenses
            </Link>
            {username && (
                <Box ml="auto">
                    <DeleteForm />
                </Box>
            )}
        </Flex>
    );
};

export default Navbar;
