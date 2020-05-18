import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LightbulbIcon from '@material-ui/icons/EmojiObjectsOutlined';

import logo from '../statics/keep_logo.png';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: '#616161',
    backgroundColor: '#fff',
    zIndex: theme.zIndex.drawer + 1,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      borderRigth: 'none',
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      borderRigth: 'none',
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },

  menuItem: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,          
    fontWeight: 500,
    backgroundColor: '#feefc3',
  }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  
  // pageTitle: {
  //   fontWeight: 400,
  // },

  // menuItem: {
  //   borderTopRightRadius: 25,
  //   borderBottomRightRadius: 25,          
  //   fontWeight: 500,
  //   backgroundColor: '#feefc3',
  // }
}));

function Layout(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
  
    function toogleDrawerOpen(){
      setOpen(!open); 
    }
    return (
        <div>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={classes.appBar}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toogleDrawerOpen}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
    
              <Avatar alt="Remy Sharp" src={logo} style={{ marginRight: 15}}/>
    
              <Typography variant="h6" style= {{ fontWeight: 400 }}noWrap>
                Codifiq Keep
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}> </div>
    
            <List>
                <ListItem button style={classes.menuItem}>
                  <ListItemIcon><LightbulbIcon /></ListItemIcon>
                  <ListItemText primary="Notas" />
                </ListItem>
            </List>
    
          </Drawer>
        </div>
      );
}

export default Layout;