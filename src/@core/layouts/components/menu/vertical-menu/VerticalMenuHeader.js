// ** React Imports
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

// ** Icons Imports
import { Circle, Disc, X } from "react-feather";

// ** Config
import themeConfig from "@configs/themeConfig";

// ** Utils
import { useSkin } from "@hooks/useSkin";
import { getHomeRouteForLoggedInUser, getUserData } from "@utils";

const VerticalMenuHeader = (props) => {
  // ** Props
  const {
    menuCollapsed,
    setMenuCollapsed,
    setMenuVisibility,
    setGroupOpen,
    menuHover,
  } = props;

  // ** Vars
  const user = getUserData();
  const { skin, setSkin } = useSkin();

  // ** Reset open group
  useEffect(() => {
    if (!menuHover && menuCollapsed) setGroupOpen([]);
  }, [menuHover, menuCollapsed]);

  const setColor = (skin) => {
    if (skin === "dark" || skin === "semi-dark") {
      return "#FFF";
    } else {
      return "#000";
    }
  };

  const setTextColor = (skin) => {
    if (skin === "dark" || skin === "semi-dark") {
      return "text-white";
    } else {
      return;
    }
  };

  // ** Menu toggler component
  const Toggler = ({skin}) => {
    
    if (!menuCollapsed) {
      return (
        <Disc
          size={20}
          color={setColor(skin)}
          data-tour="toggle-icon"
          className="text-primary toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(true)}
        />
      );
    } else {
      return (
        <Circle
          size={20}
          color={setColor(skin)}
          data-tour="toggle-icon"
          className="text-primary toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(false)}
        />
      );
    }
  };

  return (
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item me-auto">
          <NavLink
            to={user ? getHomeRouteForLoggedInUser(user.role) : "/"}
            className="navbar-brand"
          >
            <span className="brand-logo">
              <img src={themeConfig.app.appLogoImage} alt="logo" />
            </span>
            <h2 className={`brand-text mb-0  ${setTextColor(skin)}`}>
              {themeConfig.app.appName}
            </h2>
          </NavLink>
        </li>
        <li className="nav-item nav-toggle">
          <div className="nav-link modern-nav-toggle cursor-pointer">
            <Toggler skin={skin}/>
            <X
              onClick={() => setMenuVisibility(false)}
              className="toggle-icon icon-x d-block d-xl-none"
              size={20}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default VerticalMenuHeader;
