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

const buttonActiveStyles =
  'bg-[#E9F2FF] p-1 flex justify-center items-center rounded-md';

const buttonAndHover =
  'flex items-center justify-center p-1 rounded-md hover:bg-[#E9F2FF]';

const transitionWidthStyle =
  'transition-width duration-300 ease-in-out';

const transitionTextStyle =
  'transition-opacity duration-300 ease-in-out';

const Sidebar: FC<SidebarProps> = ({ idRol }) => {
  const [sidebarHovered, setSidebarHovered] =
    useState<boolean>(false);
  const pColor = '#44546F';
  const sColor = '#0C66E4';
  const iconSize = 'medium';
  const views = 'Dashboard';

  const name = 'Santiago Sánchez';

  return (
    <div
      onMouseEnter={() => setSidebarHovered(true)}
      onMouseLeave={() => setSidebarHovered(false)}
      className={`invisible flex flex-col bg-white justify-between transition-width duration-300 ease-in-out ${
        sidebarHovered ? `w-[18vw]` : `w-[6vw]`
      } h-[100vh] items-center drop-shadow py-14 fixed left-0 lg:visible top-0`}
    >
      <div className="flex items-center justify-center gap-3">
        <Avatar />
        <p
          className={`${transitionTextStyle} ${
            sidebarHovered ? 'block opacity-1' : 'hidden opacity-0'
          } font-bold text-[2vmin]`}
        >
          {name}
        </p>
      </div>
      <div className="flex flex-col justify-between items-center gap-10">
        <button
          className={`${
            views.toLowerCase() === 'dashboard'
              ? buttonActiveStyles
              : buttonAndHover
          }`}
        >
          <HomeIcon
            label="home"
            primaryColor={sColor}
            size={iconSize}
          />
        </button>
        <button className={buttonAndHover}>
          <GraphBarIcon
            label="graph"
            primaryColor={pColor}
            size={iconSize}
          />
        </button>
        <button className={buttonAndHover}>
          <PdfIcon
            label="pdf"
            primaryColor={pColor}
            size={iconSize}
          />
        </button>
        <button className={buttonAndHover}>
          <StarFilledIcon
            label="star"
            primaryColor={pColor}
            size={iconSize}
          />
        </button>
        {(idRol === 1 || idRol === 3) && (
          <button className={buttonAndHover}>
            <SwitcherIcon
              label="switcher"
              primaryColor={pColor}
              size={iconSize}
            />
          </button>
        )}
        {idRol === 1 && (
          <button className={buttonAndHover}>
            <PeopleIcon
              label="people"
              primaryColor={pColor}
              size={iconSize}
            />
          </button>
        )}
      </div>
      <button className={buttonAndHover}>
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
