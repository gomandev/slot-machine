import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

interface IProps {
  disabled: boolean;
  onClick: () => void;
}

const Spinner: FC<IProps> = ({ disabled, onClick }: IProps) => {
  const classes = useStyles();
  return (
    <td>
      <div>
        <Fab
          id="repeatButton"
          disabled={disabled}
          onClick={onClick}
          variant="extended"
          aria-label="delete"
          className={classes.fab}
        >
          Spin
        </Fab>
      </div>
    </td>
  );
};

export default Spinner;
