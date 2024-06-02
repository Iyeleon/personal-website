

// // console.log(header);

// document.addEventListener('DOMContentLoaded', load_nav)

// function load_nav(){ 
//     const header = document.getElementById('header'); 
//     // header.innerHTML = '<object class="w-100" type="text/html" data="nav.html" ></object>';
//     fetch('./nav.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('header').innerHTML = data;
//     });

// }

// // // control scrolling behaviour
// // document.addEventListener("DOMContentLoaded", function() {
// //     console.log(header)
// //     const mm = document.getElementsByTagName("object")
// //     console.log(mm)
// //     const menuLinks = document.querySelectorAll("nav ul li a");
// //     console.log(menuLinks)

// //     menuLinks.forEach(link => {
// //         link.addEventListener("click", function(event) {
// //             event.preventDefault();
// //             const targetId = this.getAttribute("href").substring(1);
// //             document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
// //         });
// //     });
// // });


// navigate to a section
let ghost = document.getElementById('ghost')
menuLinks = document.querySelectorAll("nav ul li a");
menuLinks.forEach(link => {
    link.addEventListener('click', function(event){
        // event.preventDefault();
        // fetch current active pages
        let currActive = Array.from(document.getElementsByClassName('active')).map(ele => {return ele.id})
        // fetch target page
        let targetPageID = this.getAttribute("href").substring(1)
        // fetch target page
        const targetPage = document.getElementById(targetPageID)
        // activate target page
        console.log(this.getAttribute("href"))
        console.log(this)
        targetPage.classList.remove('inactive')
        targetPage.classList.add('active')
        if (targetPageID == 'projects'){            
            ghost.classList.add('active')
            ghost.classList.remove('inactive') 
            if (currActive.includes('projects')){
                targetPage.scrollIntoView({block: "nearest", behavior: "auto" });
                window.scrollBy(0, -100);
            }
            else{
                // window.location = '#'+targetPageID
            }
        }
        else if (targetPageID == 'contact'){
            // Do something

        }
        else{
            ghost.classList.add('inactive')
            ghost.classList.remove('active') 
            targetPage.scrollIntoView({ behavior: "smooth" })
            window.scrollBy(0, -100);
            // window.location = '#'+targetPageID
        }
        
        console.log(currActive)
        if (!currActive.includes(targetPageID)){
            currActive.forEach(ele => {
                const hidden = document.getElementById(ele);
                hidden.classList.remove('active')
                hidden.classList.add('inactive')
            })
        }

        
        
        // console.log(places2)
        // console.log(targetPage)
        // currentPageID = targetPageID
        // console.log('New Current Page ID:', currentPageID)
        
        // const targetID = this.getAttribute("href").substring(1)

    })
})