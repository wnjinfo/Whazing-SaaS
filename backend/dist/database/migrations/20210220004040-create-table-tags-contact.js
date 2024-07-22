'use strict';
function a() {
    const z = [
        'Otnxu',
        'allowNull',
        '4488295uqoUai',
        'primaryKey',
        'DataTypes',
        'sequelize',
        'cPKaC',
        'dropTable',
        '1002042EhGHPr',
        'JpwZY',
        'RESTRICT',
        'Tags',
        '89426dkFnAJ',
        'value',
        'INTEGER',
        '441ejOBxO',
        'Tenants',
        'type',
        '2095188rPGeiM',
        'defineProp',
        'Contacts',
        '4SxxPGs',
        'erty',
        '46952CvgbQO',
        'DvlBz',
        '651535TSBqYo',
        'YkhTd',
        'duVow',
        'exports',
        'ContactTag',
        'BREMM',
        'CASCADE',
        'createTabl',
        'DATE',
        'ent',
        '191463zqGdhm',
        '__esModule',
        'autoIncrem'
    ];
    a = function () {
        return z;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x95)) / (-0x1 * -0x1338 + -0x2 * 0x5b0 + -0x7d7) + -parseInt(s(0x9e)) / (0x821 * 0x3 + 0x19ed + 0x1 * -0x324e) * (parseInt(r(0x86)) / (-0x2160 + 0x1fe5 + 0x17e)) + -parseInt(s(0x9b)) / (-0x20e * -0x2 + -0xbb * 0x11 + 0x853) + parseInt(r(0xa2)) / (-0x264 + -0x135 * -0x19 + -0x1bc4) + -parseInt(r(0x91)) / (-0x27 + 0x1b67 + -0x1b3a) + parseInt(s(0x8b)) / (0x1 * -0x185c + 0x21c1 + 0x6d * -0x16) + parseInt(s(0xa0)) / (0xdbd + -0x47f + -0x12 * 0x83) * (parseInt(r(0x98)) / (0xa19 + -0x20ca * -0x1 + -0x156d * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9145e + -0x8e417 * 0x1 + 0x1701ba));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe2a + -0x63e + -0x76b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0x96)] = !![], Object[u(0x9c) + u(0x9f)](exports, u(0x87), q);
const sequelize_1 = require(t(0x8e));
module[t(0xa5)] = {
    'up': e => {
        const v = u, w = u, f = {};
        f[v(0xa4)] = w(0xa6) + 's', f[v(0x8f)] = v(0x94), f[v(0xa1)] = w(0x82), f[v(0x89)] = v(0x93), f[v(0xa3)] = v(0x9d), f[v(0x81)] = w(0x99);
        const g = f, h = {};
        return h[v(0x9a)] = sequelize_1[w(0x8d)][v(0x97)], h[w(0x88) + v(0x85)] = !![], h[v(0x8c)] = !![], h[v(0x8a)] = ![], e[w(0x83) + 'e'](g[v(0xa4)], {
            'id': h,
            'tagId': {
                'type': sequelize_1[v(0x8d)][w(0x97)],
                'references': {
                    'model': g[v(0x8f)],
                    'key': 'id'
                },
                'onUpdate': g[w(0xa1)],
                'onDelete': g[w(0x89)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0x8d)][w(0x97)],
                'references': {
                    'model': g[v(0xa3)],
                    'key': 'id'
                },
                'onUpdate': g[w(0xa1)],
                'onDelete': g[v(0xa1)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[w(0x8d)][v(0x97)],
                'references': {
                    'model': g[v(0x81)],
                    'key': 'id'
                },
                'onUpdate': g[w(0xa1)],
                'onDelete': g[v(0xa1)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x8d)][w(0x84)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x8d)][v(0x84)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0x92)] = x(0xa6) + 's';
        const f = e;
        return d[y(0x90)](f[x(0x92)]);
    }
};