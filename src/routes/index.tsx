import React from 'react';
import { Switch } from 'react-router-dom';
import GuestLayout from 'src/layouts/GuestLayout';
import MainLayout from 'src/layouts/MainLayout';
import About from 'src/pages/about';
import Login from 'src/pages/auth/Login';
import PageNotFound from 'src/pages/errors/PageNotFound';
import ServerError from 'src/pages/errors/ServerError';
import Profile from 'src/pages/profile';
import ListSchedule from 'src/pages/schedule/List';
import DetailSchedule from 'src/pages/schedule/Detail';
import { RouteLayout } from '../components/router/RouteLayout';
import Home from '../pages/home';
import { PATH } from './path';

export const RootRouter = React.memo(() => {
  return (
    <Switch>
      <RouteLayout path={PATH.LOGIN} component={Login} layout={GuestLayout} isPrivate={false} exact />
      <RouteLayout path={PATH.HOME} component={Home} layout={MainLayout} exact />
      <RouteLayout path={PATH.ABOUT} component={About} layout={MainLayout} exact />
      <RouteLayout path={PATH.PROFILE} component={Profile} layout={MainLayout} exact />
      <RouteLayout path={PATH.SCHEDULE_LIST} component={ListSchedule} layout={MainLayout} exact />
      <RouteLayout path={PATH.SCHEDULE_DETAIL} component={DetailSchedule} layout={MainLayout} exact />

      <RouteLayout path={PATH.PAGE_404} component={PageNotFound} layout={GuestLayout} isPrivate={false} exact />
      <RouteLayout path={PATH.PAGE_500} component={ServerError} layout={GuestLayout} isPrivate={false} exact />
      <RouteLayout path="*" component={PageNotFound} layout={GuestLayout} isPrivate={false} exact />
    </Switch>
  );
});
