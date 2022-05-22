https://teachablemachine.withgoogle.com/models/_5Ora6uE7/

Webcam.set({
    width: 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});
cam=document.getElementById("cam");
Webcam.attach('cam');

function take(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured" src="'+data_uri+'">';
    });
}
console.log("ml5 version", ml5.version);
function modelLoaded(){
    console.log("model is loaded");
}
classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_5Ora6uE7/model.json', modelLoaded);

function gt(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("s1").innerHTML=results[0].label;
        document.getElementById("s2").innerHTML=results[0].confidence.toFixed(2);
        
    }
}

function check(){
    img=document.getElementById("captured");
classifier.classify(img, gt);
}