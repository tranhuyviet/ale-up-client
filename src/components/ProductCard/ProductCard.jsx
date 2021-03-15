import React from 'react';
import { useStyles } from './styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const ProductCard = ({ product }) => {
    const classes = useStyles();
    const { name, newPrice, oldPrice, discount, imageUrl, link, market } = product;

    return (
        <Card className={classes.card}>
            <div className={classes.cardHeader}>
                <img src={market.logo} alt="logo" height="30px" />
            </div>
            <div className={classes.mediaContainer}>
                <a href={link} target="_blank" rel="noreferrer">
                    <CardMedia image={imageUrl} title={name} className={classes.cardMedia} />
                </a>
                <Typography className={classes.discount}>
                    -{discount}
                    <span className={classes.discountPer}>%</span>
                </Typography>
            </div>
            <CardContent className={classes.cardContent}>
                <a href={link} target="_blank" rel="noreferrer" className={classes.link}>
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
