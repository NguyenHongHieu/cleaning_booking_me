import React, { useState } from "react";
import styled from "styled-components";
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Input,
    TextField,
    createStyles,
    makeStyles,
    Theme,
    Button,
} from "@material-ui/core";

const BookingStep2Styles = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  content: "";
  background-color: #fff;
  color: black;
  border-radius: 40px 40px 0 0;
  min-width: 100%;
  min-height: 90%;
  padding: 1rem 5%;
  .home_service label {
    color: black;
    font-size: 14px;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            flexWrap: "wrap",
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    })
);

interface BookingStep2Props {
    next: () => void;
    back: () => void;
}

export const BookingStep2 = (props: BookingStep2Props) => {
    const [addressState, setAddressState] = useState("");
    const { back, next } = props;
    const classes = useStyles();
    return (
        <BookingStep2Styles>
            <div>
                <Input
                    value={addressState}
                    onChange={(e) => setAddressState(e.target.value)}
                    placeholder="Enter your address"
                />
            </div>
            <div className="mt-4">
                <h5 style={{ color: '#5c4db1', fontSize: '1rem', marginTop: '5px' }}>Choose a room</h5>
                <FormGroup row>
                    <div className="col-6">
                        <FormControlLabel
                            control={<Checkbox name="kitchen" />}
                            label="Kitchen"
                        />
                    </div>
                    <div className="col-6">
                        <FormControlLabel
                            control={<Checkbox name="dinning_room" />}
                            label="Dinning Room"
                        />
                    </div>
                    <div className="col-6">
                        <FormControlLabel
                            control={<Checkbox name="living_room" />}
                            label="Living Room"
                        />
                    </div>
                    <div className="col-6">

                        <FormControlLabel
                            control={<Checkbox name="=bed_room" />}
                            label="Bed Room"
                        />
                    </div>
                    <div className="col-6">
                        <FormControlLabel
                            control={<Checkbox name="bath_room" />}
                            label="Bath Room"
                        />
                    </div>
                    <FormControlLabel control={<Checkbox name="other" />} label="Other" />
                </FormGroup>
            </div>
            <div className="row mt-4">
                <h5 style={{ color: '#5c4db1', fontSize: '1rem', marginTop: '5px' }}>Choose date and time:</h5>
                <form className={classes.container} noValidate>
                    <TextField
                        id="datetime-local"
                        label="Next appointment"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </div>
            <div className="row mt-4">
                <div className="col-12 d-flex justify-content-between">
                    <Button onClick={() => back()} style={{ padding: '0.5rem 3.5rem' }} variant="contained" color="primary">
                        BACK
          </Button>
                    <Button onClick={() => next()} style={{ padding: '0.5rem 3.5rem' }} variant="contained" color="primary">
                        NEXT
                    </Button>
                </div>
            </div>
        </BookingStep2Styles>
    );
};
