


// <!-- scroll header sticky starts-->
        window.onscroll = function() {myFunction()};
        
        var header = document.getElementById("header-bottom");
        var sticky = header.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }
        // <!-- scroll header sticky ends-->



            
            
        // show hide dropmenu starts 
       let btn_bars = document.querySelector('#toggle-bars');
       let dropdown_menu = document.querySelector('.dropdown-menu');

       btn_bars.onclick = () => {
            if(  dropdown_menu.style.display=='block'){
                dropdown_menu.style.display='none'
            }else{
                dropdown_menu.style.display='block'
            }
        }
        //show hide dropmenu ends 

        // heart active starts
        let heart_active = document.querySelector('.fa-heart');
        heart_active.onclick = () =>{
            heart_active.classList.toggle('active');
        }
        // heart active ends

        

       



            
            // let c_h = document.querySelectorAll('#c_h');
            let c_h = document.querySelectorAll('.products .card-product .item-content i'); 
            let swal_overlay = document.querySelector('.swal-overlay'); 
            let bt = document.querySelector('#close-modal'); 
            // console.log(c_h);
            console.log(bt);
            
            c_h.forEach(e => {
                e.addEventListener('click', () => {        
                    // document.querySelector('.swal-overlay').style.display = 'block'              
                    swal_overlay.style.display = 'block';
                    e.classList.add("acti");               
             });
            });
            swal_overlay.addEventListener('click', () => {        
                    swal_overlay.style.display = 'none'              
            });
            // document.querySelector('.swal-modal').addEventListener('click', () => {        
            //         swal_overlay.style.display = 'block'              
            // });
            document.querySelector('.swal-modal button').addEventListener('click', () => {        
                    swal_overlay.style.display = 'none'              
            });
           
           
            
