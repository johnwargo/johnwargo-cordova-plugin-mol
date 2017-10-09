module.exports = function(messages) {
    return {
        mol: {
            calculateMOL: function(success) {
                console.log("Executing calculateMOL");
                var molSelection = document.getElementById('mol-value-select');
                console.dir(molSelection);
                success(molSelection.options[molSelection.selectedIndex].value);
            },
            calculateMOLSync: function() {
                console.log("Executing calculateMOLSync");
                var molSelection = document.getElementById('mol-value-select');
                console.dir(molSelection);
                return molSelection.options[molSelection.selectedIndex].value;
            }
        }
    };
};