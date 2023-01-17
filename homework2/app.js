let notes = [];

class Note {
    constructor(title, priority, color, description) {
        this.title = title;
        this.priority = priority;
        this.color = color;
        this.description = description;
    }
}

function createNote(noteData){
    const newNote = document.createElement("div");
    newNote.className = "note";
    newNote.style.backgroundColor = noteData.color;
    const noteTitle = document.createElement("h3");
    noteTitle.innerText = noteData.title;
    newNote.appendChild(noteTitle);
    const prioContainer = document.createElement("div");
    prioContainer.className = `prio-${noteData.priority}`;
    const notePriority = document.createElement("h6");
    notePriority.innerText = `Priority: ${noteData.priority}`;
    prioContainer.appendChild(notePriority);
    newNote.appendChild(prioContainer);
    const noteDescription = document.createElement("p");
    noteDescription.innerText = noteData.description;
    newNote.appendChild(noteDescription);
    return newNote;
}

function updateNotes(){
    const notesContainer = document.querySelector(".notes-container");
    notesContainer.innerHTML = "";
    if(notes.length === 0){
        notesContainer.innerHTML = "<h2>You have no notes</h2>";
        return;
    }
    for(let note of notes){
        notesContainer.appendChild(createNote(note));
    }
}

const noteForm = document.querySelector("#note-form");
noteForm.addEventListener('submit', e => {
    e.preventDefault();
    const titleIn = document.querySelector("#title").value;
    const priorityIn = document.querySelector("#priority").value;
    const colorIn = document.querySelector("#color").value;
    const description = document.querySelector("#description").value;
    if(!titleIn){
        console.log("No title");
        return;
    }
    if(!description){
        console.log("No note");
        return;
    }
    notes.push(new Note(titleIn, priorityIn, colorIn, description));
    e.target.reset();
    updateNotes();
});

document.querySelector("#showNotes").addEventListener('click', updateNotes);