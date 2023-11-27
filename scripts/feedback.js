let b = document.getElementById('next');
var actions = document.querySelectorAll('.action');

    var lastElement = actions.item(actions.length - 1);
    


b.addEventListener('click', function(){
   let idx = this.dataset.idx || 0;
   actions[idx].classList.remove('active');
   if(++idx < actions.length){
       actions[idx].classList.add('active');
       this.dataset.idx = idx;
       console.log(idx)
   }else if(idx == actions.length)
   {
    idx = this.dataset.idx || 0;
    actions[idx].classList.add('active');
       this.dataset.idx = idx;
   }
});