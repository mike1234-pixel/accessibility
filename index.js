function decamelize(str, separator){
	separator = typeof separator === 'undefined' ? ' ' : separator;

	return str
        .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
        .toLowerCase();
}

const markdownElements = $('.markdown')

markdownElements.each(function() {
    $(this).html(marked.parse($(this).html()))
})

$accordionBtn = $('.accordion-button')

$accordionBtn.on('click', function() {
    let ariaExpanded = $(this).attr('aria-expanded')
    ariaExpanded === 'false' ? $(this).attr('aria-expanded', 'true'): $(this).attr('aria-expanded', 'false')
    $(this).next().slideToggle()

    let sectionName = $(this).attr('aria-controls');
    let figcaption = $(this).next().children('p:first-child').text();

    $('aside').find('img').attr('src', './assets/' + sectionName + '.jpeg').attr('alt', decamelize(sectionName))
    $('aside').find('figcaption').text(figcaption)
})
