import React from 'react';

import SidebarMenuImage from '../../assets/sidebar.png'
import { Image } from '@chakra-ui/react';

const Sidebar = () => {
    return (
        <div>
            <Image src={SidebarMenuImage} />
        </div>
    );
}

export default Sidebar;
