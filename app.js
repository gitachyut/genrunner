const runGenerator = function (g) {
    var it = g(), ret;
    (function iterate(val){
        ret = it.next( val );
        if (!ret.done) {
            if ("then" in ret.value) {
                ret.value.then( iterate );
            }
            else {
                setTimeout( function(){
                    iterate( ret.value );
                }, 0 );
            }
        }
    })();
}

module.exports = runGenerator
