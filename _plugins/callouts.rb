Jekyll::Hooks.register :documents, :post_convert do |doc|
  content = doc.output

  content.gsub!(/<p>\[!(\w+)\]\s*(.*?)<\/p>/i) do
    type = $1.downcase
    title = $2.strip

    %Q(
<div class="callout" data-callout="#{type}">
  <div class="callout-title"><span class="callout-title-inner">#{title}</span></div>
)
  end

  # callout 끝을 자동으로 닫기
  content.gsub!(/(<\/div>\s*)?\z/, "</div>\n</div>")

  doc.output = content
end