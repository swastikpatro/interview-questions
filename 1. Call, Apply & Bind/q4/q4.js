// 4. What is the output

var status = '😎'; // Adds a property of status to window object
console.log(window.status);

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // '🥑'
  console.log(data.getStatus.call(this)); // '😎' // Points to window object
}, 0);
