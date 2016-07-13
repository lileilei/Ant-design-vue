/**
 * Created by lilei on 2016/7/8.
 */
function* gen(x){
    console.log("++++++++++++++++++++++");
    try {
        yield x;
    } catch (e){
        console.log(e);
    }
    return "123";
}

var g = gen(1);
console.log(g.next());
g.throw("戳粗了");
console.log(g.next());

