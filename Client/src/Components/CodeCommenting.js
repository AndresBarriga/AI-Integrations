import React, { useState, useRef }  from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CodeVisualizer from "./CodeVisualizer";

function CodeCommentingApp() {
    const [language, setLanguage] = useState("");
    const [code, setCode] = useState("");
    const [featurePurpose, setFeaturePurpose] = useState("");
    const [proficiencyLevel, setProficiencyLevel] = useState("");
    const [documentationStandards, setDocumentationStandards] = useState("");
    const [codeWithComments, setCodeWithComments]= useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const chooseProficiency = (event) => {
        setProficiencyLevel(event.target.value);
    };
    


  

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch("https://ai-integrations-back.vercel.app/code/automatic-comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                language,
                code,
                featurePurpose,
                proficiencyLevel,
                documentationStandards,
            }),

        })
            .then((res) => res.json())
            .then((data) => {
                const codeWithComments = data.message;
                setCodeWithComments(codeWithComments);
                setLoading(false);
                setResponse(codeWithComments)
            });

    };

    return (
        <div className="App" >
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
                    Automatic Comments for your Code 🤖👨🏻‍💻
                </Typography>
                <Typography variant="body1" style={{ paddingInline: "auto" }} gutterBottom>
                    Comment your code automatically without effort.
                </Typography>
                <TextField
                    id="language"
                    label="Language Used"
                    value={language}
                    placeholder="Which language are you using?"
                    onChange={(e) => setLanguage(e.target.value)}
                    multiline
                    maxRows={2}
                />
                <TextField
                    id="feature"
                    label="Short feature explanation"
                    value={featurePurpose}
                    placeholder="Briefly describe what the function/code is used for"
                    onChange={(e) => setFeaturePurpose(e.target.value)}
                    multiline
                    maxRows={2}
                />
                <TextField
                    id="documentationStyle"
                    label="Prefered Documentantion Standards (if any)"
                    value={documentationStandards}
                    placeholder="Documentation Standards such as: Google Style Guide, Doxigen Style, Python Docstrings, Javadoc Style... "
                    onChange={(e) => setDocumentationStandards(e.target.value)}
                    multiline
                    maxRows={2}
                />
                <Box sx={{ minWidth: 320, marginTop: "20px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Audience Proficiency Level</InputLabel>
                        <Select
                            labelId="proficiency"
                            id="proficiency"
                            value={proficiencyLevel}
                            label="Audience Proficiency Level"
                            onChange={chooseProficiency}
                        >
                            <MenuItem value={"Beginner"}>Beginner</MenuItem>
                            <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                            <MenuItem value={"Expert"}>Expert</MenuItem>
                            <MenuItem value={"All levels"}>General- All Levels</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                
                <Box sx={{
                    minWidth: 850,
                    marginTop: '20px',
                    '@media (max-width: 1024px)': {
                        minWidth: 800,
                        marginLeft: 26,
                    },
                    '@media (max-width: 600px)': {
                        minWidth: 500,
                    },
                }}>
                    <textarea
                        className="flex items-center justify-center code-input w-1/2 resize-y lg:block md:w-2/3 lg:w-full h-32 p-2 border rounded-md"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Enter your code here..."
                    />
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleSubmit}
                    sx={{ marginBottom: '16px', marginTop: '16px' }}
                >
                    Generate Code with Comments 📟
                </Button>
            </Box>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                    <CircularProgress />
                </Box>
            )}



            {response.length > 0 && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="paper-wrapper" style={{ width: "75%" }}>
                        <Typography variant="h5" gutterBottom
                        >
                            Your AI Generated Code
                        </Typography>
                        <CodeVisualizer style={{ padding: '20px', whiteSpace: 'pre-wrap' }} code={response} />
                        
                       
                    </div>
                </div>
            )}

        </div>
    );
}

export default CodeCommentingApp;