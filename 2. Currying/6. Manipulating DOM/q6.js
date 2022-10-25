// 6. Manipulating DOM

function updateElement(id) {
  return function (content) {
    document.querySelector('#' + id).innerText = content;
  };
}

const updateHeading = updateElement('heading');
updateHeading('Hello World');
updateHeading('Hello');
