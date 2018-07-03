/**
 * Created by user on 2018/4/5.
 */
// 沿Y轴旋转
var btn = document.getElementById("btn");
var divGroup = document.getElementById("divGroup");
btn.addEventListener('click',function(){
    divGroup.style.transform = 'rotateY(360deg) rotateX(360deg) rotateZ(360deg)';
},false);