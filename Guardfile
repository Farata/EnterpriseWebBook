require 'asciidoctor'
require 'erb'

guard 'shell' do
  watch(/.*\.asciidoc$/) {|m|
    Asciidoctor.render_file(m[0], 
                            :in_place => true, 
                            :safe =>10, 
                            :attributes => {
                                'source-highlighter' => 'highlightjs', 
                                'backend' => 'html5',
                                'stylesheet'=> './stylesheets/riak.css'
                                #'stylesheet'=> './stylesheets/asciidoctor.css'
                                #'stylesheet'=> './stylesheets/foundation.css'
                                })
  }
end

# uncomment this 3 lines to use LiveReload 
# Chrome extension http://goo.gl/wNPKB
guard 'livereload' do
  watch(%r{^.+\.(css|js|html)$})
end