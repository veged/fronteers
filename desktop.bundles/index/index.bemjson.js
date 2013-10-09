({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'head',
            content: [
                { block: 'logo' },
                {
                    block: 'menu',
                    content: [
                        { elem: 'item', url: '/workshop', content: 'The Workshop' },
                        { elem: 'item', url: '/schedule', content: '2013 Schedule' },
                        { elem: 'item', url: '/about', content: 'About CSSWizardy' },
                        { elem: 'item', url: '/contact', content: 'Contact' },
                    ]
                },
            ]
        },
        {
            block: 'tiser',
            // different from logo-block, cause you can provide images from special storage, not from your filesystem
            image: '/assets/images/masthead.jpg',
            content: 'Amsterdam 9th Oct'
        },
        {
            block: 'content',
            content: [
                {
                    elem: 'left',
                    content: [
                    ]
                },
                {
                    elem: 'right',
                    content: [
                    ]
                }
            ]
        },
        {
            block: 'foot',
            content: [
                {
                    block: 'promo',
                    content: [
                        { elem: 'logo' },
                        { elem: 'title', content: 'We\'re proud to be sponsored by intuit.css' },
                        { elem: 'text', content: 'Intuit.css is a powerful, scalable, Sass-based, BEM, OOCSS, framework.' }
                    ]
                },
                {
                    block: 'copyright',
                    content: [
                        { elem: 'left', content: '&copy; CSSWizardy' },
                        {
                            elem: 'right', content: [
                                'Build with', { tag: 'a', attrs: { href: '...' } }, ' and so on...'
                            ]
                        }
                    ]
                }
            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
