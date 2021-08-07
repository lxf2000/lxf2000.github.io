var wrapper = document.querySelector('#wrapper');  // 外层盒子
var lis = document.querySelectorAll('.list li');  // 图片
var arrowLeft = document.querySelector('.arrow-left');  // 左箭头
var arrowRight = document.querySelector('.arrow-right');  // 右箭头
var dotLis = document.querySelectorAll('.dot li');  // 小圆点

// 定时器
var timer = 0;
// 当前图片下标
var index = 0;

// 排他
function Remove() {
    for(let i = 0; i < lis.length; i++) {
        // 删除 所有类
        lis[i].classList.remove('active');
        dotLis[i].classList.remove('current');
    }
    // 添加 当前标签的类
    lis[index].className = 'active';
    dotLis[index].className = 'current';
}

// 下一张
function Next() {
    if(index < lis.length - 1) {
        index++;
    } else {
        index = 0;
    }
}

// 上一张
function Prev() {
    if(index == 0) {
        index = lis.length - 1;
    } else {
        index--;
    }
}

// 右箭头
arrowRight.onclick = function() {
    Next();
    Remove();
}

// 左箭头
arrowLeft.onclick = function() {
    Prev();
    Remove();
}

// 小圆点
for(let i = 0; i < dotLis.length; i++) {
    dotLis[i].onclick =  function() {
        let currentIndex = this.getAttribute('data-index');
        index = currentIndex;
        Remove();
    }
}

// 自动轮播
function Automatic() {
    clearInterval(timer);
    timer = setInterval(() => {
            Next() ;
            Remove();
    }, 3500);
}
// 调用自动轮播
Automatic();

// 鼠标移入清除定时器，停止轮播
wrapper.onmouseenter = function() {
    clearInterval(timer);
}

// 鼠标移出启动定时器，开始轮播
wrapper.onmouseleave = function() {
    Automatic();
}