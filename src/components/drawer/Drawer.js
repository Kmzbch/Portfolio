// React
import React, {Component} from 'react'
import { Link } from "react-router-dom";


// Material-ui
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
//
import './Drawer.scss'
import DrawerItems from './DrawerItems'

export default class extends Component {
    render(){
        return (
            <Drawer
              className={'drawer'}
              variant="permanent"
              anchor="left"
            >
                <div className={'drawer-container'} >
                  {/* Full Name & Job Title */}
                  <div className={'drawer-header'}>
                    <Typography
                    className={'drawer-home'}
                    variant="h4"
                    component={Link}
                    to={'/'}
                    >
                      Kei
                      {'\n'}
                      Mizubuchi
                    </Typography>
                    <Typography>
                      Software Engineer
                    </Typography>
                  </div>
                  <Divider />
                  {/* Drawer Menu */}
                  <List>
                  {
                    DrawerItems.map((item, index) => {
                      return (
                        <ListItem
                          button
                          key={item.title}
                          component={Link}
                          to={item.url}
                          >
                          <ListItemIcon>{item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.title}
                            />
                        </ListItem>
                      )
                    })
                  }
                  </List>
                  <Divider />
                </div>
            </Drawer>
        )
    }
}
