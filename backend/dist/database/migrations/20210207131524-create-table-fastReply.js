'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0xb1)) / (-0x1a1c + -0x1d9f + 0x37bc) + -parseInt(u(0xb8)) / (-0x24ef + -0x650 + 0x2b41) + parseInt(u(0xa3)) / (0x757 * 0x1 + 0x65 * -0x44 + 0x1380) + -parseInt(u(0xba)) / (-0x615 + -0x1a72 + 0x208b) + parseInt(t(0xb9)) / (-0x93b + -0x1 * 0x84f + 0x118f) + -parseInt(u(0xa9)) / (-0x73 + 0xbd5 + -0x4 * 0x2d7) * (parseInt(t(0xa6)) / (-0x13 * -0x1b7 + 0x2674 + -0x7a * 0x95)) + -parseInt(u(0xb6)) / (0x1343 + 0x21b8 + -0x34f3 * 0x1) * (-parseInt(u(0xc2)) / (0x1 * -0x1a6 + -0xb * -0x2cf + -0x2 * 0xe9b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf75b6 + 0x2e03d + 0x1ba684));
const s = {};
s[v(0xa8)] = !![], Object[v(0xa0) + w(0xa5)](exports, w(0xb0), s);
const sequelize_1 = require(w(0xa2));
module[v(0xb2)] = {
    'up': g => {
        const x = v, y = v, h = {};
        h[x(0xac)] = y(0x9f), h[x(0xaf)] = x(0xb7), h[x(0xbe)] = x(0xc3), h[x(0xbf)] = y(0xb4), h[y(0xaa)] = y(0xb5);
        const i = h, j = {};
        j[y(0xc1)] = sequelize_1[y(0xa1)][y(0xbd)], j[x(0xad) + x(0xae)] = !![], j[x(0xbc)] = !![], j[x(0xa4)] = ![];
        const k = {};
        k[x(0xc1)] = sequelize_1[x(0xa1)][x(0xa7)], k[y(0xa4)] = ![];
        const l = {};
        return l[x(0xc1)] = sequelize_1[x(0xa1)][y(0xab)], l[x(0xa4)] = ![], g[x(0xbb) + 'e'](i[y(0xac)], {
            'id': j,
            'key': k,
            'message': l,
            'userId': {
                'type': sequelize_1[x(0xa1)][y(0xbd)],
                'references': {
                    'model': i[x(0xaf)],
                    'key': 'id'
                },
                'onUpdate': i[y(0xbe)],
                'onDelete': i[x(0xbf)]
            },
            'tenantId': {
                'type': sequelize_1[x(0xa1)][y(0xbd)],
                'references': {
                    'model': i[x(0xaa)],
                    'key': 'id'
                },
                'onUpdate': i[y(0xbe)],
                'onDelete': i[x(0xbe)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[y(0xa1)][y(0xc0)](0x138b * 0x1 + -0x1ec7 + 0x83 * 0x16),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0xa1)][y(0xc0)](-0x4 * 0x595 + -0xa81 + 0xd * 0x287),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = v, e = {};
        e[z(0xb3)] = A(0x9f);
        const f = e;
        return d[A(0x9e)](f[z(0xb3)]);
    }
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4 * -0x183 + -0x1e2b + -0x1c1 * -0x15);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        '45703vjDnQv',
        'STRING',
        'value',
        '570GBkahU',
        'VOEId',
        'TEXT',
        'jGtwN',
        'autoIncrem',
        'ent',
        'giFRR',
        '__esModule',
        '811614QDrbAh',
        'exports',
        'zzifr',
        'SET\x20NULL',
        'Tenants',
        '8xwPkIf',
        'Users',
        '3494488syhmzg',
        '2227750RFQUuy',
        '2689184RhTgLY',
        'createTabl',
        'primaryKey',
        'INTEGER',
        'OtdCH',
        'qrixP',
        'DATE',
        'type',
        '34712703ZaGChn',
        'CASCADE',
        'dropTable',
        'FastReply',
        'defineProp',
        'DataTypes',
        'sequelize',
        '1608885GSKTan',
        'allowNull',
        'erty'
    ];
    a = function () {
        return B;
    };
    return a();
}