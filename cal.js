//함수를 만들어서 사칙연산을 구현하시오. FUNCTION, RETURN..
function sub(a,b){
    return a+b;

}

function minus(a,b){
    return a-b;
    
}

function nanum(a,b){
    return a/b;
    
}

function gob(a,b){
    return a*b;
}

function myprint(a,b,result){
    console.log(a,b,result);
    var r = '첫번째 변수는'+ a + '두번째 변수는' + b + '결과는' = result;
    console.log(r);
}
sub(1,2);
minus(1,2);
nanum(1,2);
gob(1,2);

/*=======================*/
//배열을 이용해서 다양한 인자를 받아서 합을 처리하시오. FOR, ARRAY
sub([1,2,3,4,5,6,7]);
sub([1,2,3,4,5,6]);
sub([1,4,5]);
/*=======================*/
//사칙연산 함수에 버그를 찾아서 고치시오. IF
//typeof

//문자열 포맷을 데이트타입으로 변경하시오. 20001119 --> 2000-11-19

//문자열중에서 , 콤마를 찾아서 모두 삭제 하시오. 11,2,3,3,4,5,6,7,7 --> 1123345677

//구분자를 통한 배열을 만드시오 '1,2,3,4,5,6,7,8' --> [1,2,3,4,5,6,7,8]

//깊은 복사, 얇은 복사에 대해서 알아보자.(오브젝트를 복사) 배열을 복사하시오. 값복사와 참조를 아는지?

//탑 메뉴, 슬라이드 배너, 플랙서블

//에버노트 6가지 테스트(일급함수~)
/*=======================*/
var Calc = {
    function(a,b,result){
        return a+b;
        return a-b;
        return a/b;
        return a*b;
    }
}
//땡
/*=========================*/
var Calc = {
    ma : 0, 
    mb : 0, 
    mresult : 0;
    sub: function(a,b){
    //ma = a;
    //mb = b;
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    gob: function(a,b){
        return a*b;
    },
    nanum: function(a,b){
        return a/b;
    },
    variable_proc: function(a,b){
        ma = a;
        mb = b;
    }
    myprint: function(){
        console.log(ma, mb, mresult);
    }
}
/*======================================*/
//전역변수var
//if, switcht : if문은 구간
//for문 복잡할때, 속도가빠르다, while문 단순
//while문 do while문
//throw? , try - catch문(에러가 생길 것 같은 경우 감싸서 확인)?
//entitycode &;
//
//for in문
//underscore.js 
//컬렉션, 함수를 배열로...
// ==값 비교, ===동등연산자(참초 비교)
// a+=1 a++ 
//typeof 배열은 object로 나온다
// a = a || 0;
// a = a || '';
// a = a || {}; 삼항연산자 사용한 초기화
/*
    var obj = {};
    obj.name = "leewoohyung";
    obj['name'] = "leewoohyung";
    
    obj['lee'] = 1;
    obj['woo'] = 2;
    obj['hyung] = 3;
    var arry = ['lee','woo','hyung'];
    
    for(var i=0; i<array.length; i++){
        console.log(obj[array[i]]);
    }
*/
