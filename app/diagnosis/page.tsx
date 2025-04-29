// import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'; 
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export default function DiagnosisPage() {
    return (
    <FormControl sx={{ display: "flex", alignItems: "center", mt: 7}}>
        <FormLabel id="diagnosis-radio-buttons-group-label">Q. 夜眠れない時がある</FormLabel>
        <RadioGroup
            aria-labelledby="diagnosis-radio-buttons-group-label"
            defaultValue="none"
            name="radio-buttons-group"
            sx={{ display: "flex", flexDirection: "row"}}
        >
            <FormControlLabel value="1" control={<Radio />} label="" />
            <FormControlLabel value="2" control={<Radio />} label="" />
            <FormControlLabel value="3" control={<Radio />} label="" />
            <FormControlLabel value="4" control={<Radio />} label="" />
            <FormControlLabel value="5" control={<Radio />} label="" />
        </RadioGroup>
    </FormControl>
    )
}