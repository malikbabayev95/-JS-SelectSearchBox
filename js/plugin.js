$(function ($) {
    $.fn.searchDrop = function () {
        var AllList = []
        var self = this
        let div = $("<div></div>")
        div.addClass("wrapDiv")
        for (var searchItem of arguments) {
            AllList.push(searchItem)
            div.html(div.html() + "<p>" + searchItem + "</p>")
        }
        let wrapDiv = $("<div></div>")
        wrapDiv.addClass("bottomWrap")
        this.wrap(wrapDiv)
        this.after(div)
        let marginLeft = this.css("marginLeft")
        let marginTop = this.css("marginTop")
        marginLeft = ParsePx(marginLeft)
        marginTop = ParsePx(marginTop)
        div.css({
            'left': marginLeft + "px",
            'top': marginTop + this.outerHeight() + "px"
        })
        this.on("focus", function () {
            div.fadeIn()
        })
        this.on("keyup", function () {
            var letter = $(this).val()
            // filterList(letter, AllList)
            var newList = filterList(letter, AllList)
            $(".wrapDiv").empty()
            for (var searchItem of newList) {
                div.html(div.html() + "<p>" + searchItem + "</p>")
            }
            $(".wrapDiv p").on("click", function () {
                var val = $(this).text()
                console.log(val)
                div.fadeOut()
            })
        })
        $(".wrapDiv p").on("click", function () {
            var val = $(this).text()
            console.log(val)
            div.fadeOut()
        })
    }
}(jQuery))
function ParsePx(mesafe) {
    return Number(mesafe.slice(0, mesafe.length - 2))
}
function filterList(letter, list) {
    var newList = []
    for (var myList of list) {
        if (myList.toUpperCase().startsWith(letter.toUpperCase())) {
            newList.push(myList)
        }
    }
    return newList;
}