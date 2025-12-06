Jekyll::Hooks.register :documents, :post_render do |doc|
  html = doc.output
  next if html.nil?

  # > [!type] Title\nbody… 구조의 blockquote 전체 매칭
  html.gsub!(/<blockquote>\s*<p>\s*\[!(\w+)\]\s*(.*?)<\/p>(.*?)<\/blockquote>/m) do
    type  = Regexp.last_match(1).downcase
    title = Regexp.last_match(2).strip
    body  = Regexp.last_match(3).strip

    %Q(
<div class="callout" data-callout="#{type}">
  <div class="callout-title">#{title}</div>
  <div class="callout-content">
    #{body}
  </div>
</div>
)
  end

  doc.output = html
end