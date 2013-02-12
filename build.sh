#!/bin/sh

#generate book, toclivel attribute is responsible for deep of table of contents
asciidoc -d book -b html5 -a icons -a iconsdir=images/icons -a theme=flask -a toc2 -a toclevels=3 --out-file out/index.html site.asciidoc
#a2x -v -dbook -fchunked --no-xmllint --resource images/ --stylesheet=flask.css --icons --icons-dir=`brew --prefix asciidoc`/etc/asciidoc/images/icons --asciidoc-opts="-a theme=flask -a data-uri -a toc2 -a toclevels=3" --destination-dir=out/ site.asciidoc
#asciidoc -d book -b bootstrap-docs -a icons -a iconsdir=`brew --prefix asciidoc`/etc/asciidoc/images/icons -a data-uri -a toc2 -a toclevels=2 --out-file book.html site.asciidoc

#ubuntu version version of build command
#asciidoc -d book -b html5 -a icons -a iconsdir=/etc/asciidoc/images/icons -a theme=flask -a data-uri -a toc2 -a toclevels=3 book.asciidoc
