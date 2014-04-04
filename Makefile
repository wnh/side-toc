
JSLINT=node_modules/.bin/jslint

test: 
	$(JSLINT) src/side-toc.js

.PHONY: test
