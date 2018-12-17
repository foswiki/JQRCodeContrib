FOSWIKI_ROOT?=~/foswiki/core
TARGET=pkg.js qrcode.css
PKG_JS_SOURCE=jquery-qrcode.uncompressed.js init.uncompressed.js

-include $(FOSWIKI_ROOT)/pub/System/JQueryPlugin/Makefile.include

git:
	git clone https://github.com/lrsjng/jquery-qrcode.git git

pkg.uncompressed.js: $(PKG_JS_SOURCE)
	@echo creating pkg
	@$(CAT) $(PKG_JS_SOURCE) > $@

ifneq (,$(wildcard git))
jquery-qrcode.uncompressed.js: git/dist/jquery-qrcode.js
	cp $^ $@
endif

clean:
	rm -f $(TARGET) *.gz

