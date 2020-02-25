import React from 'react';
import './InputField.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { InputGroup, FormControl } from 'react-bootstrap';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));



export function RegularInput(props){
    return (
        <>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
                required />
        </>
    );
}


export function MaterialInput(props) {
    return (
        <>
        <TextField 
        id="filled-basic" 
        label={props.label} 
        name={props.name}
        type={props.type}
        onChange={props.handleChange}
        variant="filled" 
        fullWidth
        margin="normal"
        placeholder={props.placeholder}
        required
        size={props.size}
        shrink="true"
        />
        </>
    );
  }

  export function BootstrapInput(props) {

      return(
      <>
      <label htmlFor={props.id}>{props.label}</label>
        <InputGroup className="mb-3">
          <FormControl 
          placeholder={props.placeholder}
          id={props.id}
          name={props.name}
          type={props.type}
          aria-describedby={props.id}
          />
        </InputGroup>
      </>
      )
  }

  