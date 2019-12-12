/**
 * XHR
 */
console.log('XHR');
try {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    xhttp.open('GET', 'http://myid.mockapi.io/api/v1/users', true);
    xhttp.send();
} catch (err) {
    console.log('Error');
}
console.log();
/**
 * JQuery
 */
console.log('JQuery');
import $ from 'jquery';
let promiseGet = $.get("");
promiseGet.then(
    data => console.log('Success: ', data),
    err => console.log('Error: ', err)
);
let user = { name: 'Ximena', avatar: 'Xime.png' };
let promisePost = $.post("", user);
promisePost.then(
    data => console.log('Success: ', data),
    err => console.log('Error: ', err)
)