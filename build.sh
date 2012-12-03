#!/bin/sh

#generate book, toclivel attribute is responsible for deep of table of contents
asciidoc -d book -b html5 -a icons -a iconsdir=`brew --prefix asciidoc`/etc/asciidoc/images/icons -a theme=flask -a data-uri -a toc2 -a toclevels=3 --out-file book.html site.asciidoc

#ubuntu version version of build command
#asciidoc -d book -b html5 -a icons -a iconsdir=/etc/asciidoc/images/icons -a theme=flask -a data-uri -a toc2 -a toclevels=3 book.asciidoc