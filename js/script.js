
$(document).ready(function() {
    let myArr = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
        {id:7},
        {id:8},
        {id:9}
    ];
    let listItem = $('.list-item');

    $.each(myArr, function(index, value) {
        listItem.append(`<li class="item one"><span id="num">${value.id}</span></li>`);
    });

    let arrListItem = $('.list-item li').toArray();
    $.each(arrListItem, function(i, item){
        item.addEventListener('mouseover', ()=>{
            if(item.classList.contains('one') && !item.classList.contains('solid') && !item.classList.contains('delete')){
                item.classList.add('delete-btn');
            }else if(!item.classList.contains('solid') && !item.classList.contains('delete')){
                item.classList.add('solid-btn');
            }
        });

        item.addEventListener('mouseout', ()=>{
            item.classList.remove('solid-btn');
            item.classList.remove('delete-btn');
        })
    })


    $.each(arrListItem, function(i, item) {
        item.addEventListener('click', function() {
            if(item.classList.contains('one') && !item.classList.contains('solid') && !item.classList.contains('delete')){
                item.classList.add('delete');
                arrListItem.forEach(element => {
                    element.classList.remove('one');
                });
                draw();
                winPlayerOne()
                
            }else if(!item.classList.contains('solid') && !item.classList.contains('delete')){
                item.classList.add('solid');
                arrListItem.forEach(element => {
                    element.classList.add('one');
                });
                draw();
                winPlayerTwo()
            }
        })
    })


    function draw(){
        let one = arrListItem.filter(item => item.classList.contains('delete'));
        let two = arrListItem.filter(item => item.classList.contains('solid'));
        if((one.length + two.length) === 9){
            $('.draw').css('display', 'block')
        }
    }

    function winPlayerOne() {
        if(
            arrListItem[0].classList.contains('delete') && arrListItem[1].classList.contains('delete') && arrListItem[2].classList.contains('delete') ||
            arrListItem[0].classList.contains('delete') && arrListItem[4].classList.contains('delete') && arrListItem[8].classList.contains('delete') ||
            arrListItem[0].classList.contains('delete') && arrListItem[3].classList.contains('delete') && arrListItem[6].classList.contains('delete') ||
            arrListItem[1].classList.contains('delete') && arrListItem[4].classList.contains('delete') && arrListItem[7].classList.contains('delete') ||
            arrListItem[2].classList.contains('delete') && arrListItem[4].classList.contains('delete') && arrListItem[6].classList.contains('delete') ||
            arrListItem[2].classList.contains('delete') && arrListItem[5].classList.contains('delete') && arrListItem[8].classList.contains('delete') ||
            arrListItem[3].classList.contains('delete') && arrListItem[4].classList.contains('delete') && arrListItem[5].classList.contains('delete') ||
            arrListItem[6].classList.contains('delete') && arrListItem[7].classList.contains('delete') && arrListItem[8].classList.contains('delete')
        ){$('.playerOne').css('display', 'block')}
    }

    function winPlayerTwo() {
        if(
            arrListItem[0].classList.contains('solid') && arrListItem[1].classList.contains('solid') && arrListItem[2].classList.contains('solid') ||
            arrListItem[0].classList.contains('solid') && arrListItem[4].classList.contains('solid') && arrListItem[8].classList.contains('solid') ||
            arrListItem[0].classList.contains('solid') && arrListItem[3].classList.contains('solid') && arrListItem[6].classList.contains('solid') ||
            arrListItem[1].classList.contains('solid') && arrListItem[4].classList.contains('solid') && arrListItem[7].classList.contains('solid') ||
            arrListItem[2].classList.contains('solid') && arrListItem[4].classList.contains('solid') && arrListItem[6].classList.contains('solid') ||
            arrListItem[2].classList.contains('solid') && arrListItem[5].classList.contains('solid') && arrListItem[8].classList.contains('solid') ||
            arrListItem[3].classList.contains('solid') && arrListItem[4].classList.contains('solid') && arrListItem[5].classList.contains('solid') ||
            arrListItem[6].classList.contains('solid') && arrListItem[7].classList.contains('solid') && arrListItem[8].classList.contains('solid')
        ){$('.playerTwo').css('display', 'block');}
    }
    
    $.each($('.submit'), function(i, item){
        item.addEventListener('click',()=>{
            $('.playerTwo').css('display', 'none')
            $('.playerOne').css('display', 'none')
            $('.draw').css('display', 'none')
            $.each(arrListItem, function(i, item){
                item.classList.remove('solid')
                item.classList.remove('delete')
                item.classList.add('one')
            })
        })
    })
})