document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-working__item__link').forEach(function(element) {
        element.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.section-working__info').forEach(function(content) {
                content.classList.remove('section-working__info-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('section-working__info-active')
        })
    })
})
