const clickLeft = () => {
    const imageNodes = document.getElementsByClassName('slider-item');
   
    let prevIndex = null;
   
    for (let i = 0; i < imageNodes.length; i += 1) {
     if (imageNodes[i].classList.contains('selected')) {
      prevIndex = i - 1;
      if (prevIndex === -1) {
       prevIndex = imageNodes.length - 1;
      }
     }
    }

    const [selectedNode] = document.getElementsByClassName('selected');

    selectedNode.classList.toggle('selected');
   
    imageNodes[prevIndex].classList.toggle('selected');
   };
   
   document.getElementById('left').addEventListener('click', clickLeft);

   setInterval(clickLeft, 2500);

   const clickRight = () => {
    const imageNodes = document.getElementsByClassName('slider-item');
   
    let prevIndex = null;
   
    for (let i = 0; i < imageNodes.length; i += 1) {
     if (imageNodes[i].classList.contains('selected')) {
      prevIndex = i - 1;
      if (prevIndex === -1) {
       prevIndex = imageNodes.length - 1;
      }
     }
    }

    const [selectedNode] = document.getElementsByClassName('selected');

    selectedNode.classList.toggle('selected');
   
    imageNodes[prevIndex].classList.toggle('selected');
   };
   
   document.getElementById('right').addEventListener('click', clickLeft);

   setInterval(clickLeft, 2500);