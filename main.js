noseX=30;
noseY=30;


function preload(){
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
 }
 

function draw(){
    image(video,0,0,400,300);
    image(mustache,noseX,noseY,50,40)
}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function takeSnapshot(){
    save('your_image');
    
}



function modelLoaded(){
    console.log('model loaded successfuly');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('noseX= '+noseX);
        console.log('noseY= '+noseY);
    }
}