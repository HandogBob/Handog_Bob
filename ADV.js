let stack = [];
let maxStackSize = 10;

document.getElementById('pushBtn').addEventListener('click', function() {
    let inputValue = document.getElementById('inputValue').value;
    
    if (inputValue === "") {
        alert('Input is empty');
        return;
    }

    if (stack.length < maxStackSize) {
        stack.push(inputValue);
        updateStackDisplay();
    } else {
        alert('Stack is full');
    }

    document.getElementById('inputValue').value = ''; 
});

document.getElementById('popBtn').addEventListener('click', function() {
    if (stack.length > 0) {
        stack.pop();
        updateStackDisplay();
    } else {
        alert('Stack is empty');
    }
});

function updateStackDisplay() {
    for (let i = 0; i < maxStackSize; i++) {
        let item = document.getElementById('item' + i);
        if (i < stack.length) {
            item.innerText = stack[i]; 
        } else {
            item.innerText = "";
        }
    }
}
