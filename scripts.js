.image {
  background-color: #490D40;
  background: url(https://sonorangirl.github.io/Earth-Quotes/img/google-earth-view-South-Iceland3.jpg) no-repeat center center;
  background-size: cover;
  height: 570px;
  margin-top: -20px;
  
  .heading {
     color: white;
     text-align: center;
     padding-top: 200px;
  }

  p {
     text-align: center;
     padding: 20px 60px;
     
      .btn {
        background-color: transparent;
        color: white;
        border: 1px solid white;
        padding: 10px;
        font-size: 1.2em;
            
         &:hover {
            color: #C57ED3;
            border-color: #C57ED3;
         }
     }
  }
}

.navbar {
 height: 80px;
 background-color: transparent;
 border: none;
 color: white;
 z-index: 100;
 transition: background-color 1s ease 0s;
}


.navbar-default {
 
  .navbar-brand {
    margin-top: 10px;
    color: white;
       
     &:hover {
        color: #C57ED3;
        border: 1px solid #C57ED3;
     } 
  }
  
 .navbar-nav {
   
   > li {
     
     > a {
       color: white;
       margin: 10px 5px 5px 5px;
       
     }
     > a:hover, > a:active, > a:focus {
       color: #C57ED3;
       border: 1px solid #C57ED3;
     }
     > a:visited {
       color: #C57ED3;
       text-decoration: none;
     }

   } //end li

   > .active {

     > a, > a:hover, > a:focus {
       background-color: transparent;
       color: #C57ED3;
     }

   }

 } //end .navbar-nav

 //Collapsed styles
 .navbar-toggle {
   border-color: #C57ED3;

     &:hover, &:focus {
       background-color: #490D40;
     }



     .icon-bar {
       color: #C57ED3;
       background-color: #C57ED3;

     }
 }

 .navbar-collapse.collapse.in ul {
   background-color: #490D40;
 }
   
} //end .navbar-default



/* Solid class attached on scroll past first section */

.navbar.solid {
 background-color: #490D40;
 transition: background-color 1s ease 0s;
 box-shadow: 0 0 4px grey;

   .navbar-brand {
     color: #C57ED3;
     transition: color 1s ease 0s;
   }

   .navbar-nav {

      > li {

         > a {
           color: #C57ED3;
           transition: color 1s ease 0s;
         }

      } //end li

   } //end .navbar-nav

}

.about {
  background-color: #C57ED3;
  color: #490D40;
  height: 600px;
  text-align: center;
  margin-top: -20px;
  
  h2 {
     padding-top: 220px;
  }
  p {
     padding: 20px 80px;
  }
}

