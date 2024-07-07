'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x18f)) / (0x1 * 0x17bf + 0x504 + -0x12 * 0x199) * (parseInt(G(0x180)) / (-0xa1 * 0x30 + -0x8f6 + 0x7 * 0x598)) + parseInt(H(0x178)) / (0x1bd4 + 0x25 * -0x26 + -0x1653) + parseInt(G(0x141)) / (0x1426 + -0x228 + -0x11fa) + parseInt(H(0x162)) / (-0x2 * 0xf09 + 0x157c + 0x89b * 0x1) * (-parseInt(G(0x16d)) / (0x944 + -0x11 * 0x14b + -0xcbd * -0x1)) + parseInt(H(0x14f)) / (-0x25d0 + -0x3d6 + -0xe3 * -0x2f) + -parseInt(G(0x152)) / (-0x343 + -0x1 * -0x2397 + 0x13e * -0x1a) * (-parseInt(G(0x16a)) / (-0x1bf1 + -0xb72 * 0x2 + 0x32de)) + -parseInt(G(0x149)) / (0x1 * 0xba7 + -0x45d + -0x740);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1c4c2 + 0xd73 * -0x9f + 0x185955));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x413 + -0x22e * -0x2 + -0xf1 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const F = {};
F[I(0x13f)] = !![], Object[J(0x181) + I(0x13c)](exports, J(0x145), F), exports[I(0x19a)] = exports[I(0x15e) + J(0x160)] = exports[I(0x175) + 'pe'] = exports[I(0x155)] = void (0x3f * 0x10 + 0x1641 + -0x1 * 0x1a31);
const date_fns_1 = require(J(0x144)), _htmlEscape = c => c[I(0x182)](/&/g, I(0x188))[I(0x182)](/"/g, J(0x159))[J(0x182)](/'/g, I(0x189))[J(0x182)](/</g, J(0x183))[J(0x182)](/>/g, J(0x142)), _htmlUnescape = c => c[I(0x182)](/&gt;/g, '>')[J(0x182)](/&lt;/g, '<')[I(0x182)](/&#0?39;/g, '\x27')[I(0x182)](/&quot;/g, '\x22')[J(0x182)](/&amp;/g, '&');
function htmlEscape(c, ...d) {
    const K = J, L = J, e = {
            'SClhd': function (g, h) {
                return g === h;
            },
            'AxqtA': K(0x165),
            'mIEqZ': function (g, h) {
                return g(h);
            },
            'MMbAb': function (g, h) {
                return g + h;
            },
            'wwWqL': function (g, h) {
                return g + h;
            },
            'DlodO': function (g, h) {
                return g(h);
            },
            'KcFLm': function (g, h) {
                return g + h;
            }
        };
    if (e[K(0x15c)](typeof c, e[L(0x154)]))
        return e[L(0x187)](_htmlEscape, c);
    let f = c[0x44 * -0x4 + 0x1262 + -0x1152];
    for (const [g, h] of d[L(0x194)]()) {
        f = e[K(0x195)](e[L(0x13e)](f, e[L(0x187)](_htmlEscape, e[K(0x177)](String, h))), c[e[K(0x163)](g, -0x6 * 0x83 + -0x1 * 0x1b07 + 0x1e1a)]);
    }
    return f;
}
exports[I(0x155)] = htmlEscape;
function htmlUnescape(c, ...d) {
    const M = J, N = I, e = {
            'jVxYH': function (g, h) {
                return g === h;
            },
            'xHRPa': M(0x165),
            'pyUOq': function (g, h) {
                return g(h);
            },
            'OySxK': function (g, h) {
                return g !== h;
            },
            'WFyKp': M(0x14b),
            'fbxhW': function (g, h) {
                return g + h;
            },
            'HtPEz': function (g, h) {
                return g(h);
            }
        };
    if (e[N(0x18a)](typeof c, e[M(0x151)]))
        return e[N(0x17b)](_htmlUnescape, c);
    let f = c[-0x531 * 0x4 + -0xb9 * -0x1f + -0x1 * 0x1a3];
    for (const [g, h] of d[N(0x194)]()) {
        if (e[N(0x174)](e[M(0x13d)], e[N(0x13d)])) {
            if (f)
                return '';
            throw new g(h);
        } else
            f = e[M(0x199)](e[M(0x199)](f, e[M(0x17c)](_htmlUnescape, e[M(0x17c)](String, h))), c[e[N(0x199)](g, 0x1 * -0x15a7 + 0x24e8 + -0x8 * 0x1e8)]);
    }
    return f;
}
exports[I(0x175) + 'pe'] = htmlUnescape;
class MissingValueError extends Error {
    constructor(d) {
        const O = J, P = J, e = {};
        e[O(0x186)] = P(0x15f) + P(0x18d), e[P(0x191)] = O(0x15e) + O(0x160);
        const f = e;
        super(P(0x18b) + P(0x143) + (d ? P(0x15d) + O(0x185) + d : f[O(0x186)])), this[P(0x147)] = f[P(0x191)], this[P(0x16e)] = d;
    }
}
exports[J(0x15e) + J(0x160)] = MissingValueError;
const pupa = function pupa(c, d, {
    ignoreMissing: ignoreMissing = !![],
    transform: transform = ({value: l}) => l
} = {}) {
    const Q = J, R = I, e = {
            'mVegy': Q(0x198),
            'bPsqH': function (l, m) {
                return l(m);
            },
            'Bovhq': function (l, m) {
                return l >= m;
            },
            'JfoPS': function (l, m) {
                return l <= m;
            },
            'TqGAH': function (l, m) {
                return l !== m;
            },
            'cRAHK': Q(0x148),
            'irLgU': R(0x146),
            'ZrpyG': function (l, m) {
                return l > m;
            },
            'xCaWm': function (l, m) {
                return l <= m;
            },
            'pIbnm': Q(0x14a),
            'xCfBz': function (l, m) {
                return l > m;
            },
            'TJcJn': function (l, m) {
                return l <= m;
            },
            'eJoul': R(0x196),
            'KpbVA': R(0x17e),
            'IGWIF': function (l, m) {
                return l(m);
            },
            'ytFYO': function (l, m) {
                return l === m;
            },
            'QsFIa': R(0x165),
            'dSVom': Q(0x170),
            'YaZws': function (l, m) {
                return l !== m;
            },
            'YsAtB': Q(0x140),
            'frHBx': Q(0x166),
            'MhXAD': function (l) {
                return l();
            }
        };
    if (e[Q(0x171)](typeof c, e[R(0x190)]))
        throw new TypeError(R(0x17a) + Q(0x17d) + Q(0x16b) + Q(0x192) + R(0x13a) + typeof c + '`');
    if (e[R(0x171)](typeof d, e[Q(0x176)])) {
        if (e[R(0x157)](e[R(0x168)], e[R(0x156)]))
            throw new TypeError(Q(0x17a) + R(0x197) + R(0x16f) + R(0x15a) + Q(0x161) + Q(0x193) + '`' + typeof d + '`');
        else
            return e[Q(0x16c)];
    }
    const f = (-0xd * -0x1 + -0x20 * -0x39 + -0x72d, date_fns_1[Q(0x164)])(new Date()), g = () => {
            const S = R, T = Q;
            if (e[S(0x18c)](f, -0xf62 + 0x193d + -0x9d5) && e[T(0x184)](f, -0x65 * -0x2b + 0x1163 * 0x2 + 0x1fd * -0x1a))
                return e[T(0x171)](e[S(0x179)], e[T(0x14c)]) ? e[T(0x16c)] : e[S(0x150)](e, f);
            if (e[S(0x173)](f, -0x1e13 * -0x1 + 0x37 * 0x92 + 0x3d66 * -0x1) && e[S(0x172)](f, -0x1 * -0xc88 + 0x159 + -0xdd0))
                return e[T(0x14e)];
            if (e[S(0x153)](f, -0x90f + -0x1597 + 0x1eb7 * 0x1) && e[T(0x169)](f, -0x1 * 0x709 + 0x1b5 + 0x56b * 0x1))
                return e[T(0x15b)];
            return e[S(0x167)];
        };
    d = {
        ...d,
        'greeting': e[Q(0x18e)](g)
    };
    const h = (m, n) => {
            const U = Q, V = R;
            let o = d;
            for (const r of n[U(0x17f)]('.')) {
                o = o ? o[r] : undefined;
            }
            const p = {};
            p[V(0x13f)] = o, p[V(0x16e)] = n;
            const q = e[U(0x13b)](transform, p);
            if (e[V(0x14d)](q, undefined)) {
                if (ignoreMissing)
                    return '';
                throw new MissingValueError(n);
            }
            return e[V(0x13b)](String, q);
        }, i = m => (...n) => htmlEscape(m(...n)), j = /{{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}}/gi;
    j[Q(0x158)](c) && (c = c[Q(0x182)](j, e[R(0x13b)](i, h)));
    const k = /{(\d+|[a-z$_][\w\-$]*?(?:\.[\w\-$]*?)*?)}/gi;
    return c[R(0x182)](k, h);
};
function a() {
    const W = [
        'xCfBz',
        'AxqtA',
        'htmlEscape',
        'frHBx',
        'YaZws',
        'test',
        '&quot;',
        '`\x20in\x20the\x20s',
        'eJoul',
        'SClhd',
        'the\x20placeh',
        'MissingVal',
        'a\x20placehol',
        'ueError',
        'econd\x20argu',
        '5nofyAJ',
        'KcFLm',
        'getHours',
        'string',
        'nBWhp',
        'KpbVA',
        'YsAtB',
        'TJcJn',
        '72ydsQDV',
        'in\x20the\x20fir',
        'mVegy',
        '2703258nkzLIp',
        'key',
        '\x20or\x20`Array',
        'object',
        'TqGAH',
        'xCaWm',
        'ZrpyG',
        'OySxK',
        'htmlUnesca',
        'dSVom',
        'DlodO',
        '2551953FVKkCH',
        'cRAHK',
        'Expected\x20a',
        'pyUOq',
        'HtPEz',
        '\x20`string`\x20',
        'Olá!',
        'split',
        '2CGuzTL',
        'defineProp',
        'replace',
        '&lt;',
        'JfoPS',
        'older:\x20',
        'YOohs',
        'mIEqZ',
        '&amp;',
        '&#39;',
        'jVxYH',
        'Missing\x20a\x20',
        'Bovhq',
        'der',
        'MhXAD',
        '54406mVYDWU',
        'QsFIa',
        'yQAbm',
        'st\x20argumen',
        'ment,\x20got\x20',
        'entries',
        'MMbAb',
        'Boa\x20Noite!',
        'n\x20`object`',
        'Bom\x20dia!',
        'fbxhW',
        'pupa',
        't,\x20got\x20`',
        'IGWIF',
        'erty',
        'WFyKp',
        'wwWqL',
        'value',
        'SAYiH',
        '1491028qoDDTm',
        '&gt;',
        'value\x20for\x20',
        'date-fns',
        '__esModule',
        'fOjhR',
        'name',
        'SNBJJ',
        '4652790ltBCDs',
        'Boa\x20Tarde!',
        'TYynl',
        'irLgU',
        'ytFYO',
        'pIbnm',
        '41342NmtOyR',
        'bPsqH',
        'xHRPa',
        '673304dXCXyk'
    ];
    a = function () {
        return W;
    };
    return a();
}
exports[J(0x19a)] = pupa;