'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x8a)) / (-0x24b5 + 0x581 + 0x1f35 * 0x1) + parseInt(v(0xa9)) / (-0x1c1 * 0xc + -0x1 * -0x1d8c + -0x87e) + -parseInt(v(0xb3)) / (0x23a9 + 0x3 * -0xa2b + -0x525) + parseInt(w(0x8e)) / (0x2 * 0x106d + -0x10f * -0x5 + 0xe3 * -0x2b) + -parseInt(v(0x9d)) / (0xf75 * -0x1 + -0x203 * 0x7 + 0x1d8f) + parseInt(v(0xb2)) / (-0x2152 + 0x150d + 0xc4b) * (parseInt(w(0xb0)) / (-0x138d + 0x1f9f + -0x1 * 0xc0b)) + parseInt(v(0x93)) / (0x496 * -0x1 + 0xce9 + 0x84b * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1cb * -0xe73 + -0x336df * -0x5 + 0x23b8c * -0xd));
const u = {};
function a() {
    const D = [
        'celular',
        'glPsm',
        'Trjzc',
        'DATE',
        'iJVmT',
        'received',
        'qbQpq',
        'sendType',
        'cEHFB',
        '278807FPAfhb',
        'EQAwt',
        'type',
        'pending',
        '403316DJjuwy',
        'mGflU',
        'sync',
        'external',
        'EwgYN',
        '6138696pmcrWT',
        'bot',
        'campaign',
        'veAeZ',
        'LhYSU',
        'LUdMS',
        'Messages',
        'sequelize',
        'erty',
        'scheduleDa',
        '40835TQlrzu',
        'all',
        'value',
        'DrxsG',
        'messageId',
        'status',
        'DteCe',
        '__esModule',
        'vIHck',
        'DataTypes',
        'exports',
        'chat',
        '1656232TDdGou',
        'STRING',
        'oxlcN',
        'addColumn',
        'removeColu',
        'defineProp',
        'web',
        '98aZcFQn',
        'BluaM',
        '239388ADZPdI',
        '5029458SecBju',
        'McYpo',
        'dgUgh',
        'sended',
        'pwHJG',
        'HQufw',
        'defaultVal',
        'schedule',
        'oyExd'
    ];
    a = function () {
        return D;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x83 * 0x31 + 0xb03 * 0x1 + -0x86 * 0x44);
        let h = e[f];
        return h;
    }, b(c, d);
}
u[x(0x9f)] = !![], Object[y(0xae) + x(0x9b)](exports, y(0xa4), u);
const sequelize_1 = require(x(0x9a));
module[x(0xa7)] = {
    'up': e => {
        const z = x, A = y, f = {};
        f[z(0x98)] = A(0x99), f[A(0xb8)] = A(0x9c) + 'te', f[A(0xab)] = A(0x88), f[z(0xa3)] = A(0x95), f[z(0x82)] = z(0xa8), f[A(0x89)] = A(0x91), f[z(0x96)] = z(0x7f), f[z(0x80)] = z(0xaf), f[z(0x8f)] = A(0x81), f[A(0x85)] = z(0x94), f[A(0xb7)] = A(0x90), f[A(0x97)] = z(0xa1), f[A(0x92)] = z(0xa2), f[A(0xb1)] = A(0x8d), f[A(0xa0)] = A(0xb6), f[A(0x87)] = A(0x86);
        const g = f, h = {};
        return h[z(0x8c)] = sequelize_1[A(0xa6)][z(0x84)], h[z(0x7e) + 'ue'] = null, Promise[A(0x9e)]([
            e[A(0xac)](g[z(0x98)], g[z(0xb8)], h),
            e[z(0xac)](g[z(0x98)], g[z(0xab)], {
                'type': sequelize_1[z(0xa6)][A(0xaa)],
                'defaultValue': null,
                'values': [
                    g[A(0xa3)],
                    g[z(0x82)],
                    g[A(0x89)],
                    g[z(0x96)],
                    g[A(0x80)],
                    g[A(0x8f)],
                    g[z(0x85)],
                    g[z(0xb7)]
                ]
            }),
            e[z(0xac)](g[A(0x98)], g[z(0x97)], {
                'type': sequelize_1[z(0xa6)][z(0xaa)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            e[z(0xac)](g[z(0x98)], g[A(0x92)], {
                'type': sequelize_1[z(0xa6)][z(0xaa)],
                'allowNull': !![],
                'defaultValue': null,
                'values': [
                    g[z(0xb1)],
                    g[z(0xa0)],
                    g[A(0x87)]
                ]
            })
        ]);
    },
    'down': d => {
        const B = x, C = y, e = {};
        e[B(0xb5)] = B(0x99), e[B(0xa5)] = C(0x9c) + 'te', e[C(0x83)] = C(0x88), e[B(0x8b)] = C(0xa1), e[C(0xb4)] = B(0xa2);
        const f = e;
        return Promise[B(0x9e)]([
            d[C(0xad) + 'mn'](f[B(0xb5)], f[C(0xa5)]),
            d[C(0xad) + 'mn'](f[B(0xb5)], f[B(0x83)]),
            d[B(0xad) + 'mn'](f[B(0xb5)], f[C(0x8b)]),
            d[C(0xad) + 'mn'](f[C(0xb5)], f[B(0xb4)])
        ]);
    }
};