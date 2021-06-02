import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        minHeight: 700
    },
    media: {
        height: 300,
      }
});

const Products = ({ product }) => {

    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <a href={product.link}>
                        <CardMedia className={classes.media}
                        component="img"
                        alt={product.asin}
                        image={product.img}
                        title={product.bsr_category} />
                    </a>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.bsr_category}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="large" color="primary">
                        Price {product.price}
                    </Button>
                </CardActions>
            </Card>

        </>
    )
}

export default Products