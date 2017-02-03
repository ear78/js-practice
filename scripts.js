"use strict"
    var el1 = document.getElementById('element1');
    el1.addEventListener('mouseover', function(){
        el1.style.cursor = 'pointer';
    })
    el1.addEventListener('click', function(){
        el1.classList.toggle('red-text');
    });

    var el2 = document.getElementById('element2');
    el2.addEventListener('mouseover', function(){
        el2.style.transition = ('all 1s ease');
        el2.classList.add('red-text');
        setTimeout(function(){
            el2.classList.remove('red-text');
        },4000)
    })

    var el3 = document.getElementById('element3');
    el3.addEventListener('mouseover', function(){
        el3.style.cursor = ('pointer');
        el3.style.transition = ('all .5s ease');
        el3.classList.add('blue-text');
    })
    el3.addEventListener('mouseout', function(){
        el3.style.transition = ('all .5s ease');
        el3.classList.remove('blue-text');
    });
