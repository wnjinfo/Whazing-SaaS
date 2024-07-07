'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x102b + -0x16c2 + 0x289b);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const N = [
        '198865wWWEkW',
        '__importDe',
        'cXkaK',
        'all',
        '../../mode',
        'split',
        '3574781FCuGeS',
        'message3',
        'map',
        'OLVwp',
        'ejZSO',
        'parseISO',
        'start',
        'delay',
        'date-fns',
        '1787460WhmSHp',
        '20VlTJRZ',
        'sessionId',
        'VCUnd',
        '36ZjdTdc',
        'message2',
        'name',
        'erty',
        'logger',
        's/logger',
        'getTime',
        'message1',
        'xQvOX',
        'value',
        '14515390VGVqPm',
        '123387GsKQTN',
        'fault',
        'tenantId',
        '__esModule',
        'ls/Campaig',
        'substr',
        'otNze',
        'error',
        'mimetype',
        '2JnyhjE',
        'userId',
        'VTZve',
        'default',
        'indexOf',
        '../../util',
        'create',
        'filename',
        '199710HSvtIV',
        'OzyIB',
        'doDGt',
        '551128dlkTDy',
        'defineProp'
    ];
    a = function () {
        return N;
    };
    return a();
}
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0x1bc)) / (-0x9f9 + 0xaac + 0x2 * -0x59) + -parseInt(E(0x1b4)) / (-0x1309 + 0x3a3 + 0x3da * 0x4) * (parseInt(E(0x1df)) / (0x1 * 0x24f6 + -0x6 * -0x517 + -0x437d)) + -parseInt(F(0x1d1)) / (0x1117 + 0x2209 * -0x1 + 0x10f6 * 0x1) * (-parseInt(F(0x1c1)) / (-0x1546 * -0x1 + 0x1308 + 0x1 * -0x2849)) + -parseInt(E(0x1d0)) / (0x2615 + 0x526 + -0x2b35) + -parseInt(E(0x1c7)) / (-0xd5b + 0x25b6 + -0x1854) + parseInt(F(0x1bf)) / (0x2032 + 0x18b3 + -0x38dd) * (-parseInt(F(0x1d4)) / (-0x342 + 0x14dc + -0x1191)) + parseInt(F(0x1de)) / (-0x1c4b + 0x275 * 0x1 + 0x19e0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4ba2a + 0x86819 * 0x1 + -0x82b23 * 0x1));
var __importDefault = this && this[G(0x1c2) + G(0x1e0)] || function (c) {
    const I = G;
    return c && c[I(0x1ae)] ? c : { 'default': c };
};
const D = {};
D[H(0x1dd)] = !![], Object[H(0x1c0) + G(0x1d7)](exports, H(0x1ae), D);
const date_fns_1 = require(G(0x1cf)), logger_1 = require(H(0x1b9) + G(0x1d9)), Campaign_1 = __importDefault(require(H(0x1c5) + H(0x1af) + 'n')), CreateCampaignService = async ({
        campaign: d,
        medias: e
    }) => {
        const J = G, K = H, f = {};
        f[J(0x1c3)] = function (k, l) {
            return k !== l;
        }, f[J(0x1be)] = J(0x1bd), f[J(0x1b6)] = J(0x1dc), f[J(0x1ca)] = K(0x1d3), f[K(0x1b1)] = K(0x1cb);
        const g = f;
        let h;
        e && await Promise[K(0x1c4)](e[J(0x1c9)](async k => {
            const L = K, M = K;
            if (g[L(0x1c3)](g[L(0x1be)], g[L(0x1b6)]))
                try {
                    if (!k[M(0x1bb)]) {
                        const l = k[M(0x1b3)][M(0x1c6)]('/')[0x18df + 0x6d + 0x7 * -0x39d][M(0x1c6)](';')[0x16d + -0x9f * -0x4 + -0xd * 0x4d];
                        k[L(0x1bb)] = new Date()[L(0x1da)]() + '.' + l;
                    }
                    h = k;
                } catch (m) {
                    g[L(0x1c3)](g[L(0x1ca)], g[M(0x1b1)]) ? logger_1[L(0x1d8)][L(0x1b2)](m) : e[L(0x1d8)][M(0x1b2)](f);
                }
            else {
                const p = {};
                return p[M(0x1b7)] = j, g && h[L(0x1ae)] ? i : p;
            }
        }));
        const i = {
                'name': d[J(0x1d6)],
                'start': (-0x57c + -0x1 * 0xbb6 + 0x1132, date_fns_1[J(0x1cc)])(d[J(0x1cd)]),
                'message1': d[K(0x1db)],
                'message2': d[K(0x1d5)],
                'message3': d[J(0x1c8)],
                'userId': d[K(0x1b5)],
                'delay': d[K(0x1ce)],
                'mediaUrl': h?.[J(0x1bb)],
                'mediaType': h?.[J(0x1b3)][J(0x1b0)](0x898 * -0x1 + -0x190a + 0x21a2, h[K(0x1b3)][K(0x1b8)]('/')),
                'sessionId': d[K(0x1d2)],
                'tenantId': d[K(0x1e1)]
            }, j = await Campaign_1[J(0x1b7)][J(0x1ba)](i);
        return j;
    };
exports[G(0x1b7)] = CreateCampaignService;