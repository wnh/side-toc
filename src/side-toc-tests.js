

function mk_heading(lvl) { return {lvl: lvl, heading: 'Level ' + lvl + ' heading'}; }

module('collect_while_lower')

test('returns an atual object', function() {
  var lst = _.map([1,1,1,1,1,], mk_heading)
  console.log(typeof(lst))
  ok(lst);
});


test('works on a flat list', function() {
  var lst = _.map([1,1,1,1,1], mk_heading)
  
  var ans = SideTOC.collect_while_lower(0, lst);

  equal(ans.length, 1);
  var cs = ans[0].children;
  equal(cs.length, 5);
  
  /*  sum of all the `children` lists of each
   *  element is zero.
   *  Basically means that its a flat list with no children
   */
  equal(
    _.chain(cs).map(function(x) {
                 if(typeof x.children != 'undefined') return x.children.length
                 else return 0
               })
               .foldl(function(x,y){return x+y;}, 0)
               .value(),
    0
  );

});


test('works on two nested structures', function() {
  var lst = _.map([1,2,1,2,1,], mk_heading),
      ans = SideTOC.collect_while_lower(0, lst),
      cs = ans[0].children;

  // only the top level headings //
  equal(cs.length, 3);

  /* First two top level headings have children */
  equal(cs[0].children.length, 1)
  equal(cs[1].children.length, 1)

  /* third one has no children */
  equal(typeof cs[2].children, "undefined")
});


test('three nested structures', function() {
  
  var lst   = _([1,2,3,3,2,3]).map(mk_heading),
      ans   = SideTOC.collect_while_lower(0, lst),
      child = ans[0].children;
  
  equal(child.length, 1);
  equal(child[0].children.length, 2)
  equal(child[0].children[0].children.length, 2)
  equal(child[0].children[1].children.length, 1)

});
