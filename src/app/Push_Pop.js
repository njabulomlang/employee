var Push_Pop = (function () {

    function Push_Pop() { }

    Push_Pop.prototype.Push = function () {

        var fstarry = [

            'C',

            'Sharp',

            'Corner'

        ];

        var elemnt = prompt("Enter a string for push in array");

        fstarry.push(elemnt);

        var span = document.createElement("span");

        span.innerText = "Push Method \n After insert enter value, Array is -> " + fstarry + "\n";

        document.body.appendChild(span);

    };

    Push_Pop.prototype.Pop = function () {

        var arrayName = [

            'C',

            'Sharp',

            'Corner',

            'VB',

            'Net',

            'Heaven'

        ];

        var index = arrayName.pop().toString();

        var span = document.createElement("span");

        span.style.color = "#7a1111";

        span.innerText = "Pop Method \n pop value from Array -> " + index;

        document.body.appendChild(span);

    };

    return Push_Pop;

})();

window.onload = function () {

    var obj = new Push_Pop();

    obj.Push();

    obj.Pop();

};

//@ sourceMappingURL=Push_Pop.js.map

 