song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
status_leftWrist = "";
status_rightWrist = "";
leftWrist_score =0;

function preload(){
    song1 = loadSound("Imagine_Dragons_Enemy_from_the_series_Arcane_League_of_Legends__(thinkNews.com.ng).mp3");
    song2 = loadSound("Imagine_Dragons_Bones_(thinkNews.com.ng).mp3");
}

function setup(){
    canvas = createCanvas(750,650);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    pose = ml5.poseNet(video,modelReady);
    pose.on("pose",gotPoses);
}

function draw(){
    image(video,0,0,750,650);

    status_leftWrist = song1.isPlaying();
    
    fill("red");
    stroke("red");

    if(leftWrist_score >0.2){
        circle(leftWristX,leftWristY,25);
        status_rightWrist = song2.stop();
        
        if(status_leftWrist == false){
            song1.play();
            document.getElementById("song_name").innerHTML = "Enemy";
        }
    }
}

function modelReady(){
    console.log("MODEL IS READY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}
function gotPoses(results){
    if(results){
        console.log(results);
       leftWristX = results[0].pose.leftWrist.x;
       leftWristY = results[0].pose.leftWrist.y;
       leftWrist_score= results[0].pose.keypoints[9].score;
        console.log("Left wrist x = " + leftWristX + " left wrist y = " + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
       rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x = " + rightWristX + " right wrist y = " + rightWristY);
    }
}