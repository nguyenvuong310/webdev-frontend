import instance from './axios';

export const getScores = async (id: string) => {
  const response = await instance.get(`/scores/${id}/`);
  return response;
};

export const getTop10Scores = async (type: string) => {
  const response = await instance.get(`/scores/top10/${type}/`);
  return response;
};

export const getChart = async (typeChart: string, typeSubject: string) => {
  const response = await instance.get(
    `/scores/chart/${typeChart}/${typeSubject}/`,
  );
  return response;
};
