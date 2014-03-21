#!/bin/sh

# Helpers
function convert()
{
    # echo -e "\t$@"

    local src_file=$@

    # asciidoctor --trace -v                     \
    asciidoctor                                  \
            --trace                              \
            -d book                              \
            -b html5                             \
            -a linkcss!                          \
            -a icons=font                        \
            -a source-highlighter=coderay        \
            -a toc                               \
            -a toc2                              \
            -a toclevels=3                       \
            -a toc=right                         \
            -a idprefix!                         \
            -a idseparator=-                     \
            -a sectanchors                       \
            --compact                            \
            --out-file .preview_$src_file.html   \
            $src_file
}

# echo $PATH
# echo "Building preview for..."
convert $1
open -a "/Applications/Google Chrome.app" $3/.preview_$2.html