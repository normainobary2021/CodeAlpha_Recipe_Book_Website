/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
// const /** {String} */ APP_ID = "589da87e";
// const /** {String} */ API_KEY = "7dd43ea59c886bb2c3689b5f18381086";
const /** {String} */ APP_ID = "84197d4c";
const /** {String} */ API_KEY = "07adbb6defa2da77263411decbbd6cf7";
const /** {String} */ TYPE = "public";

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
*/

export const fetchData = async function (queries, successCallback) {
    const /** {String} */ query = queries?.join("&")
        .replace(/,/g, "=")
        .replace(/ /g, "%20")
        .replace(/\+/g, "%2B");
    
    const /** {String} */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const /** {Object} */ response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        successCallback(data);
    }
}
