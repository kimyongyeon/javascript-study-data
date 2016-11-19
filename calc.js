// 함수를 만들어서 사칙연산을 구현하시오. 함수 인자, 리턴 
function sub(a, b) {
    var result = eval(a + calc_control('+') + b);
    eval("sub(a,b);");
    return a + b;
}

function minus(a, b) {
    if (typeof a != 'number')
        return '';
    
    try {
        adddlert("Welcome guest!");
    }
    catch(err) {
        console.log(err);
        //document.getElementById("demo").innerHTML = err.message;
    }
}

function nanum(a, b) {}

function gob(a, b) {}

function calc_control(sel) {
    if (sel == '+') {
        return '+';
    }
    if (sel == '-') {}
    if (sel == '/') {}
    if (sel == '*') {}
}

function myprint(a, b, result) {
    console.log(a, b, result);
    var r = '첫번째 변수는 ' + a + '두번째 변수는 ' + b + '결과는 ' + result;
    console.log(r);
}

sub(1, 2);
minus(1, 2);
nanum(1, 2);
gob(1, 2);

// 배열을 이용해서 다양한 인자를 받아서 합을 처리하시오. FOR, ARRAY
sub([1, 2, 3, 4, 5, 6, 7]);
sub([1, 2, 3, 4, 5]);
sub([1, 2, 3, 7]);

// 사칙연산 함수에 버그를 찾아서 고치시오. IF
// typeof

// 문자열 포맷을 데이트타입으로 변경하시오. 20001119 --> 2000-11-19

// 문자열중에서 , 콤바를 찾아서 모두 삭제 하시오. 11,2,3,3,4,5,6,7,7,8,9 --> 11233454566

// 구분자를 통한 배열을 만드시오 '1,2,3,4,5,6,7,8' --> [1,2,3,4,5,5,6,7,8]

// 깊은 복사, 얇은 복사에 대해서 알아보자. 배열을 복사하시오. 값복사와 참조를 아는지 ?

// 탑 메뉴, 슬라이드 배너, 플랙서블 


// 1. 함수형 객체
function Calc() {
    var ma, mb, mresult;

    this.calcu = function (a, b, isCase) {
        switch (isCase) {
            case 'sub':
                return;
        }
    }

    // 덧셈
    this.sub = function (a, b) {
            return a + b;
        }
        // 뺄셈
    this.minus = function (a, b) {
            return a - b;
        }
        // 나눗셈
    this.nanum = function (a, b) {
            return a / b;
        }
        // 곱
    this.gob = function (a, b) {
            return a * b;
        }
        // 출력 함수 
    this.myprint = function () {
        console.log(a, b, result);
    }
}

// 호출
var calc = new Calc();
calc.sub(1, 2);
calc.myprint();
calc.minus(1, 2);
calc.myprint();
calc.nanum(1, 2);
calc.myprint();
calc.gob(1, 2);
calc.myprint();

// 2. 리터널 객체 
var Calc = {
    // ?
    변수: 0, // 숫자타입으로 변수 선언
    함수: {}, // 리터널 객체 선언
    함수: [], //  배열 선언

    함수: function () {}, // 매개변수가 없고 리턴도 없는거 함수모양
    함수: function (a) {}, // 매개변수가 있고 리턴이 없는 함수모양
    함수: function (a) {
        return 값;
    }, // 매개변수가 있고 리턴이 있는 함수모양

}




var Calc = {
    ma: 0,
    mb: 0,
    mresult: 0,
    sub: function (a, b) {
        //ma = a;
        //mb = b;
        //variable_proc(a, b);
        //mresult = a + b;
        //calc_proc('+');
        //return a + b;
        fn_calc_proc(a,b,'+');
    },
    minus: function (a, b) {
        //variable_proc(a, b);
        //calc_proc('-');
        //return a - b;
        fn_calc_proc(a,b,'+');
    },
    gob: function (a, b) {
        //variable_proc(a, b);
        //calc_proc('*');
        //return a * b;
        fn_calc_proc(a,b,'+');
    },
    nanum: function (a, b) {
        //variable_proc(a, b);
        //calc_proc('/');
        //return a / b;
        fn_calc_proc(a,b,'+');
    },
    variable_proc: function (a, b) {
        ma = a;
        mb = b;
    },
    calc_proc: function (x) {
        return ma x mb;
    },
    fn_calc_proc : function(a,b,x) {
        variable_proc(a, b);
        calc_proc(x);
    },
    myprint: function () {
        console.log(ma, mb, mresult);
    }
}

Calc.minus(1, 3);
Calc.myprint();
