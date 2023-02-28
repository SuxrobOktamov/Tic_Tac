$(document).ready(function() {

    let newArr = [
        [0, 1, 2, 3],
        [5, 6, 7, 8],
        [10, 11, 12, 13],
        [15, 16, 17, 18],
        [1, 2, 3, 4],
        [6, 7, 8, 9],
        [11, 12, 13, 14],
        [16, 17, 18, 19],
        [0, 5, 10, 15],
        [1, 6, 11, 16],
        [2, 7, 12, 17],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
        [3, 7, 11, 15],
        [4, 8, 12, 16],
        [0, 6, 12, 18],
        [1, 7, 13, 19],
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
            if(arrListItem[item[0]].classList.contains('delete') && arrListItem[item[1]].classList.contains('delete') && arrListItem[item[2]].classList.contains('delete') && arrListItem[item[3]].classList.contains('delete')){
                arrListItem.forEach((item)=>{
                    item.classList.remove('delete');
                    item.classList.remove('solid');
                })
                arrListItem[item[0]].classList.add('win', 'delete'); 
                arrListItem[item[1]].classList.add('win', 'delete') ;
                arrListItem[item[2]].classList.add('win', 'delete') ;
                arrListItem[item[3]].classList.add('win', 'delete');
                
                $('.playerOne').css('display', 'block');
                $('.draw').css('display', 'none');
            }
        })
    }

    function winPlayerTwo() {
        newArr.forEach((item)=>{
            if(arrListItem[item[0]].classList.contains('solid') && arrListItem[item[1]].classList.contains('solid') && arrListItem[item[2]].classList.contains('solid') && arrListItem[item[3]].classList.contains('solid')){
                arrListItem.forEach((item)=>{
                    item.classList.remove('delete');
                    item.classList.remove('solid');
                })
                arrListItem[item[0]].classList.add('win', 'solid'); 
                arrListItem[item[1]].classList.add('win', 'solid') ;
                arrListItem[item[2]].classList.add('win', 'solid') ;
                arrListItem[item[3]].classList.add('win', 'solid');
                $('.playerTwo').css('display', 'block');
                $('.draw').css('display', 'none')
            }
        })
    }

    function draw(){
        let one = arrListItem.filter(item => item.classList.contains('delete'));
        let two = arrListItem.filter(item => item.classList.contains('solid'));
        if((one.length + two.length) === 20){$('.draw').css('display', 'block')};
    }
    
    $.each($('.submit'), function(i, item){
        item.addEventListener('click',()=>{
            $('.playerTwo').css('display', 'none')
            $('.playerOne').css('display', 'none')
            $('.draw').css('display', 'none')
            $.each(arrListItem, function(i, item){
                item.classList.remove('solid', 'delete','win');
            })
        })
    })


    $('#form').on( 'submit' ,function(e){
        e.preventDefault();
        $('.playerOne h2').html(`${$('#fristPlayer').val()} is the winner <svg style ="fill: rgb(34, 255, 0)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>`);
        $('.playerTwo h2').html(`${$('#secondPlayer').val()} is the winner <svg style ="fill: rgb(34, 255, 0)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>`);
        $('.list-item-row').slideDown(1000);
        $('#form').slideUp(1500);
        $('#finish').slideDown(100); 
        $(':text').val('');
    })

    $('#finish').click(function(){
        $('.list-item-row').slideUp(1000);
        $('#form').slideDown(1500);
        $('#finish').slideUp(100); 
        
    })
})