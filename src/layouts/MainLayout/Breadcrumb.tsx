import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PATH } from 'src/routes/path';
import { menus } from '../../routes/menus';
import { HomeOutlined } from '@ant-design/icons';

const breadcrumbNameMap: any = {};

menus.forEach((item: any) => {
  breadcrumbNameMap[`'${item.path}'`] = item.breadcrumbName;
  if (item.hasChild) {
    item.children.forEach((sub: any) => {
      breadcrumbNameMap[`'${sub.path}'`] = sub.breadcrumbName;
    });
  }
});

const BreadcrumbMenu = () => {
  const history = useHistory();

  const pathSnippets = [...location.pathname.split('/')].filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

    const getObjectPath = menus.filter((item: any) => item.path === url);

    let isDisable = false;
    if (getObjectPath[0] !== undefined) isDisable = getObjectPath[0].hasChild;
    if (breadcrumbNameMap[`'${url}'`])
      return (
        <Breadcrumb.Item key={url}>
          {isDisable ? (
            <span>{breadcrumbNameMap[`'${url}'`]}</span>
          ) : (
            <Link to={url}>{breadcrumbNameMap[`'${url}'`]}</Link>
          )}
        </Breadcrumb.Item>
      );
    return <Breadcrumb.Item key={url}></Breadcrumb.Item>;
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key={PATH.HOME} onClick={() => history.push(PATH.HOME)} className="breadcrumbMenu-item">
      <HomeOutlined />
      {/* <Link to={PATH.HOME}>{PATH.BREADCRUMB_HOME}</Link> */}
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
};

export default BreadcrumbMenu;
