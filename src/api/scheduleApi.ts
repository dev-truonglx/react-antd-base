import Api from './config';
export const getSchedule = async (params: any) => {
  const response = await Api.get('lessons-schedule', { params });
  return response.data;
};

export const getDetailSchedule = async (id: string, abc: string) => {
  const response = await Api.get(`lesson-time/${id}/${abc}`);
  return response.data;
};
