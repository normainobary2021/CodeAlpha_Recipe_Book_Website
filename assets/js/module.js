/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

/**
 * @param {Number} minute Cooking time
 * @returns {String}
 */

export const getTime = minute => {
    const /** {Number} */ hour = Math.floor(minute / 60);
    const /** {Number} */ day = Math.floor(hour / 24);

    const /** {Number} */ time = day || hour || minute;
    const /** {Number} */ unitIndex = [day, hour, minute].lastIndexOf(time);
    const /** {String} */ timeUnit = ["days", "hours", "minutes"][unitIndex];

    // Adjust the time unit string if time is equal to 1
    // const /** {String} */ adjustedTimeUnit = time === 1 ? timeUnit.slice(0, -1) : timeUnit;
    
    let adjustedTimeUnit;
    if (time === 1) {
        adjustedTimeUnit = timeUnit.slice(0, -1);
    } else if (time < 1) {
        adjustedTimeUnit = "minute";
    } else {
        adjustedTimeUnit = timeUnit;
    }

    return { time, timeUnit: adjustedTimeUnit };
}
