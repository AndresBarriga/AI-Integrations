import React, { useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { selectClasses } from "@mui/material";

const serverUrl = process.env.REACT_APP_SERVER_URL;


function CoverLetterApp() {
  const [cv, setCv] = useState("");
  const [joboffer, setJoboffer] = useState("");
  const [length, setLength] = useState(300);
  const handleSliderChange = (event, value) => {
    setLength(value);
  };
const [achievements, setAchievements] = useState("");
const [selectedTone, setSelectedTone] = useState("Formal Tone");
  const [interest, setInterest] = useState(""); 
  const [skills, setSkills] = useState(""); 
  const [company, setCompany] = useState(""); 
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const lengthAsString = length.toString()
    
    fetch("https://ai-integrations-back.vercel.app/coverLetterWriter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cv,
        joboffer,
        length: lengthAsString,
        selectedTone,
        interest,
        achievements,
        skills,
        company
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const generatedCoverLetter = data.message;
        console.log(generatedCoverLetter);
        setGeneratedCoverLetter(data.message);
        setLoading(false);
        setResponse(generatedCoverLetter)

      });

  };


  return (
    <div className="App">

      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& .MuiTextField-root': { m: 1, width: '60%' }, // Make text fields full width
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h3" style={{ paddingTop: "20px" }} 
        gutterBottom>
          Cover Letter Generator 🤖👨🏻‍💻
        </Typography>
        <Typography variant="body1"  style={{ paddingInline: "auto" }} gutterBottom>
          Explore the power of AI to help you create a Cover Letter that perfectly match your experience and suited for the job you are applying
        </Typography>
        <TextField
          id="cv"
          label="Your CV"
          value={cv}
          placeholder="Paste your CV here"
          onChange={(e) => setCv(e.target.value)}
          multiline
          maxRows={6}
        />
        <TextField
          id="joboffer"
          label="Job Offer"
          value={joboffer}
          placeholder="Paste the Job Offer you are applying for"
          onChange={(e) => setJoboffer(e.target.value)}
          multiline
          maxRows={6}
        />
        
         <Typography variant="h5" style={{ paddingTop: "20px" }} gutterBottom
        sx={{
          textAlign: 'left'
        }}>
         Select the tone of your Cover Letter.
        </Typography>
        
        <FormControlLabel
          control={
            <Switch
              checked={selectedTone === "Formal Tone"}
              onChange={(e) =>
                setSelectedTone(e.target.checked ? "Formal Tone" : "Start Up Tone")
              }
            />
          }
          label={`Style: ${selectedTone}`}
          sx={{
            textAlign: 'left',
          }}
        />
        <Typography variant="h5" style={{ paddingTop: "20px" }} gutterBottom
        sx={{
          textAlign: 'left'
        }}>
          Select the length in characters for your Cover Letter :
        </Typography>
        <Slider
        sx={{
          width : "50%",
        }}
          aria-label="Temperature"
          defaultValue={300}
          value={length}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          step={50}
          marks
          min={150}
          max={450}
        />
        <Typography variant="h5" style={{ paddingTop: "20px" }} gutterBottom
        sx={{
          textAlign: 'left'
        }}>
          Further customization
        </Typography>
        <Typography variant="body1"gutterBottom
        sx={{
          textAlign: 'left'
        }}>
          Let's customize more. You can complete the next fields to add customization to your cover letter <br></br> while this is not mandatory your Cover Letter will be much more succesfull:
        </Typography>
        <TextField
          id="interest"
          label="Special motivations about the job"
          value={interest}
          placeholder="What are you motivations or interest about the industry or role?"
          onChange={(e) => setInterest(e.target.value)}
          multiline
          maxRows={6}
        />
        <TextField
          id="achievements"
          label="Your achievements related to the job"
          value={achievements}
          placeholder="Have you any achievements that you would like to highlight?"
          onChange={(e) => setAchievements(e.target.value)}
          multiline
        /> 
        <TextField
          id="skills"
          label="Skills on Focus"
          value={skills}
          placeholder="Do you want to highlight any of your skills for the role? Write them here "
          onChange={(e) => setSkills(e.target.value)}
          multiline
        /> 
        <TextField
          id="company"
          label="Additional information about the company"
          value={company}
          placeholder="Anything would be useful,such as its mission statement, recent accomplishments, industry standing, etc. "
          onChange={(e) => setCompany(e.target.value)}
          multiline
        /> 
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
          sx={{ marginBottom: '16px' }}
        >
          Generate Cover Letter ✍️
        </Button>
      </Box>

      {loading && (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
    <CircularProgress />
  </Box>
  )}


{response.length > 0 && (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div className="paper-wrapper"style={{ width:"75%" }}>
    <Typography variant="h5"gutterBottom
       >
         Your AI Generated Cover Letter 
        </Typography>
      <Paper className="paper-container" elevation={3}>
        {/* Display the entire response message as is */}
        <pre style={{ padding: '20px', whiteSpace: 'pre-wrap' }}>{response}</pre>
      </Paper>
    </div>
  </div>
)}
    </div>
  );

}

export default CoverLetterApp;

