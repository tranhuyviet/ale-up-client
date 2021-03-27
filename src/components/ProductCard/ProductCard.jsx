import React from 'react';
import { useStyles } from './styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import noImage from '../../images/placeholder.png';

const ProductCard = ({ product }) => {
    const classes = useStyles();
    const { name, newPrice, oldPrice, discount, imageUrl, link, market } = product;

    return (
        <Card className={classes.card}>
            <div className={classes.cardHeader}>
                <img src={market.logo} alt="logo" height="30px" className={classes.logo} />
            </div>
            <div className={classes.mediaContainer}>
                <a href={link} target="_blank" rel="noreferrer">
                    <CardMedia
                        image={imageUrl || noImage}
                        title={name}
                        className={classes.cardMedia}
                        // onClick={() => {
                        //     window.location.href = link;
                        //     // window.open(link);
                        // }}
                    />
                </a>
                <Typography className={classes.discount}>
                    -{discount}
                    <span className={classes.discountPer}>%</span>
                </Typography>
            </div>
            <CardContent className={classes.cardContent} classes={{ root: classes.cardContentRoot }}>
                <a href={link} className={classes.link} target="_blank" rel="noreferrer">
                    <Typography className={classes.name}>{name}</Typography>
                </a>
                <div className={classes.priceContainer}>
                    <span className={classes.newPrice} component="span">
                        €{newPrice}
                    </span>
                    <span className={classes.oldPrice}>€{oldPrice}</span>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
