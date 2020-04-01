window.onload=function(){
   var osp = document.getElementById('span');
   var oxia = document.getElementById('xia');
   var osp1 = document.getElementById('sp1');
   var osp2 = document.getElementById('sp2');
   var oban = document.getElementById('ban');
       osp.onclick = function(){
            if(oxia.style.display=='none'){
                oxia.style.display='block';
            }else{
                oxia.style.display='none';
            }
       }
  
   osp1.onclick = function(){
       oban.style.left='0';
   }
   osp2.onclick = function(){
    oban.style.left='-100%';
}
}