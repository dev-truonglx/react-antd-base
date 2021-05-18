interface Params {
  [key: string]: string;
}

export class PATH {
  static replaceParams(route: string, params: Params = {}) {
    let finalRoute = route;
    Object.keys(params).forEach((key) => {
      finalRoute = finalRoute.replace(`:${key}`, params[key]);
    });
    return finalRoute;
  }

  static HOME = '/';
  static USER_MANAGEMENT = '/users';
  static ABOUT = '/users/about';
  static PROFILE = '/users/profile';
  static LOGIN = '/login';
  static PAGE_404 = '/404';
  static PAGE_500 = '/500';

  //schedule list
  static SCHEDULE_MANAGEMENT = '/schedules';
  static SCHEDULE_LIST = '/schedules/list';
  static SCHEDULE_DETAIL = '/schedules/detail/:id/:abc';
}
