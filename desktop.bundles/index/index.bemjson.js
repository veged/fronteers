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
                        { elem: 'item', url: '', content: 'The Workshop' },
                        { elem: 'item', url: '', content: '2013 Scgedule' },
                        { elem: 'item', url: '', content: 'About CSSWizardy' },
                        { elem: 'item', url: '', content: 'Contact' },
                    ]
                },
            ]
        },
        {
            block: 'tiser',
            image: '//...',
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
