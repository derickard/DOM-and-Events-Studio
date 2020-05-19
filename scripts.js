// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoff = null;
let landing = null;
let missionAbort = null;
let flightStatus = null;
let shuttleBackground = null;
let shuttleHeight = null;
let up = null;
let down = null;
let right = null;
let left = null;
let rocket = null;
let height = 0;

function init() {
    takeoff = document.getElementById("takeoff");
    landing = document.getElementById("landing");
    missionAbort = document.getElementById("missionAbort");
    flightStatus = document.getElementById("flightStatus");
    shuttleBackground = document.getElementById("shuttleBackground");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    rocket = document.getElementById("rocket");
    up = document.getElementById("up");
    down = document.getElementById("down");
    right = document.getElementById("right");
    left = document.getElementById("left");
    let y = 0;  // Rocket y (vertical) position
    let x = 0;  // Rocket x (horizontal) position

    takeoff.addEventListener("click", function () {
        if(confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue";
            height += 10000;
            shuttleHeight.innerHTML = height;
            rocket.style.top = "0px";
            rocket.style.left = "0px";
        }
    });

    landing.addEventListener("click", function () {
        alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green";
        height = 0;
        shuttleHeight.innerHTML = height;
        rocket.style.top = "0px";
        rocket.style.left = "0px";
        x = 0;
        y = 0;
    });

    missionAbort.addEventListener("click", function () {
        if(confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green";
            height = 0;
            shuttleHeight.innerHTML = height;
            rocket.style.top = "0px";
            rocket.style.left = "0px";
            x = 0;
            y = 0;
        }
    });

    up.addEventListener("click", function() {
        move("up");
        shuttleHeight.innerHTML = height;
    });

    down.addEventListener("click", function() {
        move("down");
        shuttleHeight.innerHTML = height;
    });

    left.addEventListener("click", function () {
        move("left");
    });

    right.addEventListener("click", function () {
        move("right");
    });


    function move(direction) {

        console.log(`y: ${y}`);

        console.log(`x: ${x}`);
        switch(direction) {
            case "up":
                if (rocket.offsetTop >= 10) {
                    y -= 10;
                    height += 10000;
                    rocket.style.top = y + "px";
                }
                break;
            case "down":
                if ( (rocket.offsetTop + 75) < shuttleBackground.offsetHeight ) {
                    y += 10;
                    height -= 10000;
                    rocket.style.top = y + "px";
                }
                break;
            case "left":
                if ( (x-rocket.offsetWidth/2) > (-1)*(shuttleBackground.offsetWidth/2) ) {
                    x -= 10;
                    rocket.style.left = x + "px";
                }                
                break;
            case "right":
                if ( (x+rocket.offsetWidth/2) < shuttleBackground.offsetWidth/2) {
                    x += 10;
                    rocket.style.left = x + "px";
                }
                break;
        }
        return shuttleHeight;
    };


}

window.onload = init;