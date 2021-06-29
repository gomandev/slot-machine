import React, { FC } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

interface IProps {
  debug: (event: any) => void;
}

const Debugger: FC<IProps> = ({ debug }: IProps) => {
  return (
    <td>
      <FormControlLabel
        value="bottom"
        className="pa2 ma0 f6"
        control={<Switch color="primary" />}
        label="Debug Mode"
        onChange={debug}
        labelPlacement="bottom"
      />
    </td>
  );
};
export default Debugger;
