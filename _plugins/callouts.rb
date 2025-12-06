require 'kramdown'

module Jekyll
  module CalloutConverter
    CALLTOUT_REGEX = /^> \[!(\w+)\]\s*(.*)$/

    def convert(content)
      lines = content.lines
      output = []
      i = 0

      while i < lines.length
        line = lines[i]

        # Callout 시작 찾기
        if m = line.match(CALLTOUT_REGEX)
          type = m[1].downcase
          title = m[2].strip

          body_lines = []
          i += 1

          # 블록이 끝날 때까지 body 수집
          while i < lines.length && lines[i].start_with?('> ')
            body_lines << lines[i].sub(/^> /, '')
            i += 1
          end

          body = body_lines.join

          html = %(
            <div class="callout" data-callout="#{type}">
              <div class="callout-title">#{title}</div>
              <div class="callout-content">
                #{Kramdown::Document.new(body).to_html}
              </div>
            </div>
          )

          output << html

        else
          output << line
          i += 1
        end
      end

      output.join
    end
  end

  Hooks.register :posts, :post_render do |post|
    next unless post.output_ext == '.html'
    converter = Object.new.extend(CalloutConverter)
    post.output = converter.convert(post.output)
  end
end