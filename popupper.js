const popUpper = ({ title, style, time }) => {
  let chosenTitle = title.charAt(0).toUpperCase() + title.slice(1);

  let popup = `
  
  <div>
  <i class="fa fa-${style} fa-2x" aria-hidden="true"></i>
  <h3>${chosenTitle}</h3>
  </div>
  <div class="progress"></div>
  `;

  let popupDiv = document.createElement('div');
  popupDiv.className = `popup ${style}`;
  popupDiv.innerHTML = popup;
  document.body.appendChild(popupDiv);

  let i = 0;
  if (i == 0) {
    i = 1;
    let percentage = 1;
    const progressBar = document.querySelector('.progress');

    const progress = () => {
      if (percentage >= 100) {
        clearInterval(interval);
        i = 0;
        const popupperdiv = document.querySelector('.popup');
        popupperdiv.remove();
      } else {
        percentage++;
        progressBar.style.width = percentage + '%';
      }
    };
    let interval = setInterval(progress, time);
  }
};
