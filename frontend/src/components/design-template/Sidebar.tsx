import React, { FC, useState } from 'react';

import Avatar from '@atlaskit/avatar';
import HomeIcon from '@atlaskit/icon/glyph/home';
import GraphBarIcon from '@atlaskit/icon/glyph/graph-bar';
import PdfIcon from '@atlaskit/icon/glyph/pdf';
import StarFilledIcon from '@atlaskit/icon/glyph/star-filled';
import SwitcherIcon from '@atlaskit/icon/glyph/switcher';
import PeopleIcon from '@atlaskit/icon/glyph/people';
import SignOutIcon from '@atlaskit/icon/glyph/sign-out';

interface SidebarProps {
  idRol: number;
}

const Sidebar: FC<SidebarProps> = ({ idRol }) => {
  const [sidebarHovered, setSidebarHovered] = useState<boolean>(true);
  const pColor = '#44546F';
  const sColor = '#0C66E4';
  const iconSize = 'medium';

  const name = 'Santiago Sánchez';

  return (
    <div
      onMouseEnter={() => setSidebarHovered(true)}
      // onMouseLeave={() => setSidebarHovered(false)}
      className={`invisible flex flex-col bg-white justify-between ${
        sidebarHovered ? `w-[18vw]` : `w-[6vw]`
      } h-[100vh] items-center drop-shadow py-14 fixed left-0 lg:visible top-0`}
    >
      <div className="flex items-center justify-center gap-3">
        <Avatar />
        <p
          className={`${
            sidebarHovered ? 'block' : 'hidden'
          } font-bold text-xs`}
        >
          {name}
        </p>
      </div>
      <div className="flex flex-col justify-between items-center gap-10">
        <button className="bg-[#E9F2FF] p-1 flex justify-center items-center rounded-md">
          <HomeIcon
            label="home"
            primaryColor={sColor}
            size={iconSize}
          />
        </button>
        <button>
          <GraphBarIcon
            label="graph"
            primaryColor={pColor}
            size={iconSize}
          />
        </button>
        <button>
          <PdfIcon
            label="pdf"
            primaryColor={pColor}
            size={iconSize}
          />
        </button>
        <button>
          <StarFilledIcon
            label="star"
            primaryColor={pColor}
            size={iconSize}
          />
        </button>
        {(idRol === 1 || idRol === 3) && (
          <button>
            <SwitcherIcon
              label="switcher"
              primaryColor={pColor}
              size={iconSize}
            />
          </button>
        )}
        {idRol === 1 && (
          <button>
            <PeopleIcon
              label="people"
              primaryColor={pColor}
              size={iconSize}
            />
          </button>
        )}
      </div>
      <button>
        <SignOutIcon
          label="signOut"
          primaryColor={pColor}
          size={iconSize}
        />
      </button>
    </div>
  );
};

export default Sidebar;
