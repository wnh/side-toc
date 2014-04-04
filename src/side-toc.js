
function dump(x){
  console.log( JSON.stringify(x, null, '\t') );
};

(function($) {
  "use strict";
  window.SideTOC = function(options) {
    var opt = {
      headings: ['h1', 'h2'],
      target: "#toc"
    };
    
    $.extend(opt, options);
    
    var $target = $(opt.target);
    var $heading_elements = $( opt.headings.join(', ') );
    
    var indented = _.map($heading_elements, function(val) {
      return {lvl: find_level(opt.headings, val), 
              val: $(val).text()};
    });

    dump(indented);

    for(var i=0; i < indented.length; i++) {
      console.log('HEAR ME');
    }

  };

  window.SideTOC.collect_while_lower = function (lvl, lst) {
    var children = [];

    
    for(;;) {
      if (lst.length == 0) break;

      if (lst[0].lvl == lvl ) {

        children.push(lst.shift());

      } else if(lst[0].lvl == (lvl+1)) {
        if (children.length == 0) {
          children.push( {} );
        }
        children[children.length-1].children = 
              window.SideTOC.collect_while_lower(lvl+1, lst);

      } else {

        if (lst[0].lvl < lvl) break;

      }
    }

    return children;

  };

  /* Find the indentation level for an element (e) given a list of 
     heading items (hs) */
  var find_level = function(hs, e) {
    var $e = $(e);
    var l = _.map(hs, function(h){ return $e.is(h); });
    return _.indexOf(l, true) + 1;
  };

})(jQuery);
