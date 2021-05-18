import { Menu } from 'antd';
import React, { memo } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { menus } from '../../routes/menus';
import './styles.scss';

const { SubMenu } = Menu;

type Props = {
  location: any;
};

const getMenuActive = (path: string) => {
  const listPath = path.split('/');
  return {
    menuActive: `/${listPath[1]}` || '/',
    subMenuActive: listPath[2],
  };
};

const MenuLink: React.FC<Props> = memo(function MenuLink({ location }) {
  const menu = getMenuActive(location.pathname);

  return (
    <Menu
      theme="dark"
      className="dashboard-menu"
      mode="inline"
      defaultSelectedKeys={[location.pathname]}
      defaultOpenKeys={[menu.menuActive]}
    >
      {menus.map((sub: any) => {
        if (sub.hasChild) {
          return (
            <SubMenu key={sub.key} className="dashboard-menu_sub" title={<span>{sub.name}</span>} icon={sub.icon}>
              {sub.children.map((item: any) => {
                if (!item.hidden)
                  return (
                    <Menu.Item key={item.key}>
                      <NavLink to={item.path} className="dashboard-menu-link">
                        <span>{item.name}</span>
                      </NavLink>
                    </Menu.Item>
                  );
              })}
            </SubMenu>
          );
        }
        return (
          <Menu.Item className="dashboard-menu-item" key={sub.key} icon={sub.icon}>
            <NavLink to={sub.path} className="dashboard-menu-link">
              <span>{sub.name}</span>
            </NavLink>
          </Menu.Item>
        );
      })}
    </Menu>
  );
});

export default withRouter(MenuLink);
