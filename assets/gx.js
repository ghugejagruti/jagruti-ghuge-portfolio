(function(){
  var lb=document.createElement('div');lb.className='gx-lb';lb.innerHTML='<button aria-label="Close">×</button><img alt="">';
  document.body.appendChild(lb);var im=lb.querySelector('img');
  function close(){lb.classList.remove('on');document.body.style.overflow=''}
  lb.addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  document.querySelectorAll('.gx-shot').forEach(function(s){
    s.addEventListener('click',function(){var i=s.querySelector('img');im.src=i.currentSrc||i.src;im.alt=i.alt;lb.classList.toggle('phone',s.classList.contains('phone'));lb.scrollTop=0;lb.classList.add('on');document.body.style.overflow='hidden'});
  });
})();
