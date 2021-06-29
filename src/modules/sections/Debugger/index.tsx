import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { lines } from 'mock/data';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

interface IProps {
  balance?: boolean;
  disabled: boolean;
  value: string;
  onChange: (event: any) => void;
  name: string;
  position: string;
}

const DebuggerY: FC<IProps> = ({
  disabled,
  position,
  value,
  onChange,
  name,
}: IProps) => {
  const classes = useStyles();
  return (
    <form className="">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">{position}</InputLabel>
        <Select
          disabled={disabled}
          value={value}
          onChange={onChange}
          inputProps={{
            name: name,
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {lines.map((line, index) => {
            return (
              <MenuItem key={index} value={index + 1}>
                {line.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
};
export default DebuggerY;
