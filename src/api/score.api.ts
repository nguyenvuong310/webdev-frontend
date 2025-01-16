import instance from './axios';

export const getScores = async (id: string) => {
  const response = await instance.get(`/scores/${id}`);
  return response;
};

export const getTop10Scores = async (type: string) => {
  const response = await instance.get(`/scores/students/top10?type=${type}`);
  return response;
};

export const getChart = async (typeChart: string, typeSubject: string) => {
  const response = await instance.get(
    `/scores/subject/chart?typeChart=${typeChart}&&typeSubject=${typeSubject}`,
  );
  return response;
};
