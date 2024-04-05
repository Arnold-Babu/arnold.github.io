/*
  NAME - Arnold Babu
  STUDENT ID  - 100930830
  ASSIGNMENT 4 Part 2
  DESCRIPTION - Creating a Image Gallery - Javascript File

*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFilenames = ['closeupofhumaneye.jpg','cloud.jpg','flower.jpg','egypt.jpg','butterfly.jpg'];

/* Declaring the alternative text for each image file */

/* Looping through images */
imageFilenames.forEach((filename,index) => {
const newImage = document.createElement('img');
newImage.setAttribute('src','images/'+ filename);
newImage.setAttribute ('alt','Images: ' + filename);
newImage.setAttribute('data-index',index)
thumbBar.appendChild(newImage);

});


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click',function (){
   const classList = btn.getAttribute('class');
   if (classList ==='dark'){
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
   }else{
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';

   }
});
