'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x197)) / (0x1c3f + 0x166f * -0x1 + -0x5cf) + parseInt(p(0x198)) / (0x1a2 * -0x17 + 0x2498 + -0x2 * -0x7c) + parseInt(p(0x1a4)) / (-0x120d + -0x74a + 0x195a) + parseInt(q(0x1a1)) / (0x3 * -0x4b1 + 0x23de + -0x15c7) * (-parseInt(p(0x1b6)) / (0x6cd * -0x5 + -0x87 + 0x228d)) + -parseInt(p(0x1ab)) / (-0x1753 + 0x589 * -0x1 + 0x2 * 0xe71) * (parseInt(q(0x19f)) / (0x2 * -0x81d + 0x1 * -0x6da + 0x23 * 0xa9)) + -parseInt(q(0x1a7)) / (-0x1 * -0x101 + 0x24ee + -0x25e7) + parseInt(p(0x1b0)) / (0x2309 * 0x1 + -0xa57 + 0x6b * -0x3b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1e2a1 + -0x3f383 * 0x2 + 0x15c49b));
var __importDefault = this && this[r(0x1af) + r(0x19d)] || function (c) {
    const t = r;
    return c && c[t(0x199)] ? c : { 'default': c };
};
const k = {};
function a() {
    const w = [
        'defineProp',
        'logger',
        'pnLOz',
        'RsKEH',
        '165CupRIq',
        'env',
        '360_NOT_UP',
        'multipart/',
        'form-data',
        'headers',
        'rs/AppErro',
        'value',
        'D360-API-K',
        '1124815OgLhCP',
        '1273024CwIOIL',
        '__esModule',
        'Content-Ty',
        'axios',
        'data',
        'fault',
        'default',
        '5118071WtJGWz',
        'method',
        '142124TKViin',
        '../../util',
        'erty',
        '2882877GWsnix',
        'API_URL_36',
        'error',
        '4489464eamOSB',
        'file',
        '../../erro',
        's/logger',
        '6TOTevb',
        'url',
        '/v1/media',
        'LOAD_MEDIA',
        '__importDe',
        '24996087OmKIKM',
        'post'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[r(0x1bd)] = !![], Object[r(0x1b2) + s(0x1a3)](exports, s(0x199), k);
const axios_1 = __importDefault(require(r(0x19b))), AppError_1 = __importDefault(require(r(0x1a9) + r(0x1bc) + 'r')), logger_1 = require(s(0x1a2) + s(0x1aa)), UploadMedia = async ({
        file: f,
        apiKey: g
    }) => {
        const u = r, v = r, h = {};
        h[u(0x1b5)] = u(0x1b1), h[v(0x1b4)] = u(0x1b9) + u(0x1ba);
        const i = h, j = process[u(0x1b7)][u(0x1a5) + '0'] + u(0x1ad);
        try {
            const l = {};
            l[v(0x1a8)] = f;
            const m = {};
            m[v(0x1a0)] = i[v(0x1b5)], m[u(0x1ac)] = j, m[u(0x19c)] = l, m[u(0x1bb)] = {}, m[u(0x1bb)][v(0x196) + 'EY'] = g, m[u(0x1bb)][v(0x19a) + 'pe'] = i[u(0x1b4)];
            const n = await (0xe1f * 0x2 + 0x2 * 0x1042 + 0x457 * -0xe, axios_1[v(0x19e)])(m);
            return n[u(0x19c)];
        } catch (o) {
            logger_1[v(0x1b3)][u(0x1a6)](o);
            throw new AppError_1[(u(0x19e))](u(0x1b8) + u(0x1ae) + ':\x20' + o);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x33 * -0xb + 0x1f6f + -0x1d8 * 0xf);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[s(0x19e)] = UploadMedia;