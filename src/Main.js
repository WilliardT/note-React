import React from 'react'

function Main({activeNote, onUpdateNote}) {
  
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    })
  };

  if(!activeNote)
    return <div className='noActiveNote'>Нет выбранных заметок</div>

  
  return (
    <div className='appMain'>
      <div className='appMainNoteEdit'>
         <input 
         type="text" 
         id="title" 
         value={activeNote.title} 
         onChange={(e) => onEditField("title", e.target.value)}
         autoFocus 
         />
         <textarea 
         id='body' 
         placeholder='напишите текст заметки...' 
         value={activeNote.body}
         onChange={(e) => onEditField("body", e.target.value)}
         />
      </div>
      <div className='appMainNotePreview'>
         <h1 className='previewTitle'>{activeNote.title}</h1>
         <div className='markdownPreview'>{activeNote.body}</div>
      </div>
    </div>
  )
};

export default Main;