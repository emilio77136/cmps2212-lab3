const box = document.querySelector('.box');

box.addEventListener('click', (event) => {
    // BUG: this.classList.add('active') throws an error
    // Arrow functions inherit `this` from the enclosing scope (lexical scoping),
    // so 'this' does not refer to the clicked element but to window.
    
    event.currentTarget.classList.add('active');
    
    // event.currentTarget is always the element the event handler is attached to.
    // basically it is a safer version of 'this' when using arrow functions
});
