var count = 0;
      var countSpan = document.getElementById('count');
      var beginTime, currentTime; // new variables to store timestamps

      function increment() {
        if (count === 0) {
          beginTime = new Date(); // set begin time if count is 0
        }
        count++;
        countSpan.textContent = count;
        currentTime = new Date(); // update current time on each click
        updateTimestamps();
      }

      function decrement() {
        if (count > 0) {
          count--;
          countSpan.textContent = count;
          currentTime = new Date(); // update current time on each click
          updateTimestamps();
        }
      }

      function reset() {
        count = 0;
        countSpan.textContent = count;
        beginTime = null; // reset timestamps
        currentTime = null;
        updateTimestamps();
      }

      function updateTimestamps() {
        var beginTimeDisplay = document.getElementById('begin-time');
        var currentTimeDisplay = document.getElementById('current-time');
        if (beginTime) {
          beginTimeDisplay.textContent =
            'Begin Time: ' + beginTime.toLocaleString();
        } else {
          beginTimeDisplay.textContent = '';
        }
        if (currentTime) {
          currentTimeDisplay.textContent =
            'Current Time: ' + currentTime.toLocaleString();
        } else {
          currentTimeDisplay.textContent = '';
        }
      }

      var incrementButton = document.getElementById('increment');
      var decrementButton = document.getElementById('decrement');
      var resetButton = document.getElementById('reset');

      incrementButton.addEventListener('click', increment);
      decrementButton.addEventListener('click', decrement);
      resetButton.addEventListener('click', reset);