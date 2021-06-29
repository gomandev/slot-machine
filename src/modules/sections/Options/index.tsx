import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { marks } from 'mock/data';

const useStyles = makeStyles(theme => ({
  root: {
    //   width: 200,
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    height: theme.spacing(0.5),
  },
  label: {
    fontSize: '0.1rem',
  },
}));

interface IProps {
  disabled: boolean;
  onChange: any;
  value?: string;
}

const Symbols: FC<IProps> = ({ disabled, onChange }: IProps) => {
  const classes = useStyles();

  return (
    <div className={'dt pl3 pr4 pt4 v-mid sliders ' + classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        {/* {props.name} */}
      </Typography>
      <Slider
        onChange={onChange}
        disabled={disabled}
        defaultValue={1}
        aria-labelledby="discrete-slider-always"
        valueLabelDisplay="on"
        step={1}
        marks={marks}
        min={1}
        max={5}
      />
    </div>
  );
};
export default Symbols;
