import React, { useState, CSSProperties } from 'react';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';


const FOOTER_TEXT = 'AlexRybakov ©2023';
const MENU_THEME_MODE = 'dark';
const MENU_MODE = 'inline';
const MENU_HOME_TEXT = 'На главную';
const MENU_CMDB_TEXT = 'CMDB';
const FIRST_SUB_CMDB_NAME = 'Серверы и ПК';
const SECOND_SUB_CMDB_NAME = 'Гипервизоры';
const THIRD_SUB_CMDB_NAME = 'Принтеры и МФУ';
const FOURTH_SUB_CMDB_NAME = 'Сетевые устройства';

const { Header, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const layoutStyles: CSSProperties = {
  minHeight: '100vh',
  minWidth: '100wh',
};

const headerStyles: CSSProperties = {
  padding: 0,
};

const footerStyles: CSSProperties = {
  textAlign: 'center',
};

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  action?: React.ReactNode,
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    action
  } as MenuItem;
};

const items: MenuItem[] = [
  getItem(<Link to={'/'}>{MENU_HOME_TEXT}</Link>, '1',<PieChartOutlined />),
  getItem(MENU_CMDB_TEXT, '2', <DesktopOutlined />, [
    getItem(<Link to={'/cmdb/endpoints'}>{FIRST_SUB_CMDB_NAME}</Link>, '3',),
    getItem(SECOND_SUB_CMDB_NAME, '4',),
    getItem(THIRD_SUB_CMDB_NAME, '5'),
    getItem(FOURTH_SUB_CMDB_NAME, '6' )
  ]),
];

const LayoutScreen: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  

  return (
    <Layout style={layoutStyles}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme={MENU_THEME_MODE}>
        <div>s</div>
        <Menu theme={MENU_THEME_MODE} mode={MENU_MODE} items={items}/>
      </Sider>
      <Layout>
        <Header style={headerStyles} />
        <Outlet />
        <Footer style={footerStyles}>{FOOTER_TEXT}</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutScreen;
