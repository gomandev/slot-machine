import React, { FC } from 'react';

interface IProps {
  winnerLine: any[];
}

const WinningLines: FC<IProps> = ({ winnerLine }: IProps) => {
  return (
    <div>
      <div
        className={`line3 ${
          winnerLine.includes(0) ? 'line-winner scale-up-center' : 'line '
        }`}
      />
      <div
        className={`line2 ${
          winnerLine.includes(1) ? 'line-winner scale-up-center' : 'line'
        }`}
      />
      <div
        className={`line1 ${
          winnerLine.includes(2) ? 'line-winner scale-up-center' : 'line'
        }`}
      />
    </div>
  );
};
export default WinningLines;
