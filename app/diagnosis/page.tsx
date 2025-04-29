import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'; 
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export default function DiagnosisPage() {
    return (
    <FormControl sx={{ display: "flex", alignItems: "center", mt: 7}}>
        <FormLabel id="diagnosis-radio-buttons-group-label" sx={{ fontSize: "20px"}}>Q. 夜眠れない時がある</FormLabel>
        <RadioGroup
            aria-labelledby="diagnosis-radio-buttons-group-label"
            defaultValue="none"
            name="radio-buttons-group"
            sx={{ display: "flex", flexDirection: "row", fontSize: "30px"}}
        >
            <FormControlLabel value="1" control={<Radio sx={{ transform: "scale(1.5)", color: "green" }} />} label="" />
            <FormControlLabel value="2" control={<Radio sx={{ transform: "scale(1.3)", color: "lightgreen" }} />} label="" />
            <FormControlLabel value="3" control={<Radio sx={{ transform: "scale(1.1)", color: "gray" }} />} label="" />
            <FormControlLabel value="4" control={<Radio sx={{ transform: "scale(1.3)", color: "purple" }} />} label="" />
            <FormControlLabel value="5" control={<Radio sx={{ transform: "scale(1.5)", color: "purple" }} />} label="" />
        </RadioGroup>
    </FormControl>
    )
}