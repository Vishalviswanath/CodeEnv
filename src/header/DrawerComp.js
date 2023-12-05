import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// const sampleLists = ['Products', 'Solutions', 'Pricing', 'Eenterprise'];
const DrawerComp = ({ links }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {links.map((items, index) => (
            <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
              <ListItemText>{items}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(true)} sx={{ ml: 'auto' }}>
        <MenuOpenIcon color='black' />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
