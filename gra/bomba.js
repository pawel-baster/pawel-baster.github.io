/**
 * based on https://www.elated.com/drag-and-drop-with-jquery-your-essential-guide/
 */

var missingLetters = 0;
var cards = [];
var animatedElems = [];

const words = Object.keys(animalImages).sort((item1, item2) => item1.length - item2.length + 3*Math.random());

function nextWord() {
    const word = words[wordCounter++];
    showWord(word, animalImages[word]);
}

function showWord(word, image) {
    $('<div></div>').attr("id", "bomb-cursor").appendTo("#content");

    // a hack because I don't know how to make it draggable again in a different way
    $('#image').remove();
    $('<div></div>').attr("id", "image").css("background-image", "url("+ image + ")").appendTo("#imageSlot");

    // Hide the success message
    $('#successMessage').hide();
    $('#successMessage').css( {
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    } );

    // Reset the game
    missingLetters = word.length + 1; // +1 for the image
    $('#cardPile').html( '' );
    $('#cardSlots').html( '' ).width(word.length*112);

    word = Math.random() > 0.5 ? word.toUpperCase() : word.toLowerCase();
    for ( var i = 0; i < word.length; i++ ) {
        let letter = word[i];
        const letterContainer = $('<div></div>').addClass('slot').data( 'letter', letter ).appendTo( '#cardSlots' ).droppable( {
            accept: '.card',
            hoverClass: 'hovered',
            drop: handleCardDrop
        } );

        const card = $('<div>' + letter + '</div>').addClass('card').data( 'letter', letter ).attr( 'id', 'card'+ (i+1) ).appendTo(letterContainer).draggable( {
            stack: '#cardPile div',
            cursor: 'move',
            revert: true
        } );
        cards.push(card);
    }

    $('#imageSlot').droppable( {
        accept: '#image',
        hoverClass: 'hovered',
        drop: handleCardDrop,
        disabled: false,
    } ).data("letter", "image");

    $('#image').draggable( {
        stack: '#cardPile div',
        cursor: 'move',
        revert: true
    } ).data("letter", "image");

    var cursorOffset = {
        left : 100, top: 100
    }

    $('html').on("mousemove", function (e) {
        $('#bomb-cursor').offset({
            left: (e.pageX - cursorOffset.left),
            top: (e.pageY - cursorOffset.top)
        })

    });

    $('html').on('mousedown', function(e) {
        $('html').off('mousedown');
        $('html').off('mousemove');

        $('#bomb-cursor').css('background-image', 'url("assets/explosion.gif")')
        $('#bomb-cursor').css('background-size', '100%')
        setTimeout(function() {
            $('#bomb-cursor').remove();
        }, 500);
        animatedElems = cards.concat([$('#image')]);
        for (const elem of animatedElems) {
            const cardX = elem.offset().left;
            const cardY = elem.offset().top;
            const bombX = e.clientX;
            const bombY = e.clientY;
            const lengthX = cardX - bombX;
            const lengthY = cardY - bombY;
            const vlength = Math.sqrt(lengthX*lengthX + lengthY*lengthY);
            const movement = [lengthX/vlength, lengthY/vlength];
            elem.data('dirX', lengthX/vlength+Math.random()*0.1);
            elem.data('dirY', lengthX/vlength+Math.random()*0.1)
            elem.data('speed', 50 + Math.random()*50);
            const deg = (Math.random() > 0.5 ? 1 : -1) * 360 * 1+ Math.floor(Math.random()*3);
            elem.css('-webkit-transform', 'rotate(' + deg + 'deg');
            elem.css('-webkit-transition', '-webkit-transform 3s');
        }
        var animation = setInterval(function() {
            let maxSpeed = 0;
            const maxY = $(window).height();
            const maxX = $(window).width();
            for (const elem of animatedElems) {
                const speed = elem.data('speed');
                if (speed < 1) {
                    continue;
                }
                const dirX = elem.data('dirX');
                const dirY = elem.data('dirY');
                const moveX = (dirX + Math.random() - 0.5) * speed;
                const moveY = (dirY + Math.random() - 0.5) * speed;
                let newX = elem.offset().left + moveX;
                let newY = elem.offset().top + moveY
                const elemWidth = elem.width();
                const elemHeight = elem.height();

                // check collisions with borders:
                if (newX <= 0 || newX + elemWidth >= maxX) {
                    elem.data('dirX', -dirX);
                    newX = elem.offset().left;
                }
                if (newY <= 0 || newY + elemHeight >= maxY) {
                    elem.data('dirY', -dirY);
                    newY = elem.offset().top;
                }
                console.log(elem.offset().left + " -> " + newX);
                console.log(elem.offset().top + " -> " + newY);
                elem.offset({left: newX, top: newY});
                const newSpeed = speed * 0.99;
                elem.data('speed', newSpeed);
                if (newSpeed < 1) {
                    elem.css('-webkit-transform', '');
                    elem.css('-webkit-transition', '');
                }
                maxSpeed = Math.max(maxSpeed, speed);
            }
            if (maxSpeed < 1) {
                clearInterval(animation);
                console.log("stopping animation");
            }
        }, 10);
    });
}

function handleCardDrop( event, ui ) {
    ui.draggable.data('speed', 0);
    var slotLetter = $(this).data( 'letter' );
    var cardLetter = ui.draggable.data( 'letter' );

    // If the card was dropped to the correct slot,
    // change the card colour, position it directly
    // on top of the slot, and prevent it being dragged
    // again

    if ( slotLetter == cardLetter ) {
        ui.draggable.addClass( 'correct' );
        ui.draggable.draggable( 'disable' );
        $(this).droppable( 'disable' );
        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
        ui.draggable.draggable( 'option', 'revert', false );
        missingLetters--;
    }

    // If all the cards have been placed correctly then display a message
    // and reset the cards for another go
    console.log(missingLetters);
    if ( missingLetters == 0 ) {
        $('#successMessage').show();
        const width = 480;
        const height = 100;
        $('#successMessage').animate( {
            left: ($(window).width() - width)/2,
            top: ($(window).height() - height)/2,
            width: width,
            height: height,
            opacity: 1
        } );
    }

}

