$(document).ready(function() {

    let newArr = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
    ];
    
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
    
    function winPlayerOne() {
        newArr.forEach((item)=>{
            if(arrListItem[item[0]].classList.contains('delete') && arrListItem[item[1]].classList.contains('delete') && arrListItem[item[2]].classList.contains('delete')){
                $('.playerOne').css('display', 'block');
                $('.draw').css('display', 'none');
            }
        })
    }

    function winPlayerTwo() {
        newArr.forEach((item)=>{
            if(arrListItem[item[0]].classList.contains('solid') && arrListItem[item[1]].classList.contains('delete') && arrListItem[item[2]].classList.contains('solid')){
                $('.playerTwo').css('display', 'block');
                $('.draw').css('display', 'none')
            }
        })
    }

    function draw(){
        let one = arrListItem.filter(item => item.classList.contains('delete'));
        let two = arrListItem.filter(item => item.classList.contains('solid'));
        if((one.length + two.length) === 9){$('.draw').css('display', 'block')};
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