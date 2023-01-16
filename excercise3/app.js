let notes = [];

function Note(title, priority, color, description){
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
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
});