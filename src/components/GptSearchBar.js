import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    console.log(openai)
    const handleGptSearchClick = async () => {
        const gptQuery = "Act as a Movie Recommender System and suggest some movies for the query "+searchText.current.value+" only give me names of 5 movies, coma seprated like the exaple result given ahead. Example Result: The Dark Knight, Inception, Interstellar, The Prestige, Memento.";
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });
        console.log(gptResults.choices);
    }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2  bg-black grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText} type='text' placeholder={lang[langKey].gptSearchPlaceHolder} className='p-4 m-4 col-span-9' />
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'
            onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar