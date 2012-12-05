#!/bin/sh

# prerequisite: brew install fop
# TODO: images doesn't embed
a2x -fpdf -dbook --fop --icons --icons-dir=iconsdir=`brew --prefix asciidoc`/etc/asciidoc/images/icons oreilly.asciidoc