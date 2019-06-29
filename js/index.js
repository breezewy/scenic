// html字体100px 设置rem
document.documentElement.style.fontSize = $(document.documentElement).width() / 3.75 + 'px';
$(window).on('resize', function () {
    document.documentElement.style.fontSize = $(document.documentElement).width() / 3.75 + 'px';
})


var ticket = $(".tickets .ticketIntro");
$('.list_box ul').on('click', 'li', function () {
    if ($(this).hasClass("toggle")) {
        $(this).removeClass("toggle");
        $(this).find('.circle').attr("src", "./images/unchoose.png");
        if ($(this).data('index') == "2") {
            $(this).data('index', "1")
        } else if ($(this).data('index') == "4") {
            $(this).data('index', "3")
        } else if ($(this).data('index') == "6") {
            $(this).data('index', "5")
        }
    } else {
        $(this).addClass("toggle");
        $(this).find('.circle').attr("src", "./images/choose.png");
        console.log($(this).find('dd'))
        if ($(this).data('index') == "1") {
            $(this).data('index', "2")
        } else if ($(this).data('index') == "3") {
            $(this).data('index', "4")
        } else if ($(this).data('index') == "5") {
            $(this).data('index', "6")
            console.log($(this).data('index'))
        }
    }
    show()
})

function show() {
    var oneIndex = $('.list_box ul').children().eq(0).data('index');
    var twoIndex = $('.list_box ul').children().eq(1).data('index');
    var threeIndex = $('.list_box ul').children().eq(2).data('index');
    console.log(ticket)
    if (oneIndex == 1 && twoIndex == 3 && threeIndex == 5) {
        ticket.css("display", "none")
    } else if (oneIndex == 2 && twoIndex == 3 && threeIndex == 5) {
        ticket.eq(0).css("display", "block").siblings().css("display", "none")
    } else if (oneIndex == 1 && twoIndex == 4 && threeIndex == 5) {
        ticket.eq(1).css("display", "block").siblings().css("display", "none")
    } else if (oneIndex == 1 && twoIndex == 3 && threeIndex == 6) {
        ticket.eq(2).css("display", "block").siblings().css("display", "none")
    } else if (oneIndex == 2 && twoIndex == 4 && threeIndex == 5) {
        ticket.eq(3).css("display", "block").siblings().css("display", "none")
    } else if (oneIndex == 2 && twoIndex == 3 && threeIndex == 6) {
        ticket.eq(5).css("display", "block").siblings().css("display", "none")
    } else if (oneIndex == 1 && twoIndex == 4 && threeIndex == 6) {
        ticket.eq(4).css("display", "block").siblings().css("display", "none")
    } else if (oneIndex == 2 && twoIndex == 4 && threeIndex == 6) {
        ticket.eq(6).css("display", "block").siblings().css("display", "none")
    }
}