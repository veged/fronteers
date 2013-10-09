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
                    elem: 'sidebar',
                    content: [
                        {
                            block: 'resources',
                            content: [
                                { elem: 'title', content: 'CSS Resources' },
                                { elem: 'image', url: '/assets/images/promo.jpg' },
                                { elem: 'resource', url: '//...', content: 'New Perspectives On Coding', type: 'Book', source: 'Sm Shop' },
                                { elem: 'resource', url: '//...', content: 'Something else', type: 'Type', source: 'Source' },
                                { elem: 'resource', url: '//...', content: 'Something else', type: 'Type', source: 'Source' }
                            ]
                        }
                    ]
                },
                {
                    elem: 'main',
                    content: [
                        { elem: 'header', content: 'They say bla-bla-bla.. websites.' },
                        { elem: 'para', content: 'In this workshop...' },
                        {
                            block: 'link',
                            mods: { arrow: true },
                            url: '//...',
                            content: 'More on the workshop'
                        },
                        {
                            block: 'quote',
                            content: [
                                { elem: 'photo', url: '/assets/images/naomi.jpg' },
                                { elem: 'text', content: 'Harry\'s way...' },
                                {
                                    block: 'link',
                                    mix: { block: 'quote', elem: 'name' },
                                    url: '//...',
                                    content: 'Naomi Atkinson'
                                },
                                '&nbsp; &nbsp;',
                                { elem: 'company', content: 'Whosit &amp; Whatsit' }
                            ]
                        }
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
