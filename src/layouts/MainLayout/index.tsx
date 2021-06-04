import { BackTop, Col, Layout, Row } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'src/components/common/Loading';
import { getMe } from 'src/features/auth/authenticate';
import { setIsCollapsed } from 'src/features/collapsedMenu/collapsedMenu';
import { RootState } from 'src/store';
import BreadcrumbMenu from './Breadcrumb';
import HeaderTop from './Header';
import MenuLink from './MenuLink';

const { Header, Content, Sider } = Layout;
type Props = {
  children: React.ReactNode;
};

const MainLayout: FC<Props> = (props) => {
  const collapsed = useSelector((state: RootState) => state.collapsed.isCollapsed);
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);
  const dispatch = useDispatch();

  const handleCollapse = () => {
    dispatch(setIsCollapsed());
  };

  useEffect(() => {
    if (!user) dispatch(getMe());
  }, [user]);

  if (loading || !user) return <Loading />;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider className="sidebar" collapsible collapsed={collapsed} onCollapse={handleCollapse}>
        <div className="logo">Base Reactjs</div>
        <MenuLink />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-header site-layout-background">
          <HeaderTop />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="breadcrumbMenu">
            <Row>
              <Col xs={0} sm={24} span={24}>
                <BreadcrumbMenu />
              </Col>
            </Row>
          </div>
          <div className="site-layout-background site-layout-content">{props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Created by TruongLX</Footer>
      </Layout>
      <BackTop />
    </Layout>
  );
};

export default memo(MainLayout);
