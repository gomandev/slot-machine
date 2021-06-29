import { FC } from 'react';
import { Transition, animated } from 'react-spring';

interface IProps {
  total: number;
  winnerLine: number;
}

const WinnerSign: FC<IProps> = ({ total, winnerLine }: IProps) => {
  let sign: unknown = '';
  if (total) {
    sign = <h2>Winner: {total} coins!</h2>;
  }

  return (
    <Transition
      native
      items={winnerLine}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {(styles, items) =>
        items && (
          <animated.div style={styles} className=" tc">
            <div className="winner-sign">{sign}</div>
          </animated.div>
        )
      }
    </Transition>
    // <div className="winner-sign">hello</div>
  );
};
export default WinnerSign;
