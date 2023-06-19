import { Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

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
                <Link as={NavLink} to="/" ml="auto">
                    Logout
                </Link>
            )}
        </Flex>
    );
};

export default Navbar;
