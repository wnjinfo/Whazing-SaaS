'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1c2)) / (-0x723 + -0xf7 * -0xd + -0x567) * (parseInt(m(0x1f8)) / (0xdea + -0x5c * 0x69 + 0x17d4)) + -parseInt(m(0x1d3)) / (-0x17 * -0x1a + 0x1604 + -0x1857) * (-parseInt(m(0x1ec)) / (0x1a9 + -0x19f8 + 0x1df * 0xd)) + parseInt(m(0x1f3)) / (-0xc * 0x9d + 0x617 + -0x37 * -0x6) + -parseInt(l(0x1a9)) / (0x426 + -0x3b0 * -0x8 + -0x21a0) * (parseInt(m(0x1f2)) / (0xc73 + 0xa7b * -0x1 + -0x1f1)) + -parseInt(m(0x1d7)) / (0x17fd + 0x1cc3 + -0x8 * 0x697) + -parseInt(l(0x1d0)) / (-0x1f16 + 0x1dfa + 0x125 * 0x1) + parseInt(l(0x1a6)) / (0x947 * -0x3 + -0xb3 * -0x13 + 0xe96);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x39cd * -0x17 + 0xc015d + -0xe * 0x6d86));
var __importDefault = this && this[n(0x1b5) + n(0x1ab)] || function (c) {
    const p = o;
    return c && c[p(0x1b1)] ? c : { 'default': c };
};
const k = {};
k[n(0x1e9)] = !![], Object[o(0x1b4) + o(0x1f4)](exports, n(0x1b1), k);
const Setting_1 = __importDefault(require(n(0x1d4) + n(0x19f))), createSetting = async (c, d, e) => {
        const q = n, r = o, f = {
                'vadRq': function (h, i) {
                    return h(i);
                },
                'kCaYG': q(0x1f7) + q(0x1ef) + r(0x1a7)
            }, g = await Setting_1[q(0x1e7)][q(0x1e8)]({
                'where': {
                    'tenantId': f[r(0x1d1)](Number, c),
                    'key': d
                }
            });
        if (g)
            return console[q(0x1dc)](q(0x1c7) + r(0x1d6) + q(0x1fe) + d + (r(0x1ca) + q(0x1f5) + q(0x1a2)) + c + '.'), g;
        try {
            const h = await Setting_1[r(0x1e7)][r(0x1bc)]({
                'key': d,
                'value': e,
                'createdAt': new Date(),
                'updatedAt': new Date(),
                'tenantId': f[r(0x1d1)](Number, c)
            });
            return h;
        } catch (i) {
            console[q(0x1f1)](f[q(0x1ff)], i);
            throw i;
        }
    }, CreateDefaultSettings = async c => {
        const s = o, t = o, d = {
                'LLDeT': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'FANYW': s(0x1af) + 'on',
                'kDNoc': t(0x1e2),
                'bWeQO': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'rZZYM': t(0x1ad) + s(0x1b0) + s(0x1f9),
                'bCMcQ': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'qlkUP': s(0x1ad) + s(0x1e6) + 't',
                'AhrfY': s(0x1d8) + t(0x19c) + 'ts',
                'PjDrT': t(0x1e1) + t(0x1ae) + 'ts',
                'lomTW': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'UVWET': t(0x1fc) + s(0x1eb),
                'DpCQZ': t(0x1a5) + 's',
                'nLSXn': s(0x1cd) + s(0x1b6),
                'kgrZU': s(0x1d5) + s(0x19e) + t(0x19d) + t(0x1db) + s(0x1bf) + t(0x1df) + t(0x1a1) + s(0x1a3) + t(0x1fa) + t(0x1cb),
                'zJpBN': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'Npidn': t(0x1ba) + t(0x1c9),
                'faYtg': s(0x1be),
                'AzCzt': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'KAhqY': t(0x1e5) + t(0x1c3),
                'noPdM': s(0x1aa) + t(0x1ea),
                'RNoYS': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'fsoXC': t(0x1f0) + s(0x1c6),
                'mNPfc': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'Ogxay': t(0x1da),
                'PfxbB': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'OviIL': t(0x1cc) + s(0x1b8),
                'PgYWv': s(0x1f7) + t(0x1ef) + t(0x1ed) + t(0x1c1)
            }, e = [
                d[t(0x1de)](createSetting, c, d[t(0x1fb)], d[s(0x1ee)]),
                d[t(0x1c4)](createSetting, c, d[t(0x1f6)], d[t(0x1ee)]),
                d[t(0x1b3)](createSetting, c, d[t(0x1e4)], d[t(0x1ee)]),
                d[s(0x1b3)](createSetting, c, d[s(0x1b2)], d[s(0x1ee)]),
                d[s(0x1b3)](createSetting, c, d[t(0x1d9)], d[s(0x1ee)]),
                d[t(0x1a8)](createSetting, c, d[t(0x1dd)], ''),
                d[s(0x1a8)](createSetting, c, d[s(0x1b9)], d[s(0x1ee)]),
                d[t(0x1a8)](createSetting, c, d[t(0x1c8)], d[s(0x1c5)]),
                d[t(0x1a4)](createSetting, c, d[s(0x1e0)], d[s(0x1c0)]),
                d[s(0x19b)](createSetting, c, d[t(0x1bd)], d[s(0x1ee)]),
                d[s(0x19b)](createSetting, c, d[t(0x1ac)], d[t(0x1ee)]),
                d[s(0x1fd)](createSetting, c, d[t(0x1ce)], d[t(0x1c0)]),
                d[s(0x1d2)](createSetting, c, d[t(0x1b7)], d[t(0x1ee)]),
                d[t(0x1bb)](createSetting, c, d[s(0x1e3)], d[s(0x1c0)])
            ];
        try {
            const f = await Promise[t(0x1a0)](e);
            return f;
        } catch (g) {
            console[t(0x1f1)](d[t(0x1cf)], g);
            throw g;
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0x471 + -0x1479 + 0x8c1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[o(0x1e7)] = CreateDefaultSettings;
function a() {
    const u = [
        'pMsg',
        'bWeQO',
        'kgrZU',
        'ngAccepted',
        'Configuraç',
        'nLSXn',
        'eSignature',
        '\x20já\x20existe',
        '\x20de\x20texto',
        'sendMsgTra',
        'callReject',
        'fsoXC',
        'PgYWv',
        '839043ZWqxJE',
        'vadRq',
        'mNPfc',
        '2618634NxtRyc',
        '../../mode',
        'As\x20chamada',
        'ão\x20com\x20a\x20c',
        '8356936aAvALz',
        'NotViewAss',
        'PjDrT',
        'spyticket',
        'ão\x20desabil',
        'log',
        'UVWET',
        'LLDeT',
        'esse\x20Whats',
        'Npidn',
        'DirectTick',
        'disabled',
        'OviIL',
        'qlkUP',
        'ignoreGrou',
        'ketsChatBo',
        'default',
        'findOne',
        'value',
        'tWallet',
        'ctive',
        '4MKZtgE',
        'urações\x20pa',
        'kDNoc',
        'iar\x20config',
        'sendGreeti',
        'error',
        '7NJPOvE',
        '6921030EfuGpA',
        'erty',
        '\x20para\x20o\x20te',
        'rZZYM',
        'Erro\x20ao\x20cr',
        '2374qmGoyh',
        'ndefined',
        'a\x20mensagem',
        'FANYW',
        'botTicketA',
        'RNoYS',
        'have\x20',
        'kCaYG',
        'AzCzt',
        'ignedTicke',
        '\x20vídeo\x20est',
        's\x20de\x20voz\x20e',
        'ls/Setting',
        'all',
        'App,\x20favor',
        'nantId\x20',
        '\x20enviar\x20um',
        'zJpBN',
        'rejectCall',
        '2029880zbSPXW',
        'uração:',
        'lomTW',
        '6182394RaMCea',
        'userContac',
        'fault',
        'noPdM',
        'NotViewTic',
        'etsToWalle',
        'userCreati',
        'ketsQueueU',
        '__esModule',
        'AhrfY',
        'bCMcQ',
        'defineProp',
        '__importDe',
        'Message',
        'Ogxay',
        'nsfTicket',
        'DpCQZ',
        'userDisabl',
        'PfxbB',
        'create',
        'KAhqY',
        'enabled',
        'itas\x20para\x20',
        'faYtg',
        'drão:',
        '373gYClFq'
    ];
    a = function () {
        return u;
    };
    return a();
}