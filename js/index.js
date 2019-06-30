// html字体100px 设置rem
document.documentElement.style.fontSize = $(document.documentElement).width() / 3.75 + 'px';
$(window).on('resize', function () {
    document.documentElement.style.fontSize = $(document.documentElement).width() / 3.75 + 'px';
})

// 景区是否勾选切换
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


// 景区各种联票数据存放

//1、勾选所有景区
var allScenic = [{
    type: "成人联票",
    name: "水公园+烂苹果+云曼温泉+杭州乐园",
    price: "400"
}]


//2、勾选烂苹果
var addLPG = [{
        type: "成人联票",
        name: "水公园+烂苹果",
        price: "240"
    },
    {
        type: "亲子联票",
        name: "水公园+烂苹果",
        price: "350"
    },
    {
        type: "家庭联票",
        name: "水公园+烂苹果",
        price: "580"
    }
]

//3、勾选杭州乐园
var addHL = [{
        type: "成人联票",
        name: "水公园+杭州乐园",
        price: "240"
    },
    {
        type: "亲子联票",
        name: "水公园+杭州乐园",
        price: "350"
    },
    {
        type: "家庭联票",
        name: "水公园+杭州乐园",
        price: "580"
    }
]


//4、勾选云漫温泉
var addYM = [{
        type: "成人联票",
        name: "水公园+云曼温泉",
        price: "240"
    },
    {
        type: "亲子联票",
        name: "水公园+云曼温泉",
        price: "350"
    },
    {
        type: "家庭联票",
        name: "水公园+云曼温泉",
        price: "580"
    }
]



//5、勾选杭州乐园+烂苹果
var addHZLPG = [{
        type: "成人联票",
        name: "水公园+烂苹果+杭州乐园",
        price: "320"
    },
    {
        type: "亲子联票",
        name: "水公园+烂苹果+杭州乐园",
        price: "450"
    }
]


//6、勾选杭州乐园+云曼温泉
var addHZYM = [{
        type: "成人联票",
        name: "水公园+杭州乐园+云曼温泉",
        price: "320"
    },
    {
        type: "亲子联票",
        name: "水公园+杭州乐园+云曼温泉",
        price: "450"
    }
]


//7、勾选烂苹果乐园+云曼温泉
var addLPGYM = [{
        type: "成人联票",
        name: "水公园+烂苹果+云曼温泉",
        price: "320"
    },
    {
        type: "亲子联票",
        name: "水公园+烂苹果+云曼温泉",
        price: "450"
    }
]


//根据联票数组，动态创建HTML
function createItem(arr) {
    let html = "";
    if (arr && arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            html += ` <div class="ticketIntro clearfix">
                        <div class="ticket_left" index="0">
                            <p>${arr[i].type}</p>
                            <p>${arr[i].name}</p>
                        </div>
                        <div class="ticket_right">
                            <p class="price">${arr[i].price}元</p>
                        <a href="#">
                            <p class="buy">立即购买</p>
                        </a>
                        </div>
                    </div>`
        }
        $('.tickets').append(html);
        if (arr.length > 2 && arr.length <= 4) {
            $('.ticketIntro').css('padding', '0.12rem 0.07rem')
            $('.ticketIntro').css('margin-top', '0.08rem')
        } else if (arr.length >= 5) {
            $('.ticketIntro').css('padding', '0.08rem 0.07rem')
            $('.ticketIntro').css('margin-top', '0.06rem')
        }
    }
}

function show() {
    var oneIndex = $('.list_box ul').children().eq(0).data('index');
    var twoIndex = $('.list_box ul').children().eq(1).data('index');
    var threeIndex = $('.list_box ul').children().eq(2).data('index');
    var intro = $('.tickets .ticketIntro');
    //每次点击过勾选或未勾选后，先删除动态创建的元素，在根据不同的景点动态创建HTML元素
    if (oneIndex == 1 && twoIndex == 3 && threeIndex == 5) {
        intro.remove()
    } else if (oneIndex == 2 && twoIndex == 3 && threeIndex == 5) {
        intro.remove()
        createItem(addHL);
    } else if (oneIndex == 1 && twoIndex == 4 && threeIndex == 5) {
        intro.remove()
        createItem(addLPG);
    } else if (oneIndex == 1 && twoIndex == 3 && threeIndex == 6) {
        intro.remove()
        createItem(addYM);
    } else if (oneIndex == 2 && twoIndex == 4 && threeIndex == 5) {
        intro.remove()
        createItem(addHZLPG);
    } else if (oneIndex == 2 && twoIndex == 3 && threeIndex == 6) {
        intro.remove()
        createItem(addHZYM);
    } else if (oneIndex == 1 && twoIndex == 4 && threeIndex == 6) {
        intro.remove()
        createItem(addLPGYM);
    } else if (oneIndex == 2 && twoIndex == 4 && threeIndex == 6) {
        intro.remove()
        createItem(allScenic)
    }
}