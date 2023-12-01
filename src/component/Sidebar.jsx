import React from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const normalLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white hover:text-black dark:text-grey-200 dark:hover:text-black hover:bg-blue-300 m-2';
  const activeLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2 bg-blue-300';

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };


  return (
    <div className="bg-blue-900 ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <React.Fragment>
          <div className="flex justify-between items-center">
            {/* ... */}
          </div>
          <TooltipComponent content="Menu" position="BottomCenter">
            {/* ... */}
          </TooltipComponent>
        </React.Fragment>
      )}
      <div className="mt-10">
        {links.map((item) => (
          <div key={item.title}>
            <p className="text-white m-3 mt-4 uppercase text-left"> {/* Add text-left class */}
              {item.title}
            </p>
            {item.links.map((Link) => (
              <NavLink
                to={`/${Link.linktitle}`}
                key={Link.linktitle}
                onClick={handleCloseSideBar}
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                <span className="text-white hover:text-black text-6xl block text-left mb-4"> {/* Add text-left class */}
                  {Link.icon}
                </span>
                <span className="text-white hover:text-black capitalize text-left"> {/* Add text-left class */}
                  {Link.name}
                </span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
