/* search section */



/* end search section */

/* ----------------------------------------- */


// side stripe Navbar section
// openpane button ☰
$('.openButton').click(function () {
    if (document.getElementById("openButton").innerHTML == "☰") {

        // if($('.sideNavbarPane').css('left') !== 0){

        // $('.sideNavbarPane').animate({left: "16%"},1000,function(){
        //     console.log(document.getElementById("openButton").innerHTML);
        //     document.getElementById("openButton").innerHTML= "x"; 
        // })
        $('.sideNavbarPane').animate({ left: "16%" }, 500)
        // console.log(document.getElementById("openButton").innerHTML);
        document.getElementById("openButton").innerHTML = "x";
            $('.sideNavbar').animate({ left: "0" }, 500,function(){
                $('#item1').animate({opacity: "1"},1100)
                $('#item2').animate({opacity: "1"},1200)
                $('#item3').animate({opacity: "1"},1300)
                $('#item4').animate({opacity: "1"},1400)
                $('#item5').animate({opacity: "1"},1500)
                $('#item6').animate({opacity: "1"},1600)
            });
           
            // $('.sideNavbarIcon').css("transition","ease-in")

    }
    else {
        $('#item1').animate({opacity: "0"},1100)
        $('#item2').animate({opacity: "0"},1200)
        $('#item3').animate({opacity: "0"},1300)
        $('#item4').animate({opacity: "0"},1400)
        $('#item5').animate({opacity: "0"},1500)
        $('#item6').animate({opacity: "0"},1600,function(){
            $('.sideNavbar').animate({ left: "-100%" }, 1000);
            document.getElementById("openButton").innerHTML = "☰";
            $('.sideNavbarPane').animate({ left: "0" }, 300)
        })
       
           
        
        // console.log('hi');
    }
})

// side Navbar links click
// $('#detailsLink').click(function(){
//     let singerOffset = $('#targetOFDetailsLink').offset().top;
//     $(body).animate({scrolltop: singerOffset},1000)
// })
// $('#durationLink').click(function(){
//     // let test = $('#targetOfDurationLink').offset().top;
//     let counterOffset = $('#targetOFDurationLink').offset().top;
//     $(body).animate({scrolltop: counterOffset},1000);
// })
// $('.sideNavbarIcon').click(function () {
//     let hrefElement = $(this).attr('href');
//     let currentoffset = $(hrefElement).offset().top;
//     console.log(currentoffset);
//     $('html,body').animate({ scrollTop: currentoffset }, 5000);
// });



// end side stripe Navbar section 
/* ----------------------------------------- */



/* moviesfromAPI section ,search & navbar links target*/

// API links
//  searchURL   = "https://api.themoviedb.org/3/search/movie?query=mad&api_key=90cb39278979ed66254217668439759f&language=en-US&include_adult=false";
//  trendingURL = "https://api.themoviedb.org/3/trending/all/day?api_key=90cb39278979ed66254217668439759f";
//  latestURL   = "https://api.themoviedb.org/3/movie/latest?api_key=90cb39278979ed66254217668439759f";
//  popularURL  = "https://api.themoviedb.org/3/movie/popular?api_key=90cb39278979ed66254217668439759f";
//  topratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=90cb39278979ed66254217668439759f";
//  upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=90cb39278979ed66254217668439759f";
//  NowURL      = "https://api.themoviedb.org/3/movie/now_playing?api_key=90cb39278979ed66254217668439759f";

// make allmovies global to can see & use in link click API function
let allMovies = [] ;

// wordSearchBar search link API
$('#wordSearchBar').keyup(function(){
    // let moviesResult=[];
    // let wordSearch = $('#wordSearchBar').value
    let myRequest = new XMLHttpRequest
    myRequest.open("GET",`https://api.themoviedb.org/3/search/movie?query=${$(this).val()}&api_key=90cb39278979ed66254217668439759f&language=en-US&include_adult=false`);
    myRequest.send();
    myRequest.addEventListener("readystatechange",function(){
        if(myRequest.readyState == 4 && myRequest.status == 200){
            allMovies = JSON.parse(myRequest.response);
            // moviesResult= Array.from(allMovies.results);
            console.log(allMovies);
            display(allMovies.results);
        }
    })    
})
// local SearchBar  search local
// $('#searchBar').keyup(function(){
//     var term = this.value
//     console.log(term);
//     console.log($('.caption.h2').innerHTML.value);
//     // let moviesResult=[];
//     // let wordSearch = $('#wordSearchBar').value
//     // console.log(wordSearch);
//     // for(let i=0; i<allMovies.length;i++){
//     //     if(allMovies[i].title.includes(this.val() == true)){
//     // allMovies= allMovies[term].title;
//     // console.log(allMovies[i].title);
//             // display(allMovies.results);
// })
// // }})
    
        
   
// side stripe nav bar now playing link API
$('#item1').click(function(){
    // let moviesResult=[];
    let myRequest = new XMLHttpRequest
    myRequest.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=90cb39278979ed66254217668439759f");
    myRequest.send();
    myRequest.addEventListener("readystatechange",function(){
        if(myRequest.readyState == 4 && myRequest.status == 200){
            allMovies = JSON.parse(myRequest.response);
            // moviesResult= Array.from(allMovies.results);
            console.log(allMovies);
            display(allMovies.results);
        }
    })    
})
// side stripe nav bar Popular link API
$('#item2').click(function(){
    // let moviesResult=[];
    let myRequest = new XMLHttpRequest
    myRequest.open("GET","https://api.themoviedb.org/3/movie/popular?api_key=90cb39278979ed66254217668439759f");
    myRequest.send();
    myRequest.addEventListener("readystatechange",function(){
        if(myRequest.readyState == 4 && myRequest.status == 200){
            allMovies = JSON.parse(myRequest.response);
            // moviesResult= Array.from(allMovies.results);
            console.log(allMovies);
            display(allMovies.results);
        }
    })    
})
// side stripe nav bar Top rated link API
$('#item3').click(function(){
    // let moviesResult=[];
    let myRequest = new XMLHttpRequest
    myRequest.open("GET","https://api.themoviedb.org/3/movie/top_rated?api_key=90cb39278979ed66254217668439759f");
    myRequest.send();
    myRequest.addEventListener("readystatechange",function(){
        if(myRequest.readyState == 4 && myRequest.status == 200){
            allMovies = JSON.parse(myRequest.response);
            // moviesResult= Array.from(allMovies.results);
            console.log(allMovies);
            display(allMovies.results);
        }
    })    
})
// side stripe nav bar trending link API
$('#item4').click(function(){
    // let moviesResult=[];
    let myRequest = new XMLHttpRequest
    myRequest.open("GET","https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3kWUvBktTcxwMV8MTK15RXg9MeUSbEidybQQtj6CjGq5LphLHl7bSS4zA");
    myRequest.send();
    myRequest.addEventListener("readystatechange",function(){
        if(myRequest.readyState == 4 && myRequest.status == 200){
            allMovies = JSON.parse(myRequest.response);
            // moviesResult= Array.from(allMovies.results);
            console.log(allMovies);
            display(allMovies.results);
        }
    })    
})
// side stripe nav bar Upcoming link API
$('#item5').click(function(){
    // let moviesResult=[];
    let myRequest = new XMLHttpRequest
    myRequest.open("GET","https://api.themoviedb.org/3/movie/upcoming?api_key=90cb39278979ed66254217668439759f");
    myRequest.send();
    myRequest.addEventListener("readystatechange",function(){
        if(myRequest.readyState == 4 && myRequest.status == 200){
            allMovies = JSON.parse(myRequest.response);
            // moviesResult= Array.from(allMovies.results);
            console.log(allMovies);
            display(allMovies.results);
        }
    })    
})
// side stripe nav bar Contactus link location

$('#item6').click(function () {
    
        let hrefElement= $(this).attr('href');
        let currentoffset = $(hrefElement).offset().top;
        console.log(currentoffset);
        $('html,body').animate({scrollTop:currentoffset},5000);
    

})



// functions
function display(argument){
    let html = '';
    // console.log(html);
    console.log(allMovies);
    for(let i = 0; i < argument.length ; i++){
        html += `<div class="baseMovie col-md-4">
        <img src="https://image.tmdb.org/t/p/w500/${argument[i].poster_path}" alt="movie">
        <div class="caption">
            <h2>${argument[i].title}</h2>
            <p>${argument[i].overview}</p>
            <p>release date : ${argument[i].release_date}</p>
            <p>rate : ${argument[i].vote_average}</p>
        </div>
    </div>`
    }
    // console.log(html);
    // console.log(document.getElementById("rowData").innerHTML);
    document.getElementById("rowData").innerHTML = html;
    // console.log(document.getElementById("rowData").innerHTML);

}
/* end moviesfromAPI section */



/* ----------------------------------------- */


/* Contact us section */

// for check Name conditions when key up

$('.contactName').keyup(function(){
    if(isNameMeetConditions() == true){
            console.log("hi");
            $('#alertTextName').css("display","none")

    }
    else{
        console.log('sorry');
        $('#alertTextName').css("display","block")
        $('#submit').innerHTML='class="mt-4 mb-5 btn bg-danger"'
            
        }
        // $('#alertTextName',(function(){
        //     $(this).next().slideToggle(500);
        // }))
    })

// for check Phone conditions when key up

$('.contactPhone').keyup(function(){
    if(isPhoneMeetConditions() == true){
            console.log("hi");
            $('#alertTextPhone').css("display","none")

    }
    else{
        console.log('sorry');
        $('#alertTextPhone').css("display","block")

    }
})

// for check password conditions when key up

$('.contactPassword').keyup(function(){
    if(isPasswordMeetConditions() == true){
            console.log("hi");
            $('#alertTextPassword').css("display","none")

    }
    else{
        console.log('sorry');
        $('#alertTextPassword').css("display","block")

    }
})
// for check Email conditions when key up

$('.contactEmail').keyup(function(){
    if(isEmailMeetConditions() == true){
            console.log("hi");
            $('#alertTextEmail').css("display","none")

    }
    else{
        console.log('sorry');
        $('#alertTextEmail').css("display","block")

    }
})

// for check Age conditions when key up

$('.contactAge').keyup(function(){
    if(isAgeMeetConditions() == true){
            console.log("hi");
            $('#alertTextAge').css("display","none")

    }
    else{
        console.log('sorry');
        $('#alertTextAge').css("display","block")

    }
})
// for check Repassword conditions when key up

$('.contactRePassword').keyup(function(){
    if(isPasswordMatching() == true){
            console.log("hi");
            $('#alertTextRePassword').css("display","none")

    }
    else{
        console.log('sorry');
        $('#alertTextRePassword').css("display","block")

    }
})


// functions




// for check Name conditions
function isNameMeetConditions(){
    var regex = /^[a-zA-Z0-9]+$/;
    if(regex.test(contactName.value)){
        return true;
    }
    else{
        return false;
    }
}
// for check Phone conditions
function isPhoneMeetConditions(){
    var regex = /^01[0125][0-9]{8}$/;
    if(regex.test(contactPhone.value)){
        return true;
    }
    else{
        return false;
    }
}
// for check password conditions
function isPasswordMeetConditions(){
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(regex.test(contactPassword.value)){
        return true;
    }
    else{
        return false;
    }
}
// for check Email conditions
function isEmailMeetConditions(){
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(contactEmail.value)){
        return true;
    }
    else{
        return false;
    }
}

// for check Age conditions
function isAgeMeetConditions(){
    var regex = /^(1[89]|[2-9]\d)$/;
    if(regex.test(contactAge.value)){
        return true;
    }
    else{
        return false;
    }
}
// for check Password Matching
function isPasswordMatching(){
    
    if(contactPassword.value == contactRePassword.value){
        return true;
    }
    else{
        return false;
    }
}
// call this function when press submit button
function submit(){
    $('#submit',function(){
        if(isNameMeetConditions() == true && isPhoneMeetConditions() == true 
        && isPasswordMeetConditions() == true && isEmailMeetConditions()== true
        && isAgeMeetConditions() == true && isPasswordMatching() == true){
            alert('Thanks for your..We will reply you in 48 houres')
        }
        else{
            alert("Please Enter All Data");
        }
    })
}
// to fire submit button event
$('#submit').click(function(){
    submit();
})
/* end Contact us section */
/* ----------------------------------------- */
