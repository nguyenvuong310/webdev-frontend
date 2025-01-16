import { IScore } from '../../types/score';
import { GroupType } from '../../utils/const/group_type.enum';

interface RowScoresProps {
  score: IScore;
  typeName: string;
}

export const RowScores = ({ score, typeName }: RowScoresProps) => {
  return (
    <>
      <div className="items-center justify-center p-2.5 xl:p-5 min-w-32">
        <p className="text-black dark:text-white">
          {score.studentRegistrationNo}
        </p>
      </div>
      {typeName === GroupType.A00 ? (
        <>
          <div className="flex items-center justify-center">
            <p className="text-meta-5">
              {(
                (score?.chemistry ?? 0) +
                (score?.physics ?? 0) +
                (score?.math ?? 0)
              ).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.math}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.physics}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.chemistry}</p>
          </div>
        </>
      ) : typeName === GroupType.A01 ? (
        <>
          <div className="flex items-center justify-center">
            <p className="text-meta-5">
              {(
                (score?.language ?? 0) +
                (score?.physics ?? 0) +
                (score?.math ?? 0)
              ).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.math}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.physics}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.language}</p>
          </div>
        </>
      ) : typeName === GroupType.B00 ? (
        <>
          <div className="flex items-center justify-center">
            <p className="text-meta-5">
              {(
                (score?.biology ?? 0) +
                (score?.chemistry ?? 0) +
                (score?.math ?? 0)
              ).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.math}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.chemistry}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.biology}</p>
          </div>
        </>
      ) : typeName === GroupType.C00 ? (
        <>
          <div className="flex items-center justify-center">
            <p className="text-meta-5">
              {(
                (score?.literature ?? 0) +
                (score?.history ?? 0) +
                (score?.geography ?? 0)
              ).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.literature}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.history}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.geography}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <p className="text-meta-5">
              {(
                (score?.math ?? 0) +
                (score?.literature ?? 0) +
                (score?.language ?? 0)
              ).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.math}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.literature}</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-meta-3">{score.language}</p>
          </div>
        </>
      )}
    </>
  );
};
