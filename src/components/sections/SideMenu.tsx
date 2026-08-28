import TabButton from "../buttons/TabButton";

import "../../css/sections/SideMenu.css";

function SideMenu() {
  return (
    <div className="sidemenu">
      <div className="sidemenu-container">
        <TabButton name="Calendar" icon="app/calendar" />
        <TabButton name="Categories" icon="app/cog" />
        <TabButton name="Settings" icon="app/cog" />
      </div>
    </div>
  );
}

export default SideMenu;
