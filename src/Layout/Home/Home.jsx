import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import changeLanguage from '../../store/action'

export default function Home() {
  const language=useSelector((state)=>state.language.lang)
  const dispatch=useDispatch()
  const ToggleLanguage=()=>{
    dispatch(changeLanguage(language==='en'?'ar':'en'))
  }
  useEffect(() => {
    document.dir = language === 'en' ? 'ltr' : 'rtl';
  }, [language]);
  return (
    <div>
      <i className='fas fa-heart'></i>
      <h1>Home</h1>
      <h2>Language: {language}</h2>
      <button className='btn btn-success' onClick={()=>ToggleLanguage()}>Toggle Language</button>
    </div>
  )
}
