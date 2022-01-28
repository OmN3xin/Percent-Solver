function submit(){
    var top_left = document.querySelector("#top_left").value;
    var top_right = document.querySelector("#top_right").value;
    var bottom_left = document.querySelector("#bottom_left").value;
    var bottom_right = document.querySelector("#bottom_right").value;
    var x;
    var anwser = 0;
    top_left != "x"? top_left = parseInt(top_left) :  x = 1;
    top_right != "x" ? top_right = parseInt(top_right) :  x = 2;
    bottom_left != "x" ? bottom_left = parseInt(bottom_left) :  x = 3;
    bottom_right != "x" ? bottom_right = parseInt(bottom_right) :  x = 4;
    if(x == 1){
        anwser = (top_right*bottom_left)/bottom_right
    }if(x == 2){
        anwser = (top_left*bottom_right)/bottom_left
    }if(x == 3){
        anwser = (top_left*bottom_right)/top_right
    }if(x == 4){
        anwser = (bottom_left*top_right)/top_left
    }
    document.getElementById('anwser').innerHTML = "x = "+anwser;
}
