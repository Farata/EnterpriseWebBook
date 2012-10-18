#!/bin/sh

#generate book
asciidoc -b html5 -a icons -a iconsdir=`brew --prefix asciidoc`/etc/asciidoc/images/icons -a theme=flask -a data-uri -a toc2 book.asciidoc