console.log("started") 
setTimeout(function() {
    console.log("started")
    var url = window.location.toString();
    console.log(url.split("/"))
    
    switch (url.split("/")[2]) {
        case "www.instagram.com":
            insta();
            break;
        case "twitter.com":
            twitter();
            break;
        case "www.youtube.com":
            utube();
            break;
    }

    function insta() {
        var comments = document.getElementsByClassName(
            "_aacl _aaco _aacu _aacx _aad7 _aade"
        );
        console.log(comments)
        var newcomments = []
        for (var i = 1; i < comments.length; i++) {
                newcomments.push(comments[i]);
        }
        newcomments.forEach(i => {
                chrome.runtime.sendMessage({ data: i.innerHTML }, (response) => {
                    if (response == "") {
                        i.parentNode.parentNode.parentNode.parentNode.remove();
                    }
                });
        });
    }
    
    function utube() {
        let comments = document.getElementById("contents").getElementsByTagName("ytd-comment-thread-renderer");
        for (let i = 0; i < comments.length; i++) {
            console.log(comments[i].querySelector("#content-text").innerHTML);
            console.log("aksdjhfasdf");
            if (comments[i].className != "style-scope ytd-item-section-renderer") {
                continue;
            }
            chrome.runtime.sendMessage({data: comments[i].querySelector("#content-text").innerHTML}, (response) => {
                if (response == "") {
                    comments[i].style.display = "none";
                }
            });
        }
    }

    function twitter() {
        var comment = document.querySelector('[aria-label="Timeline: Conversation"]');
        var comments = [];
        for (var i = 2; i < comment.children[0].children.length; i++) {
            comments.push(comment.children[0].children[i]);
        }
        console.log(comments);
        var newcomments = [];
        comments.forEach(a =>{
            try {
                a = a.children[0];
                a = a.children[0];
                a = a.children[0];
                a = a.children[0];
                a = a.children[0];
                a = a.children[0];
                a = a.children[0];
                a = a.children[1];
                a = a.children[1];
                a = a.children[1];
                a = a.children[1];
                a = a.children[0];
                a = a.children[0];
                newcomments.push(a);
                console.log(a);
            } catch {
                console.log("a");
            }
        });
        console.log(newcomments);
        newcomments.forEach(i => {
            console.log("asdf")
            chrome.runtime.sendMessage({ data: i.innerHTML }, (response) => {
                console.log(response)
                if (response == "") {
                    console.log(i.innerHTML);
                    i.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }
            });
            console.log("asdfasdf")
        });
    }
}, 2000);