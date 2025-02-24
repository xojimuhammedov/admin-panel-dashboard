import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
    return (
        <Box w={'100%'}>
            <Flex>
                <Sidebar />
            </Flex>
        </Box>
    );
}

export default DashboardLayout;

