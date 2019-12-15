import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function SelectTypeSignUpComponent(props) {
  const [value, setValue] = React.useState('student');

  const handleChange = event => {
    setValue(event.target.value);
    props.valueChanged(event.target.value);
  };

  React.useEffect(() => {handleChange({target:{value:value}})}, []);

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="student"
          control={<Radio color="primary" />}
          label="Ученик"
        />
        <FormControlLabel
          value="teacher"
          control={<Radio color="primary" />}
          label="Учитель"
        />
      </RadioGroup>
    </FormControl>
  );
}
