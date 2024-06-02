

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
let blogGhost = document.getElementById('blog')
let landing = document.getElementById('landing')
console.log(blogGhost)
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
        console.log(targetPageID)
        targetPage.classList.remove('inactive')
        targetPage.classList.add('active')
        if (targetPageID == 'projects'){            
            ghost.classList.add('active')
            ghost.classList.remove('inactive') 
            if (currActive.includes('projects')){
                console.log('you should scroll')
                targetPage.scrollIntoView({block: "nearest", behavior: "smooth" });
                console.log('scrolling into view')
                landing.setAttribute('opacity', "0.5")
                console.log('setting opacity')
                // window.scrollBy(0, -100);
            }
            else{
                // window.location = '#'+targetPageID
            }
        }
        else if(targetPageID == 'blog-stories'){
            blogGhost.classList.add('active')
            blogGhost.classList.remove('inactive')
            window.location = `#${targetPageID}`
            console.log(window.location)
            // window.scrollTo(0, 0)
        }
        else if (targetPageID == 'contact'){
            // Do something
        }
        else{
            // ghost.classList.add('inactive')
            // ghost.classList.remove('active') 
            // targetPage.scrollIntoView({ behavior: "smooth" })
            // window.scrollBy(0, -100);
            window.location = `#${targetPageID}`
        }
        if (targetPageID != 'projects'){
            ghost.classList.add('inactive')
            ghost.classList.remove('active') 
            window.location = `#${targetPageID}`
            console.log('location moved')
        }
        
        console.log(currActive)
        if (!currActive.includes(targetPageID)){
            currActive.forEach(ele => {
                console.log('hiding: ', ele)
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

let blogButton = document.getElementById("read-stories")
let blogLanding = document.getElementById("blog-landing") 
blogButton.addEventListener('click', function(event){
    let currActive = ["ghost"]
    currActive.forEach(ele => {
        console.log('hiding: ', ele)
        const hidden = document.getElementById(ele);
        hidden.classList.remove('active')
        hidden.classList.add('inactive')
    })
    console.log(blogGhost)
    blogGhost.classList.add('active')
    blogGhost.classList.remove('inactive')

})