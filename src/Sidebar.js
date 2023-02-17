import React from 'react'

function Sidebar({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) {

   const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)
  
   return (
    <div className='appSidebar'>
      <div className='appSidebarHeader'>
         <h1>Lite Notes</h1>
         <button onClick={onAddNote}>добавить</button>
      </div>
      <div className='appSidebarNotes'>
         {sortedNotes.map((note, id) => (
            <div className={`appSidebarNote ${note.id === activeNote && 'active'}`} 
            key={id} onClick={() => setActiveNote(note.id)}
            >
               <div className='appSidebarNoteTitle'>
                  <strong>{note.title}</strong>
                  <button onClick={() => onDeleteNote(note.id)}>удалить</button>
               </div>
               <p>{note.body && note.body.substr(0, 35) + "..."}</p>
               <small>
                  последние изменения:{" "}{
                  new Date(note.lastModified).toLocaleDateString()}
               </small>
            </div>
         ))};
      </div>
   </div>
  )
}

export default Sidebar;