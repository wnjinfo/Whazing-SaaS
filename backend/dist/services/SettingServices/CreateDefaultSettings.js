'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * 0x54a + -0x16f * -0x11 + 0x23 * 0x13);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xd6)) / (0x929 + 0x2f * -0x4a + 0x46e) * (parseInt(l(0xc7)) / (0x7 * -0x85 + -0x7ed + 0x5c9 * 0x2)) + parseInt(m(0xa8)) / (-0x2074 + 0x230 + -0x1 * -0x1e47) + -parseInt(m(0xe7)) / (0x11 * 0x1b1 + 0x142e + -0x30eb) * (-parseInt(m(0xc1)) / (-0x78a + -0x12bf + 0x3c2 * 0x7)) + -parseInt(l(0xb8)) / (0x132b + 0x260f * -0x1 + 0x12ea) + -parseInt(l(0xe0)) / (0x1 * 0x25d1 + -0x1 * 0x97 + -0x2533) + parseInt(m(0xc9)) / (0xdb + 0xe5b + -0xf2e) + parseInt(l(0xc0)) / (-0x1 * -0x2548 + 0x21ff * -0x1 + -0x340) * (-parseInt(l(0x8c)) / (-0x49 + -0x2 * 0x10b1 + -0x1 * -0x21b5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x50995 * 0x2 + -0x405a2 + 0x160cca));
var __importDefault = this && this[n(0x8b) + o(0x92)] || function (c) {
    const p = o;
    return c && c[p(0xcf)] ? c : { 'default': c };
};
const k = {};
k[o(0xb3)] = !![], Object[o(0xbd) + n(0xb0)](exports, n(0xcf), k);
function a() {
    const u = [
        'Message',
        'tWallet',
        'create',
        '../../mode',
        'GevmT',
        'erty',
        'hmMjB',
        'TsBKL',
        'value',
        'hcTXh',
        'App,\x20favor',
        'VoyKP',
        '\x20já\x20existe',
        '2226078bigCny',
        'all',
        'gNWTL',
        'error',
        'nantId\x20',
        'defineProp',
        'have\x20',
        'JFARF',
        '34605NKlDqB',
        '181990abEcSo',
        'pMsg',
        'callReject',
        'eSignature',
        'nNtxg',
        'log',
        '497086AcsFLm',
        'ão\x20desabil',
        '3820408pPCBve',
        'disabled',
        'DYvNQ',
        '\x20vídeo\x20est',
        'ketsQueueU',
        'a\x20mensagem',
        '__esModule',
        'exauv',
        'ngAccepted',
        '\x20para\x20o\x20te',
        's\x20de\x20voz\x20e',
        'ketsChatBo',
        'ciFxg',
        '2UkMEra',
        'enabled',
        'ignoreGrou',
        'rejectCall',
        'NotViewTic',
        'sendGreeti',
        'ZEVLc',
        'VztNd',
        'eTHFj',
        'userContac',
        '72828hCGmZP',
        'nrMUG',
        'LxHMb',
        'itas\x20para\x20',
        'ão\x20com\x20a\x20c',
        'QCeVD',
        'jJUir',
        '108WnPyWh',
        'qqfRH',
        'ls/Setting',
        'NotViewAss',
        'HQGGE',
        'userCreati',
        'llmLI',
        'etsToWalle',
        '__importDe',
        '3070DkgILj',
        'default',
        'ctive',
        'iar\x20config',
        'ignedTicke',
        'DirectTick',
        'fault',
        'sendMsgTra',
        'Drwdc',
        '\x20enviar\x20um',
        'TplRR',
        'botTicketA',
        'esse\x20Whats',
        'drão:',
        'Erro\x20ao\x20cr',
        'yzOno',
        'jjLoy',
        'uração:',
        'QxUhr',
        'spyticket',
        'AgdGQ',
        'zxkfq',
        'ndefined',
        '\x20de\x20texto',
        'Configuraç',
        'userDisabl',
        'As\x20chamada',
        'urações\x20pa',
        '376989JfAMQo',
        'findOne',
        'nsfTicket'
    ];
    a = function () {
        return u;
    };
    return a();
}
const Setting_1 = __importDefault(require(n(0xae) + n(0xe9))), createSetting = async (c, d, e) => {
        const q = o, r = n, f = {
                'zxkfq': function (h, i) {
                    return h(i);
                },
                'ciFxg': function (h, i) {
                    return h(i);
                },
                'jjLoy': q(0x9a) + q(0x8f) + r(0x9d)
            }, g = await Setting_1[q(0x8d)][q(0xa9)]({
                'where': {
                    'tenantId': f[r(0xa1)](Number, c),
                    'key': d
                }
            });
        if (g)
            return console[q(0xc6)](q(0xa4) + q(0xe4) + r(0xbe) + d + (r(0xb7) + r(0xd2) + q(0xbc)) + c + '.'), g;
        try {
            const h = await Setting_1[q(0x8d)][r(0xad)]({
                'key': d,
                'value': e,
                'createdAt': new Date(),
                'updatedAt': new Date(),
                'tenantId': f[r(0xd5)](Number, c)
            });
            return h;
        } catch (i) {
            console[r(0xbb)](f[q(0x9c)], i);
            throw i;
        }
    }, CreateDefaultSettings = async c => {
        const s = n, t = n, d = {
                'VoyKP': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'TsBKL': s(0x88) + 'on',
                'AgdGQ': t(0xca),
                'exauv': s(0xda) + t(0xcd) + s(0xa2),
                'nrMUG': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'DYvNQ': t(0xda) + t(0xd4) + 't',
                'nNtxg': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'QxUhr': s(0x86) + s(0x90) + 'ts',
                'JFARF': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'GevmT': s(0x91) + s(0x8a) + 'ts',
                'eTHFj': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'hcTXh': s(0x97) + t(0x8e),
                'ZEVLc': t(0xd9) + 's',
                'LxHMb': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'HQGGE': t(0xc3) + s(0xab),
                'yzOno': t(0xa6) + t(0xd3) + s(0xcc) + s(0xc8) + s(0xe3) + s(0x98) + t(0xb5) + s(0x95) + t(0xce) + t(0xa3),
                'VztNd': s(0xa5) + t(0xc4),
                'jJUir': s(0xd7),
                'hmMjB': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'llmLI': s(0xd8) + t(0xc2),
                'QCeVD': t(0xdf) + t(0xac),
                'TplRR': t(0xdb) + s(0xd1),
                'Drwdc': s(0x9f),
                'gNWTL': s(0x93) + s(0xaa),
                'qqfRH': s(0x9a) + s(0x8f) + s(0xa7) + s(0x99)
            }, e = [
                d[s(0xb6)](createSetting, c, d[s(0xb2)], d[s(0xa0)]),
                d[t(0xb6)](createSetting, c, d[s(0xd0)], d[t(0xa0)]),
                d[t(0xe1)](createSetting, c, d[t(0xcb)], d[s(0xa0)]),
                d[t(0xc5)](createSetting, c, d[t(0x9e)], d[t(0xa0)]),
                d[s(0xbf)](createSetting, c, d[s(0xaf)], d[t(0xa0)]),
                d[t(0xde)](createSetting, c, d[t(0xb4)], ''),
                d[t(0xbf)](createSetting, c, d[t(0xdc)], d[s(0xa0)]),
                d[t(0xe2)](createSetting, c, d[t(0x87)], d[s(0x9b)]),
                d[s(0xb6)](createSetting, c, d[t(0xdd)], d[t(0xe6)]),
                d[t(0xb1)](createSetting, c, d[s(0x89)], d[s(0xa0)]),
                d[s(0xb6)](createSetting, c, d[t(0xe5)], d[t(0xa0)]),
                d[t(0xe2)](createSetting, c, d[s(0x96)], d[s(0xe6)]),
                d[s(0xe1)](createSetting, c, d[s(0x94)], d[t(0xa0)]),
                d[t(0xb1)](createSetting, c, d[t(0xba)], d[s(0xe6)])
            ];
        try {
            const f = await Promise[t(0xb9)](e);
            return f;
        } catch (g) {
            console[s(0xbb)](d[s(0xe8)], g);
            throw g;
        }
    };
exports[n(0x8d)] = CreateDefaultSettings;