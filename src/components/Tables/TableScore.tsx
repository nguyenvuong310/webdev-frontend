import { useEffect, useState } from 'react';
import { getTop10Scores } from '../../api/score.api';
import { IScore } from '../../types/score';
import { RowScores } from '../Score/RowScores';

interface TableScoreProps {
  GroupName: string[];
  typeName: string;
}

const TableScore: React.FC<TableScoreProps> = ({ GroupName, typeName }) => {
  const [scores, setScores] = useState<IScore[]>([]);
  useEffect(() => {
    const fetchData = async (typeName: string) => {
      try {
        const response = await getTop10Scores(typeName);
        const data: IScore[] = response.data.data;
        setScores(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(typeName);
  }, [typeName]);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top 10 of Group {typeName}
      </h4>

      <div className="sm:flex flex-col overflow-x-auto">
        <div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4 min-w-180">
          {GroupName.map((item: string, key: number) =>
            key === 0 ? (
              <div key={key} className="p-2.5 xl:p-5 min-w-32">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  {item}
                </h5>
              </div>
            ) : (
              <div key={key} className="p-2.5 text-center xl:p-5 min-w-32">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  {item}
                </h5>
              </div>
            ),
          )}
        </div>

        {scores.map((score: IScore, key: number) => (
          <div
            className={`grid grid-cols-5 min-w-180 ${
              key === scores.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <RowScores score={score} typeName={typeName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableScore;
