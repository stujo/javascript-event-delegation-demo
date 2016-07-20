$(document).ready(function() {

    function clickHandler(event) {
        var $target = $(event.target);
        $target.toggleClass('active');
    }

    $('#clickable-container').on('click', '.clickable', clickHandler);

    function addWidget() {
        var $container = $('#clickable-container');

        var template = $('#item-template').html();

        var $newElement = $(template);

        $container.append($newElement)
    }

    $('#adder').click(addWidget);
});

