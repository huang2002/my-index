import { LINKS } from './links.js';

const { createElement: h } = X;

/**
 * @typedef LinkRecord
 * @property {string} name
 * @property {string} href
 */

/**
 * @type {LinkRecord[]}
 */
const links = LINKS
    .sort((a, b) => (
        a[0].toLowerCase() > b[0].toLowerCase() ? 1 : -1
    ))
    .map(record => ({
        name: record[0],
        href: record[1],
    }));

document.body.appendChild(
    h('div', {
        id: 'app',
        style: {
            position: 'fixed',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
        },
    },
        h('h1', {
            id: 'title',
            style: {
                margin: '3em 0 .5em',
                fontSize: '2em',
                textAlign: 'center',
            },
        },
            D.Highlight({
                style: {
                    fontWeight: 'bold',
                },
            },
                'My Index Page'
            ),
        ),
        h('ul', {
            id: 'links',
            style: {
                display: 'flex',
                width: '100%',
                maxWidth: '750px',
                margin: '0 auto',
                justifyContent: 'center',
                flexFlow: 'wrap',
            },
        },
            links.map((linkRecord) => (
                h('li', {
                    class: D.BUTTON_CLASS,
                    style: {
                        flex: '0 0',
                        margin: '.6em .8em',
                        padding: '0',
                    },
                },
                    h('a', {
                        style: {
                            display: 'inline-block',
                            width: '100%',
                            height: '100%',
                            padding: '.5em 1.5em',
                            fontSize: '1.2em',
                        },
                        href: linkRecord.href,
                    },
                        linkRecord.name,
                    ),
                )
            )),
        ),
    )
);
