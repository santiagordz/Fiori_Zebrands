import React, { FC } from 'react'

import Avatar from '@atlaskit/avatar';
import HomeIcon from '@atlaskit/icon/glyph/home'
import GraphBarIcon from '@atlaskit/icon/glyph/graph-bar'
import PdfIcon from '@atlaskit/icon/glyph/pdf'
import StarFilledIcon from '@atlaskit/icon/glyph/star-filled'
import SwitcherIcon from '@atlaskit/icon/glyph/switcher'
import PeopleIcon from '@atlaskit/icon/glyph/people'
import SignOutIcon from '@atlaskit/icon/glyph/sign-out'

interface SidebarProps {
  idRol : number;
}

const Sidebar: FC<SidebarProps> = ({ idRol }) => {
  return (
    <div className='flex flex-col bg-white justify-between w-[10vw] h-[100vh] items-center drop-shadow py-14'>
     <Avatar/>
     <div className='flex flex-col justify-between items-center gap-10'>
        <HomeIcon label='home' primaryColor='#44546F'/>
        <GraphBarIcon label='graph' primaryColor='#44546F'/>
        <PdfIcon label='pdf' primaryColor='#44546F'/>
        <StarFilledIcon label='star' primaryColor='#44546F'/>
        {(idRol === 1 || idRol=== 3) && <>
            <SwitcherIcon label='switcher' primaryColor='#44546F'/>
        </>
        }
        {(idRol === 1) && <>
            <PeopleIcon label='people' primaryColor='#44546F'/>
        </>
        }
     </div>
        <SignOutIcon label='signOut' primaryColor='#44546F'/>
    </div>
  )
}

export default Sidebar;