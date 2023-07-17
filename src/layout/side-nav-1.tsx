import './style.css';
import { UserOutlined, VideoCameraOutlined, DashboardOutlined } from '@ant-design/icons';
import { Layout, Menu, Space } from 'antd';
import React from 'react';
import { Dashboard } from '../dashboard/dashboard';


const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#ffffff',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '100vh',
    color: '#fff',
    backgroundColor: '#3ba0e9',
    height: '100%',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const SideNav: React.FC = () => (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
            <Sider style={siderStyle}>
                <Menu mode="inline" className='side-menu-style'>
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        Mentor
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout>
                <Header style={headerStyle}>Header</Header>
                <Content style={contentStyle}>

                    <Dashboard />

                </Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Layout>
    </Space>
);

export default SideNav;