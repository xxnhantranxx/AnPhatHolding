$(document).ready(function () {
    // Xử lý search icon
    $('.link_open_search').click(function (event) {
        event.preventDefault();
        $(this).modal({
            fadeDuration: 200,
            clickClose: false,
        });
    });

    // Xử lý select language
    function formatState (state) {
        if (!state.id) {
          return state.text;
        }
        var baseUrl = "/images/flags";
        var $state = $(
          '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    function formatStateSingle (state) {
        if (!state.id) {
          return state.text;
        }
      
        var baseUrl = "/images/flags";
        var $state = $(
          '<span><img class="img-flag" /> <span></span></span>'
        );
      
        // Use .text() instead of HTML string concatenation to avoid script injection issues
        $state.find("span").text(state.text);
        $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");
      
        return $state;
    };
    $('#language').select2({
        minimumResultsForSearch: -1,
        theme: "language",
        maximumSelectionSize: 6,
        containerCssClass: ':all:',
        dropdownPosition: 'below',
        templateResult: formatState,
        templateSelection: formatStateSingle
    });
});