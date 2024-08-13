//UI

let getprofilenav = document.querySelector('.select');
let getdivlabels = document.querySelector('.labels');

getdivlabels.addEventListener('click',function(){
    if(getprofilenav.classList.contains('current')){
        getprofilenav.classList.remove('current');
    }else{
        getprofilenav.classList.add('current');
    }
})


