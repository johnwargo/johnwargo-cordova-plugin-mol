module.exports = function(messages) {
    return {
        mol: {
            calculateMOL: function(success) {

                success(43);
            },
            calculateMOLSync: function() {
                return 43;
            }
        }
    };
};