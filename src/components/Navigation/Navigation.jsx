import React from "react";
import {Link, withRouter} from "react-router-dom";
import { withStyles, createStyles } from "@material-ui/core/styles";
import {AppBar, IconButton, InputBase, Toolbar, Typography} from "@material-ui/core";
import {Menu as MenuIcon, Search as SearchIcon} from "@material-ui/icons";
import {fade} from "@material-ui/core/styles/colorManipulator";

const styles = createStyles(theme => ({
  menuButton: {
    marginLeft: -12,
      marginRight: 20,
  },
  title: {
    display: 'none',
      [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
        width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
      width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));

function Navigation(props) {
  const { classes } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="open-drawer">
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Mimir
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Rechercher un jeu..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              />
          </div>
        </Toolbar>
      </AppBar>
      <h1>MIMIR</h1>

      <ul>
        <li><Link to="/">Portail</Link></li>
        <li><Link to="/players">Registre des Joueurs</Link></li>
        <li><Link to="/games">Explorateur de jeux</Link></li>
        <li><Link to="/sessions">Sessions de jeu</Link></li>
      </ul>

      <hr />
    </>
  )
}

export default withStyles(styles)(withRouter(Navigation));
