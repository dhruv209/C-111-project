var prediction1="";
var prediction2="";

Webcam.set({
    width:350,
    height:300
});
Webcam.attach("camera");
   function snap() {
       Webcam.snap(function(data_uri){
           document.getElementById("result").innerHTML="<img id='img1'src='"+data_uri+"'>";
       });
   }
   classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YM6yZrgU6/model.json",modelloaded);
   function modelloaded(){
       console.log("model has been loaded");
   }
   