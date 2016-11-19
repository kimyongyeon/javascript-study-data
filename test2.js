private : _name, _phone
public : name, phone

// class
public Test() {
    this.name = ''; // public
    this._phone = ''; // private
}

var T = new Test();
T.name = ''; // 가능
T._phone = ''; // 불가능

public test() {
    
}

// 이름짓기
function IsNullCheck()
boolean : is

헝가리표기법
isNullCheck
언더바
is_null_check

값을 가져올때 getName
값을 넣을때는 setName
초기화 initUi

// 함수형 클래스
function Yy() {
    var _name = '';
    var _phone = '';
    // setter / getter
    this.getName = function() {
        return _name;
    }
    this.setName = function(n) {
        _name = n;
    }
    this.getphone = null;
    this.setPhone = null;
}

Yy.prototype.getPhone = function() {
    return phone;
}

Yy.prototype.setPhone = function(p) {
    this._phone = p;
}

// this : 자바스크립트에 scope 
// $(this) : jquery this 
$(".name").on("click", function(){
    $(".name").css("background", "black");
    $(this).css("background", "black");
});

// 객체 리터널 방식
var Yy = {
    name : '',
    phone : '',
    setName : function(n) {
        this.name = n;
    },
    getName : function() {
        return this.name;
    }
}

function 일급함수() {
    this.name = 일급함수자식(){};
}

function 고차함수(함수) {
    //함수();
    return 함수();
}

function 재귀함수() {
    재귀함수();
}

// 거짓 boolean
undefined, null, NaN, 0
// 참 
true, 'false'

// 초기화
function nameConvert(n) {
    
    if(n == undefined) {
        
    }
    if(n == false) {
        
    }
    
    n = n || '';
    
    if(n == '') {
        return '';
    }
    n = n.substring(1,3);
}

nameConvert('kimmm'); // 참
nameConvert('');
nameConvert(null);




















