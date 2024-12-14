function updateCountdown() {
    let thisInstant = Date.now(); 
    const newYear = new Date(2025, 0, 1); 
    let timeDifference = newYear - thisInstant; 

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countdownElement = document.querySelector(".newYearCounter");
    countdownElement.innerHTML = `${days} Days, ${hours} Hrs, ${minutes} Mins, ${seconds} Secs`;

    }


    function showPreview() {
      const paraElement = document.querySelector('.gif-newyear'); 
      let imageElement = paraElement.querySelector('img'); 
  
      if (!imageElement) {
          imageElement = document.createElement('img');
          imageElement.src = "default-image.jpg";
          imageElement.alt = "Default Image"; 
          imageElement.style.height = "285px";
          imageElement.style.width = "625px";
          imageElement.style.borderRadius = "30px";
  
          paraElement.appendChild(imageElement);
      } else {
          if (imageElement.src.includes("default-image.jpg")) {
              imageElement.src = "Gif-newyear.gif"; 
              imageElement.alt = "New Year Gif";
          } else {
              imageElement.src = "default-image.jpg"; 
              imageElement.alt = "Default Image";
          }
      }
  }   
  
    setInterval(updateCountdown, 1000);

    updateCountdown();
     
