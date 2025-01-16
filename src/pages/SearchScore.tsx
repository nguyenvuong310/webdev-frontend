import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { useState } from 'react';

import { getScores } from '../api/score.api';
import ScoreDetail from '../components/Score/ScoreDetail';
import { IScore } from '../types/score';

const SearchScores = () => {
  const [score, setScore] = useState<IScore>({
    studentRegistrationNo: '',
    math: 0,
    literature: 0,
    language: 0,
    physics: 0,
    chemistry: 0,
    biology: 0,
    history: null,
    geography: null,
    civic_education: null,
    language_code: '',
  });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [registrationNo, setRegistrationNo] = useState<string>('');

  async function SearchScores(id: string): Promise<void> {
    const reposone = await getScores(id);
    if (reposone.status !== 200) {
      setIsLoaded(false);
    }
    const data: IScore = reposone.data.data;
    setIsLoaded(true);
    setScore(data);
  }

  return (
    <>
      <Breadcrumb pageName="SearchScores" />

      <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            <b>User Registration</b>
          </h3>
        </div>
        <div className="flex flex-col p-4 md:p-6 xl:p-9 space-y-2">
          <p>Registration Number:</p>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Enter registration number"
              className="border-2 focus:ring-0 p-2 rounded-sm w-1/4"
              onChange={(e) => setRegistrationNo(e.target.value)}
            />
            <button
              className="inline-flex items-center justify-center rounded-md bg-black py-2 px-4 text-center font-medium text-white hover:bg-opacity-90"
              onClick={(_e: React.MouseEvent<HTMLButtonElement>) => {
                SearchScores(registrationNo);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="mb-10 py-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            <b>Detailed Score</b>
          </h3>
        </div>
        <div className="px-7 py-4">
          {!isLoaded ? "Don't have data" : <ScoreDetail score={score} />}
        </div>
      </div>
    </>
  );
};

export default SearchScores;
