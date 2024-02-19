import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Collection = () => {
    return (
        <div className='mx-auto w-3/4 mt-4 gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
             <div>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200, '&:hover': { transform: 'scale(1.2)' }, transition: 'transform 0.5s ease' } }
        image="https://i.ibb.co/RH4NHr0/photo-1543322748-33df6d3db806.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button  className='btn btn-secondary' size="small">MEN</Button>
        
      </CardActions>
    </Card>
             </div>

             <div>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200, '&:hover': { transform: 'scale(1.2)' }, transition: 'transform 0.5s ease' } }
        image="https://i.ibb.co/Zchkm5q/istockphoto-854321536-170667a.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='btn btn-secondary' size="small">WOMEN</Button>
        
      </CardActions>
    </Card>
             </div>
             <div>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200, '&:hover': { transform: 'scale(1.2)' }, transition: 'transform 0.6s ease' }}
        image="https://i.ibb.co/RH4NHr0/photo-1543322748-33df6d3db806.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='btn btn-secondary' size="small">ACCESSORIES</Button>
        
      </CardActions>
    </Card>
             </div>
        </div>
    );
};

export default Collection;