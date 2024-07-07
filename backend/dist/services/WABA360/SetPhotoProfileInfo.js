'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x88)) / (0xbbd * 0x3 + -0x24de + -0x8 * -0x35) + -parseInt(o(0x7a)) / (0x5 * -0x3b9 + -0x1cd4 * -0x1 + -0xa35) + -parseInt(o(0x86)) / (0x9 * 0x302 + 0x21b3 * -0x1 + 0x6a4) * (parseInt(p(0x7e)) / (0x707 + 0x25e * -0xc + 0x1565 * 0x1)) + parseInt(p(0x8d)) / (0x170a + 0x1681 + -0x2d86) + -parseInt(p(0x6c)) / (0x8f0 * 0x1 + 0xe * -0xb5 + -0x12 * -0xe) * (parseInt(p(0x6b)) / (0x9c9 * 0x3 + 0x2de + -0x2032)) + parseInt(o(0x83)) / (-0x1f4d * -0x1 + 0x1d63 + -0x3ca8) * (-parseInt(p(0x72)) / (-0x3 * -0x24d + -0x1 * -0x18a9 + -0x1f87)) + parseInt(p(0x69)) / (-0x6c * 0x2d + -0x2458 + 0x375e) * (parseInt(o(0x89)) / (0x363 * -0x2 + -0xb9c + 0x126d * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2cda4 + 0x67d5b + -0xdeb6 * -0x4));
var __importDefault = this && this[q(0x79) + q(0x8b)] || function (c) {
    const s = q;
    return c && c[s(0x80)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x740 + 0x3d * 0x68 + -0x1123);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        '4gLcutJ',
        '../../erro',
        '__esModule',
        'Content-Ty',
        'defineProp',
        '129832UnMnNd',
        'erty',
        'post',
        '543807DmooHo',
        '360_NOT_SE',
        '663414EqiIxW',
        '55yHAefR',
        'url',
        'fault',
        'form-data',
        '3901895vWKVGy',
        'axios',
        's/logger',
        'API_URL_36',
        'default',
        'gs/profile',
        'env',
        'file',
        '1058530ZsmHaL',
        'method',
        '14CacFNc',
        '791022DmEPVt',
        'T_PHOTO:\x20',
        'D360-API-K',
        'error',
        'logger',
        'headers',
        '81bgzmXl',
        'rs/AppErro',
        'multipart/',
        'PQfAy',
        'AziTo',
        '/v1/settin',
        'value',
        '__importDe',
        '1824814HUafwr',
        'data',
        '../../util',
        '/photo'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[q(0x78)] = !![], Object[q(0x82) + r(0x84)](exports, q(0x80), k);
const axios_1 = __importDefault(require(q(0x8e))), AppError_1 = __importDefault(require(q(0x7f) + r(0x73) + 'r')), logger_1 = require(r(0x7c) + q(0x8f)), SetPhotoProfileInfo = async ({
        file: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x75)] = u(0x85), h[u(0x76)] = t(0x74) + u(0x8c);
        const i = h, j = process[u(0x67)][u(0x90) + '0'] + (u(0x77) + t(0x66) + u(0x7d));
        try {
            const l = {};
            l[u(0x68)] = f;
            const m = {};
            return m[u(0x6a)] = i[u(0x75)], m[u(0x8a)] = j, m[u(0x7b)] = l, m[t(0x71)] = {}, m[t(0x71)][t(0x6e) + 'EY'] = g, m[t(0x71)][t(0x81) + 'pe'] = i[t(0x76)], await (0x21 * -0xc7 + -0x8b8 + 0x225f, axios_1[u(0x65)])(m), !![];
        } catch (n) {
            logger_1[t(0x70)][t(0x6f)](n);
            throw new AppError_1[(t(0x65))](t(0x87) + t(0x6d) + n);
        }
    };
exports[q(0x65)] = SetPhotoProfileInfo;