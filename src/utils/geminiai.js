import { GoogleGenerativeAI } from "@google/generative-ai";
import {GEMINI_KEY} from './constants';
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

// ...

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

 const API_KEY = GEMINI_KEY;
 

 // Access your API key (see "Set up your API key" above)
 export const genAI = new GoogleGenerativeAI(API_KEY);

 // The Gemini 1.5 models are versatile and work with most use cases
 export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",safetySettings: safetySettings});

 
