function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function myfunc() {
    let input_loc = document.querySelector("#input_loc");
    if (input_loc.value ==  "") {
        alert("ENTER A CITY NAME TO GET RESULTS...");
    } else {
        let img = document.querySelector("img");
        let east_loc = document.querySelector("#east_loc");
        let west_loc = document.querySelector("#west_loc"); 
        let north_loc = document.querySelector("#north_loc");
        let south_loc = document.querySelector("#south_loc");
        
        let east_temp = document.querySelector("#east_temp");
        let west_temp = document.querySelector("#west_temp");
        let north_temp = document.querySelector("#north_temp");
        let south_temp = document.querySelector("#south_temp");
        let out_loc = document.querySelector("#out_loc");
        let out_temp = document.querySelector("#out_temp");
        
        let mon_temp = document.querySelector("#mon_temp");
        let tue_temp = document.querySelector("#tue_temp");
        let wed_temp = document.querySelector("#wed_temp");
        let thurs_temp = document.querySelector("#thurs_temp");
        let fri_temp = document.querySelector("#fri_temp");
        let sat_temp = document.querySelector("#sat_temp");
        let sun_temp = document.querySelector("#sun_temp");
    
        east_loc.innerHTML = "EAST " + input_loc.value;
        west_loc.innerHTML = "WEST " + input_loc.value;
        north_loc.innerHTML = "NORTH " + input_loc.value;
        south_loc.innerHTML = "SOUTH " + input_loc.value;
        out_loc.innerHTML = input_loc.value;
    
        let east = Math.trunc(rand(0,50));
        let west = Math.trunc(rand(0,50));
        let north = Math.trunc(rand(0,50));
        let south = Math.trunc(rand(0,50));
    
        east_temp.innerHTML = east+"&#176C";
        west_temp.innerHTML = west+"&#176C";
        north_temp.innerHTML = north+"&#176C";
        south_temp.innerHTML = south+"&#176C";

        mon_temp.innerHTML = Math.trunc(rand(0,50))+"&#176C";
        tue_temp.innerHTML = Math.trunc(rand(0,50))+"&#176C";
        wed_temp.innerHTML = Math.trunc(rand(0,50))+"&#176C";
        thurs_temp.innerHTML = Math.trunc(rand(0,50))+"&#176C";
        fri_temp.innerHTML = Math.trunc(rand(0,50))+"&#176C";
        sat_temp.innerHTML = Math.trunc(rand(0,50))+"&#176C";
        sun_temp.innerHTML = Math.trunc(rand(0,50))+"&#176C";
        let out = (east+west+north+south)/4;
        if (out<15) {
            img.src="snow.png";
        } else if (out>=15 && out<25) {
            img.src="breeze.jpg";
        } else if (out>=25 && out<35) {
            img.src="rainy.webp";
        } else {
            img.src="sunny.webp"
        }

        out_temp.innerHTML = Math.trunc(out) + "&#176C";
 
    
        let mon = document.querySelector("mon");
        let tue = document.querySelector("tue");
        let wed = document.querySelector("wed");
        let thur = document.querySelector("thur");
        let fri = document.querySelector("fri");
        let sat = document.querySelector("sat");
        let sun = document.querySelector("sun");
    
        mon.innerHTML="MONDAY";
        tue.innerHTML="TUESDAY";
        wed.innerHTML="WEDNESDAY";
        thur.innerHTML="THURSDAY";
        fri.innerHTML="FRIDAY";
        sat.innerHTML="SATURDAY";
        sun.innerHTML="SUNDAY";
    }
}


function daytemp(clicked_id) {

    let out_day = document.querySelector("#out_day");

    // alert(clicked_id);
    switch (clicked_id) {
        case "mon" :
            out_day.innerHTML="MONDAY";
            break;
        case "tue" :
            out_day.innerHTML="TUESDAY";
            break;
        case "wed" :
            out_day.innerHTML="WEDNESDAY";
            break;
        case "thur" :
            out_day.innerHTML="THURSDAY";
            break;
        case "fri" :
            out_day.innerHTML="FRIDAY";
            break;
        case "sat" :
            out_day.innerHTML="SATURDAY";
            break;
        case "sun" :
            out_day.innerHTML="SUNDAY";
            break;

    }

    let tymtemp11 = document.querySelector("#tymtemp11");
    let tymtemp2 = document.querySelector("#tymtemp2");
    let tymtemp5 = document.querySelector("#tymtemp5");
    let tymtemp9 = document.querySelector("#tymtemp9");

    tymtemp11.innerHTML = Math.trunc(rand(0,50))+"&#176C";
    tymtemp2.innerHTML = Math.trunc(rand(0,50))+"&#176C";
    tymtemp5.innerHTML = Math.trunc(rand(0,50))+"&#176C";
    tymtemp9.innerHTML = Math.trunc(rand(0,50))+"&#176C";
}