# side-toc: Client side table of content #

Origninally designed for for use in my _viewdocs_
(http://progrium.viewdocs.io/viewdocs) documentation, side-toc will dynamically
build a table of contents with anchor links for use in generated documentation
(such as this one coming from markdown)


## Quick usage ##

```javascript
SideTOC({
	headings: ['h1', 'h2'],
	target: '#toc'
});
```

## Options ##

* *headings*
  
  A list of css selectors that will be executed to select the levels of heading
  that will be included. Defaults to `['h1', 'h2']`. 

  Any css selectors will work so `['[data-heading-level=1]']` is totally fine.

* *target*
  
  DOM element to dump the table of contents into.

