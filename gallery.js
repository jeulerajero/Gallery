/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
        let target = document.getElementById("image");
        let sourceImage = "url("+ previewPic.src+")";
        let sourceCaption = previewPic.alt;
        
        target.style.backgroundImage = sourceImage;
        target.innerHTML = sourceCaption;
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
      document.getElementById("image").innerHTML = "Hover over an image to display here.";
      document.getElementById("image").style.backgroundImage = 'none';
    
    }