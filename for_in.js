function forin(a) {
    
    
    for ( c in Calc) {
        c.ma
        c.mb
    }
    
    for (var i =0; i<Calc.length; i++) {
        Calc[i].ma
    }
    
    if(a == 1){
        // ok   
    }
    
    if(a == '1') {
        // ok
    }
    
    if (a === 1) {
        
    }

    
    a = 0;
    
    a = a + 1;
    a++;
    a += 1;
    
    ++a;
    
    a= a || 0;
    a = a || '';
    a = a || {};
    a = (a > 0 ? 'true' : 'false') || 'return';
    
    if(a > 0) {
        "true";
    } else {
        "false"
    }
    if (a == undefined) {
        a = "return";    
    }
    
    
    a = a.length || [];
    
    
    if(typeof a == 'number'){
        
    } else {
        a = 0;
    }
    
    if(a.length == undefind){}
    if(a.length == 0){}
    
    var obj = {};
    obj.name = "kimyongyeon";
    obj['name'] = "kimyongyeon";
    
    obj['kim'] = 1;
    obj['yong'] = 2;
    obj['yeon'] = 3;
    var array = ['kim','yong','yeon'];

    for(var i=0; i<array.length; i++) {
        console.log(obj[array[i]]); 
    }
    

    
    
    // 얇은복사
    a = {x: 1};
    b = a;
    
    b.x = 2;
    
    a.x; // 2
    b.x; // 2
    
    // 깊은복사
    b = $.expend(a, b, true);
    b.x = 2;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

forin('1');