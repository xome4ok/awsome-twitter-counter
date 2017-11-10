var radialCounter = document.getElementsByClassName('RadialCounter js-radial-counter');
var countdownCounter = document.getElementsByClassName('js-countdown-counter tweet-counter CountdownCounter');
var inputBox = document.getElementById('tweet-box-home-timeline');

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function(mutation) {
        var countdownCounter = document.getElementsByClassName('js-countdown-counter tweet-counter CountdownCounter')[0];
        var tweetLength = mutation.target.innerText.length - 1;
        var maxLength = 280;
        countdownCounter.innerHTML = maxLength - tweetLength;
    });
});

var config = {attributes: true, characterData: true };
observer.observe(inputBox, config);

