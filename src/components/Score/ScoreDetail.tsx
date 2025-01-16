import { IScore } from '../../types/score';

interface ScoreDetailProps {
  score: IScore;
}

export const ScoreDetail = ({ score }: ScoreDetailProps) => {
  return (
    <div>
      <p>
        <b>Toán:</b> {score.math ?? 'N/A'}
      </p>
      <p>
        <b>Ngữ Văn:</b> {score.literature ?? 'N/A'}
      </p>
      <p>
        <b>Ngoại Ngữ:</b> {score.language ?? 'N/A'}
      </p>
      <p>
        <b>Vật Lí:</b> {score.physics ?? 'N/A'}
      </p>
      <p>
        <b>Hoá Học:</b> {score.chemistry ?? 'N/A'}
      </p>
      <p>
        <b>Sinh học:</b> {score.biology ?? 'N/A'}
      </p>
      <p>
        <b>Lịch sử:</b> {score.history ?? 'N/A'}
      </p>
      <p>
        <b>Địa lí:</b> {score.geography ?? 'N/A'}
      </p>
      <p>
        <b>GDCD:</b> {score.civic_education ?? 'N/A'}
      </p>
    </div>
  );
};

export default ScoreDetail;
