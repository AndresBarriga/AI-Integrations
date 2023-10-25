import React, { useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
const serverUrl = process.env.REACT_APP_SERVER_URL;

function MeetingNotesApp() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [participants, setParticipants] = useState("");
  const [agenda, setAgenda] = useState("");
  const [decisions, setDecisions] = useState("");
  const [actionitems, setActionitems] = useState("");
  const [topics, setTopics]= useState("");
  const [selectedTone, setSelectedTone] = useState("Formal");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedMeetingNotes, setGeneratedMeetingNotes] = useState("");


  const chooseTone = (event) => {
    setSelectedTone(event.target.value);
  };

  const handleDateChange = (newDate) => {
    if (newDate instanceof dayjs) {
      const formattedDate = dayjs(newDate).format('DD/MM/YYYY'); 
      setDate(formattedDate);
    }
  };
  const handleTimeChange = (newTime) => {
    if (newTime instanceof dayjs) {
      const formattedTime = dayjs(newTime).format('HH:mm'); 
      setTime(formattedTime);
      
    }
  };







  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    
    fetch("https://us-central1-ai-integrations960809.cloudfunctions.net/meetingNotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        date,
        time,
        agenda,
        participants,
        decisions,
        actionitems,
        generatedMeetingNotes,
        selectedTone,
        topics
      }),
      
    })
      .then((res) => res.json())
      .then((data) => {
        const generatedMeetingNotes = data.message;
        console.log(generatedMeetingNotes);
        setGeneratedMeetingNotes(data.message);
        setLoading(false);
        setResponse(generatedMeetingNotes)
      });
      
  };


  return (
    <div className="App">
         <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          Meeting Notes Generator 🤖👨🏻‍💻
        </Typography>
        <Typography variant="body1"  style={{ paddingInline: "auto" }} gutterBottom>
          Explore the power of AI to help you create Meeting Notes in an easy way
        </Typography>
        <TextField
          id="title"
          label="Meeting Title"
          value={title}
          placeholder="Specify the Meeting Title"
          onChange={(e) => setTitle(e.target.value)}
          multiline
          maxRows={2}
        />
              <DateField
  label="Date of the Meeting"
  value={date}
  onChange={(newDate) => handleDateChange(newDate)}
/>
              <TimePicker
          label="Time of the meeting"
          value={time}
          onChange={(newTime) => handleTimeChange(newTime)}
        />
        <TextField
          id="Agenda"
          label="Meeting's Agenda"
          value={agenda}
          placeholder="Paste here the agenda of the meeting"
          onChange={(e) => setAgenda(e.target.value)}
          multiline
          maxRows={6}
        />
        

        <TextField
          id="participants"
          label="Participants in the meeting"
          value={participants}
          placeholder="Include all the participants on the meeting, for better functionality include their emails close to their name"
          onChange={(e) => setParticipants(e.target.value)}
          multiline
          maxRows={6}
        />
        <TextField
          id="topics"
          label="Topics discussed"
          value={topics}
          placeholder="Include the topics discussed during the meeting"
          onChange={(e) => setTopics(e.target.value)}
          multiline
          maxRows={6}
        />
        <TextField
          id="decisions"
          label="Decisions taken"
          value={decisions}
          placeholder="Name the decisions taken during the meeting"
          onChange={(e) => setDecisions(e.target.value)}
          multiline
        /> 

<TextField
          id="action items"
          label="Action Items & Accountable"
          value={actionitems}
          placeholder="One line for each Action Item + reponsible person/team"
          onChange={(e) => setActionitems(e.target.value)}
          multiline
        /> 
         <Typography variant="body" style={{  paddingTop: "20px", marginBottom: "20px" , paddingTop: "20px" }} gutterBottom
        sx={{
          textAlign: 'left'
        }}>
         Select the tone for your Meeting Notes.
        </Typography>

<Box sx={{ minWidth: 220 , marginTop: "20px"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Writting Style</InputLabel>
        <Select
          labelId="tone"
          id="tone"
          value={selectedTone}
          label="Writting Style"
          onChange={chooseTone}
        >
          <MenuItem value={"Formal"}>Formal</MenuItem>
          <MenuItem value={"Casual"}>Casual</MenuItem>
          <MenuItem value={"Technical"}>Technical</MenuItem>
          <MenuItem value={"Business"}>Business</MenuItem>
          <MenuItem value={"Executive"}>Executive</MenuItem>
          <MenuItem value={"Pushing"}>Pushing</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
          sx={{ marginBottom: '16px', marginTop: '16px'  }}
        >
          Generate Meeting Notes ✍️
        </Button>
      </Box>

      {loading && (
  <><Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
          <CircularProgress />
        </Box>
        <Box sx={{ width: '100%'}}>
            <Typography variant="body1" gutterBottom
              sx={{
                textAlign: 'center'
              }}>
              Time to Grab a Snack - We'll Be Ready in up to 45 Seconds.
            </Typography>
            <LinearProgress 
          />
          </Box></>
  
  )}


{response.length > 0 && (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div className="paper-wrapper"style={{ width:"75%" }}>
    <Typography variant="h5"gutterBottom
       >
         Your AI Generated Meeting Notes
        </Typography>
      <Paper className="paper-container" elevation={3}>
        {/* Display the entire response message as is */}
        <pre style={{ padding: '20px', whiteSpace: 'pre-wrap' }}>{response}</pre>
      </Paper>
    </div>
  </div>
)}
</LocalizationProvider>
    </div>
  );

}

export default MeetingNotesApp;

