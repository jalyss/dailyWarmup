/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function (array) {
    let res = false
    for (let i = 0; i < this.length; i++) {
        array.includes(this[i]) ? res = true : res = false
        // console.log( array,this[i],array.includes(this[i]),res)
    }
    return res
}

var a = ['commit', 'push']
console.log(a.isSubsetOf(['commit', 'rebase', 'push', 'blame']))
