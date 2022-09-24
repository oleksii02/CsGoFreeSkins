import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard(props) {



    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt={props.alt}
                height="140"
                image={props.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.name + ' '}
                    <Button href={props.href} target="_blank" size='small' >перейти</Button>
                </Typography>
                <Typography style={{height: 100}} variant="body2" color="text.secondary">
                    <p>{props.info}</p>
                </Typography>
            </CardContent>
            <CardActions >
                <p style={{paddingBottom :4, marginLeft: 7}} >Код:</p>
                <input style={{margin:3, padding:1}} value={props.promo} />
            </CardActions>
        </Card>
    );
}
