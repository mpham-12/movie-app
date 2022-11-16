import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function TemporaryDrawer() {
  const [state, setState] = useState(false);
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getGenres = async () => {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);

      const data = res.data;
      console.log('GENRES', data.genres)
      setGenres(data.genres);
    }
    getGenres();
  }, [])

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: 'rgba(27, 27, 27, 1)', color:'white', height:'100%' }}

    >
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} disablePadding>
            <ListItemButton onClick={() => { navigate(`/genres/${genre.id}/${genre.name}`) }}>
              <ListItemText primary={genre.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button style={{fontSize:"15px", marginRight:'20px'}} onClick={toggleDrawer('left', true)}>View Genres</Button>
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        style={{ backgroundColor: '0,0,0,0.5' }}
      >
        {list('left')}
      </Drawer>

    </div>
  );
}
