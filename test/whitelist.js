'use strict';

var should = require('should');
var whitelist = require('../');

describe('whitelist(object, keys)', function () {

    var obj = {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin'
    };

    it('should only return whitelisted properties', function () {
        var expected = {
            name: 'John Doe',
            email: 'john@example.com'
        };
        whitelist(obj, ['name', 'email']).should.eql(expected);
    });

});