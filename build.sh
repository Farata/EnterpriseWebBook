#!/bin/sh

declare -r BASE_DIR=`dirname $0`
declare -r OUT_DIR=$BASE_DIR/out
declare -r ASSETS_DIR=images

# ================
# Helper functions
# ================

function convert()
{
    # echo -e "\t$@"

    local src_file=$@

    # asciidoctor --trace -v                     \
    asciidoctor                                  \
            -d book                              \
            -b html5                             \
            -a stylesheet=stylesheets/colony.css \
            -a linkcss!                          \
            -a icons=font                        \
            -a source-highlighter=highlightjs    \
            -a toc                               \
            -a toc2                              \
            -a toclevels=3                       \
            -a toc=right                         \
            -a idprefix!                         \
            -a idseparator=-                     \
            -a sectanchors                       \
            --compact                            \
            -D $OUT_DIR                          \
            $src_file
}

function makeDir()
{
    local target_dir=$1

    # create output dir if it doesn't exist
    if [ ! -d "$target_dir" ]; then
        mkdir -p $target_dir
    fi
}

# ===================
# Main flow execution
# ===================

# set -ex

if [ "$1" = "html" ]; then
    echo Building book...

    makeDir $OUT_DIR

    # list all asciidoc files in the DOCS_DIR
    adoc_files=(./appendix_a_advancedjs.asciidoc ./appendix_b_html.asciidoc ./appendix_c_ide.asciidoc ./ch10_responsive.asciidoc ./ch11_jquerymobile.asciidoc ./ch12_senchatouch.asciidoc ./ch13_hybrid.asciidoc ./ch1_mockup.asciidoc ./ch2_ajax_json.asciidoc ./ch3_jquery.asciidoc ./ch4_ext_js.asciidoc ./ch5_tools.asciidoc ./ch6_large_js_apps.asciidoc ./ch7_testdriven_js.asciidoc ./ch8_websockets.asciidoc ./ch9_security.asciidoc ./ch_preface.asciidoc ./Introduction.asciidoc ./ch_epilogue.asciidoc )

    convert `printf "%s " "${adoc_files[@]}" | cut -d " " -f 1-${#adoc_files[@]}`

    asciidoctor -d book -b html5 -a stylesheet=stylesheets/colony.css --out-file out/index.html site.adoc

elif [ "$1" = "clean" ]; then
    echo Cleaning files:
    rm -rv $OUT_DIR
fi

echo -e "BUILD FINISHED"

#generate book, toclivel attribute is responsible for deep of table of contents
#asciidoc -d book -b html5 -a icons -a iconsdir=images/icons -a theme=flask -a toc2 -a toclevels=3 --out-file out/index.html site.asciidoc
#asciidoctor --trace -v -d book -b html5 -a stylesheet=stylesheets/colony.css -a linkcss! -a icons=font -a source-highlighter=highlightjs -a toc -a toc2 -a toclevels=3 --out-file out/index.html site.asciidoc
# asciidoctor -b docbook -d book -a toc -a numbered -a stylesheet=stylesheets/colony.css -a toc2 -a toclevels=3 -a linkcss! book.asciidoc
#a2x -v -dbook -fchunked --no-xmllint --resource images/ --stylesheet=flask.css --icons --icons-dir=`brew --prefix asciidoc`/etc/asciidoc/images/icons --asciidoc-opts="-a theme=flask -a data-uri -a toc2 -a toclevels=3" --destination-dir=out/ site.asciidoc
#asciidoc -d book -b bootstrap-docs -a icons -a iconsdir=`brew --prefix asciidoc`/etc/asciidoc/images/icons -a data-uri -a toc2 -a toclevels=2 --out-file book.html site.asciidoc

#ubuntu version version of build command
#asciidoc -d book -b html5 -a icons -a iconsdir=/etc/asciidoc/images/icons -a theme=flask -a data-uri -a toc2 -a toclevels=3 book.asciidoc
