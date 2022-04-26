// define a mixin object
var myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        },
        goodbye() {
            console.log('good-bye')
        }
    }
}

export default myMixin