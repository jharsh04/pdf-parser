// server.js
/*const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Google Generative AI client (replace with your actual API key and model setup)
const genAI = new GoogleGenerativeAI("AIzaSyD4E-kNFBZD-VIi_j5h-wEs3KqAH9DelKU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Enable CORS for all routes
app.use(cors());

// Multer configuration
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Route to upload and parse PDF
app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const dataBuffer = req.file.buffer; // we have stored the file in buffer

    // Parse the PDF file
    const data = await pdfParse(dataBuffer); // parsing is processed

    // Creating the prompt for Google Generative AI
    const prompt = `
      I'm developing a project that involves parsing text from resumes. 
      I will provide you with the parsed text, and I need you to convert 
      that information into structured JavaScript objects. Please ensure 
      that the objects are formatted with keys and values, wrapped in 
      curly braces, and separated by commas. The goal is for me to easily 
      map over these objects in my frontend code. In the response text, 
      I need you to provide me the data in fields like Name, Education, 
      Skills, Projects, Experience, etc. Also, make sure I get all the 
      objects inside a single object called 'aiResponse'. Here’s the parsed text:
      ${data.text}
    `;

    // Generate content using Google Generative AI
    const result = await model.generateContent(prompt);
    const generatedResponse = result; 
    console.log(generatedResponse);
    // Respond with the parsed PDF text and AI-generated structured data
    res.json({
      parsedText: data.text,
      aiGeneratedResponse: generatedResponse
    });
    
  } catch (error) {
    console.error('Error parsing PDF:', error);
    res.status(500).json({ error: 'Failed to parse PDF' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});*/
// server.js
/*const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Google Generative AI client (replace with your actual API key and model setup)
const genAI = new GoogleGenerativeAI("AIzaSyD4E-kNFBZD-VIi_j5h-wEs3KqAH9DelKU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Enable CORS for all routes
app.use(cors());

// Multer configuration
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Route to upload and parse PDF
app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const dataBuffer = req.file.buffer; // We have stored the file in buffer

    // Parse the PDF file
    const data = await pdfParse(dataBuffer); // Parsing is processed

    // Creating the prompt for Google Generative AI
    const prompt = `
      I'm developing a project that involves parsing text from resumes. 
      I will provide you with the parsed text, and I need you to convert 
      that information into structured JavaScript objects. Please ensure 
      that the objects are formatted with keys and values, wrapped in 
      curly braces, and separated by commas. The goal is for me to easily 
      map over these objects in my frontend code. In the response text, 
      I need you to provide me the data in fields like Name, Education, 
      Skills, Projects, Experience, etc. Also, make sure I get all the 
      objects inside a single object called 'aiResponse'. Here’s the parsed text:
      ${data.text}
    `;

    // Generate content using Google Generative AI
    const result = await model.generateContent(prompt);
    const generatedResponse = result.response.candidates.content.parts; // Check how the response is structured

    // Logging the entire response for inspection (optional)
    console.log("AI Generated Response:", generatedResponse);

    // Respond with the parsed PDF text and AI-generated structured data
    res.json({
      parsedText: data.text,
      aiGeneratedResponse: generatedResponse
    });
    
  } catch (error) {
    console.error('Error parsing PDF or generating AI response:', error);
    res.status(500).json({ error: 'Failed to parse PDF or generate AI response' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});*/
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Google Generative AI client (replace with your actual API key and model setup)
const genAI = new GoogleGenerativeAI("AIzaSyD4E-kNFBZD-VIi_j5h-wEs3KqAH9DelKU");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Enable CORS for all routes
app.use(cors());

// Multer configuration
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Route to upload and parse PDF
app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const dataBuffer = req.file.buffer; // We have stored the file in buffer

    // Parse the PDF file
    const data = await pdfParse(dataBuffer); // Parsing is processed

    // Creating the prompt for Google Generative AI
    const prompt = `
      I'm developing a project that involves parsing text from resumes. I will provide you with the parsed text, and I need you to convert that information into structured JavaScript objects. Please ensure that the objects are formatted with keys and values, wrapped in curly braces, and separated by commas. The goal is for me to easily map over these objects in my frontend code. In the response text, i need you to provide me the data in the fields like Name, Education, Skills, Projects, Experience etc. Also make sure i get all the objects inside a single object called as 'aiResponse' and everything is inside of it and u dont need to mention ''''json' or anything just give me the direct object itself. Here’s the parsed text: ${data.text}
    `;

    // Generate content using Google Generative AI
    const result = await model.generateContent(prompt);

    // Log the full response to inspect its structure
    console.log("Full AI Response:", result);

    // Access the response properly
    const generatedResponse = result.response?.candidates?.[0]?.content || "No response content available"; 

    // Logging the AI generated content for inspection
    console.log("AI Generated Content:", generatedResponse);

    // Respond with the parsed PDF text and AI-generated structured data
    res.json({
      parsedText: data.text,
      aiGeneratedResponse: generatedResponse
    });
    
  } catch (error) {
    console.error('Error parsing PDF or generating AI response:', error);
    res.status(500).json({ error: 'Failed to parse PDF or generate AI response' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


