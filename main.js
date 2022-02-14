 
function startclassifying(){
    navigator.mediaDevices.getUserMedia({audio:true})
 classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1YQ0STnrY/model.json", modelReady)} 
 function modelReady(){
     classifier.classify(gotResults)
 } 
 function gotResults(error,results){
if(error){console.error(error)} 
else{console.log(results) 
document.getElementById("resultlabel").innerHTML="I can hear"+results[0].label
 sound=results[0].label
 if(sound=="Clap Noise"){
     document.getElementById("alien1").src="aliens-01.gif" 
     document.getElementById("alien2").src="aliens-02.png" 
     document.getElementById("alien3").src="aliens-03.png" 
     document.getElementById("alien4").src="aliens-04.png" 
 } else if(sound=="Snapping Noise"){
     document.getElementById("alien1").src="aliens-01.png"
     document.getElementById("alien2").src="aliens-02.gif"
     document.getElementById("alien3").src="aliens-03.png" 
     document.getElementById("alien4").src="aliens-04.png" 
 } else if(sound=="Bell Noise"){
     document.getElementById("alien1").src="aliens-01.png"
     document.getElementById("alien2").src="aliens-02.png"
     document.getElementById("alien3").src="aliens-03.gif"
     document.getElementById("alien4").src="aliens-04.png"
 } else{document.getElementById("alien1").src="aliens-01.png"
 document.getElementById("alien2").src="aliens-02.png"  
 document.getElementById("alien3").src="aliens-03.png"                                                      
 document.getElementById("alien4").src="aliens-04.gif"
 }}}
