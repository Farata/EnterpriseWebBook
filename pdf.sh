#!/bin/sh

# prerequisite: brew install fop
a2x -fpdf -dbook --fop --icons --icons-dir=iconsdir=`brew --prefix asciidoc`/etc/asciidoc/images/icons book.asciidoc