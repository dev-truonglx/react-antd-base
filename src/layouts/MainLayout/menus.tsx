import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
import React from 'react';
import { PATH } from 'src/routes/path';

export const menus = [
  {
    key: PATH.HOME,
    name: 'Dashboard',
    hasChild: false,
    path: PATH.HOME,
    icon: <PieChartOutlined />,
    children: [],
    breadcrumbName: 'Dashboard',
  },
  {
    key: PATH.USER_MANAGEMENT,
    name: 'User',
    hasChild: true,
    icon: <DesktopOutlined />,
    path: PATH.USER_MANAGEMENT,
    breadcrumbName: 'Users name',
    children: [
      {
        key: PATH.PROFILE,
        name: 'Profile',
        hasChild: false,
        path: PATH.PROFILE,
        breadcrumbName: 'Profile name',
      },
      {
        key: PATH.ABOUT,
        name: 'About',
        hasChild: false,
        path: PATH.ABOUT,
        breadcrumbName: 'About name',
      },
    ],
  },
  {
    key: PATH.PAGE_404,
    name: '404',
    hasChild: false,
    path: PATH.PAGE_404,
    icon: <PieChartOutlined />,
    children: [],
    breadcrumbName: '404',
  },
];
