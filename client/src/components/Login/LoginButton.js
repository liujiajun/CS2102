import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme =>({
    paper: {
        margin: theme.spacing(3, 0, 2)
    },
    buttonGroup: {
        width: "100%"
    },
    mainButton: {
        width: "80%"
    },
    sideButton: {
        width: "20%"
    },
}));

const options = ['Sign in as Diner', 'Sign in as Restaurant', 'Sign in as Rider', 'Sign in as Admin'];

export default function LoginButton(props) {
    const classes = styles();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = () => {
        props.onClick(options[selectedIndex]);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.paper}>
                <ButtonGroup
                    variant="contained"
                    color="primary" ref={anchorRef}
                    aria-label="split button"
                    fullWidth
                    className={classes.buttonGroup}
                >
                    <Button
                        className={classes.mainButton}
                        onClick={handleClick}>
                        {options[selectedIndex]}
                    </Button>
                    <Button
                        className={classes.sideButton}
                        color="primary"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu">
                                        {options.map((option, index) => (
                                            <MenuItem
                                                style={{textAlign: 'center'}}
                                                key={option}
                                                selected={index === selectedIndex}
                                                onClick={event => handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
        </div>
    );
}
