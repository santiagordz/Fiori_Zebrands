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
  const dash = 'Dashboard';
  const metricas = 'Métricas';
  const retro = 'Mis Retrospectivas';
  const accionables = 'Mis Accionables';
  const gestionarRetrospectivas = 'Gestionar Retrospectivas';
  const adminUsuarios = 'Administrar Usuarios';
  const logOut = 'Cerrar Sesión';

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
          } font-bold text-[2vmin]`}
        >
          {name}
        </p>
      </div>
      <div className="flex flex-col justify-between items-center gap-10">
          <div>
            <button className="bg-[#E9F2FF] p-1 flex justify-center items-center rounded-md gap-5">
            <HomeIcon 
            label="home"
            primaryColor={sColor}
            size={iconSize}
            />
            <p
              className={`${
                sidebarHovered ? 'block' : 'hidden'
              } font-bold text-[2vmin]`}
            >
              {dash}
            </p>
            </button>
          </div>
          <div>
            <button className="p-1 flex justify-center items-center rounded-md gap-5">
              <GraphBarIcon
                label="graph"
                primaryColor={pColor}
                size={iconSize}
              />
              <p
                className={`${
                  sidebarHovered ? 'block' : 'hidden'
                } font-bold text-[2vmin]`}
              >
                {metricas}
              </p>
            </button>
            <div>
            <button className="p-1 flex justify-center items-center rounded-md gap-5">
              <PdfIcon
                label="pdf"
                primaryColor={pColor}
                size={iconSize}
              />
              <p
                className={`${
                  sidebarHovered ? 'block' : 'hidden'
                } font-bold text-[2vmin]`}
              >
                {retro}
              </p>
            </button>
            </div>
        </div>
        <div>
        <button className="p-1 flex justify-center items-center rounded-md gap-5">
          <StarFilledIcon
            label="star"
            primaryColor={pColor}
            size={iconSize}
          />
          <p
            className={`${
              sidebarHovered ? 'block' : 'hidden'
            } font-bold text-[2vmin]`}
          >
            {accionables}
          </p>
        </button>
        </div>
        {(idRol === 1 || idRol === 3) && (
          <div>
          <button className="p-1 flex justify-center items-center rounded-md gap-5">
            <SwitcherIcon
              label="switcher"
              primaryColor={pColor}
              size={iconSize}
            />
            <p
              className={`${
                sidebarHovered ? 'block' : 'hidden'
              } font-bold text-[2vmin]`}
            >
              {gestionarRetrospectivas}
            </p>
          </button>
          </div>
        )}
        {idRol === 1 && (
          <div>
          <button className="p-1 flex justify-center items-center rounded-md gap-5">
            <PeopleIcon
              label="people"
              primaryColor={pColor}
              size={iconSize}
            />
            <p
              className={`${
                sidebarHovered ? 'block' : 'hidden'
              } font-bold text-[2vmin]`}
            >
              {adminUsuarios}
            </p>
          </button>
          </div>
        )}
      </div>
      <div>
      <button className="p-1 flex justify-center items-center rounded-md gap-5">
        <SignOutIcon
          label="signOut"
          primaryColor={pColor}
          size={iconSize}
        />
        <p
          className={`${
            sidebarHovered ? 'block' : 'hidden'
          } font-bold text-[2vmin]`}
        >
          {logOut}
        </p>
      </button>
      </div>
    </div>
  );
};

export default Sidebar;
