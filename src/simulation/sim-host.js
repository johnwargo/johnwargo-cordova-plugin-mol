module.exports = {

    initialize: function() {
        // Your initialization code here.
        var molSelection = document.getElementById('mol-value-select');
        molSelection.addEventListener('change', molSelectionChange);

        function molSelectionChange() {
            console.log("mol selection change: " + this.value);
        }
    }

};