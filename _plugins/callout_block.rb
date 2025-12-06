# _plugins/callout_block.rb
module Jekyll
  class CalloutBlock < Liquid::Block
    SYNTAX = /\[!(ex|def|prop)\](.*)/i

    def initialize(tag_name, markup, tokens)
      super
      if markup =~ SYNTAX
        @type = $1.downcase
        @title = $2.strip.empty? ? nil : $2.strip
      else
        raise SyntaxError.new("Callout syntax error. Use [!ex|!def|!prop] Title")
      end
    end

    def render(context)
      raw_content = super.strip

      # Markdown 변환
      require 'kramdown'
      content_html = Kramdown::Document.new(raw_content).to_html

      title_html = @title ? "<div class=\"title\">#{@title}</div>" : ""

      <<~HTML
      <div class="callout #{@type}">
        #{title_html}
        <div class="callout-content">
          #{content_html}
        </div>
      </div>
      HTML
    end
  end
end

Liquid::Template.register_tag('callout', Jekyll::CalloutBlock)