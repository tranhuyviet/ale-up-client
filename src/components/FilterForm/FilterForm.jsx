import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, FormControlLabel, FormGroup, Slide, TextField } from '@material-ui/core';
import React, { useState, useRef, useEffect } from 'react';
import { useUI } from '../../context/uiContext';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useStyles } from './styles';
import { gql, useQuery } from '@apollo/client';
import Pulse from 'react-reveal/Pulse';
import Tada from 'react-reveal/Tada';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const GET_MARKETS = gql`
    query getMarkets {
        markets {
            id
            name
            logo
        }
    }
`;

const FilterForm = ({ setVariables }) => {
    const { data, loading, error } = useQuery(GET_MARKETS);
    const classes = useStyles();
    const { filterOpen, handleFilterOpen } = useUI();
    const [name, setName] = useState('');
    // const nameRef = useRef('');
    // let initMarkets = {};
    // data.markets.forEach((mk) => {
    //     initMarkets[mk.id] = true;
    // });
    // console.log(initMarkets);
    // const [searchMarket, setSearchMarket] = useState(initMarkets);

    const handleClose = () => {
        handleFilterOpen(false);
    };

    const handleSearch = () => {
        // console.log(nameRef.current.value);
        setVariables({ name });
        handleClose();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    if (!data) return <p>Can not get data</p>;

    console.log('render filter form');

    return (
        <div>
            <Dialog
                open={filterOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                {/* <DialogTitle id="alert-dialog-slide-title">
                    <SearchOutlinedIcon />
                </DialogTitle> */}
                <div className={classes.titleContainer}>
                    <Tada forever>
                        <SearchOutlinedIcon className={classes.titleIcon} color="primary" />
                    </Tada>
                </div>
                <DialogContent>
                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="kana,naudan liha, naisten paita,..."
                        onChange={(e) => setName(e.target.value)}
                        type="search"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                        // inputRef={nameRef}
                        inputProps={{ autoFocus: true }}
                    />
                    <FormGroup row>
                        {data.markets &&
                            data.markets.map((market) => (
                                <FormControlLabel key={market.id} control={<Checkbox name={market.id} value={market.id} />} label={market.name} />
                            ))}
                    </FormGroup>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={handleClose} variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={handleSearch} color="primary" variant="contained">
                        Search
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FilterForm;
