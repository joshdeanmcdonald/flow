/* @flow */

var export_ = Object.assign({}, {
    foo: function(param) { return param; }
});

var decl_export_: { foo: any; bar: any } = Object.assign({}, export_);

module.exports = export_;
