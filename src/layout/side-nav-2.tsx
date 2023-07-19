import './style.css';

import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, theme } from 'antd';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { Dashboard } from '../dashboard/dashboard';
import { Mentor } from '../mentor';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Mentor', '2', <DesktopOutlined />),
];

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const SideNav2: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [menuValue, setMenuValue] = useState<string>('1');

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [width] = useWindowSize();

    useEffect(() => {
        if (width > 800) {
            setCollapsed(false)
            return
        } else {
            setCollapsed(true)
            return
        }
    }, [width])


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />

                {collapsed ? (
                    <div className=''>
                        <img className='side-nav-mobile-logo' src='/images/logo1.png' alt=''></img>
                    </div>
                ) : (
                    <div className='side-nav-logo'>
                        <img src='/images/c2i-logo-blue.png' alt=''></img>
                    </div>
                )}

                <Menu theme="dark" onClick={(e) => setMenuValue(e?.key)} defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>

            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    {menuValue === '1' ? (
                        <Dashboard />
                    ) : (
                        <Mentor />
                    )}

                </Content>
                <Footer style={{ textAlign: 'center' }}>C2I Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>

    )
};

export default SideNav2;