import OpenAI from 'openai';
import { OPENAI_GPT } from './constants';


const openai = new OpenAI({
  apiKey: OPENAI_GPT, // This is the default and can be omitted
  dangerouslyAllowBrowser:true
});

export default openai;