/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(n) {
    if (n > 0) {
    return "Not done, please wait."
    }
    if (n === 0){ 
    return "Lasagna is done."
    }
    if (n === undefined){
        return "You forgot to set the timer."
    }
}

export function preparationTime (layer, time=2){
    if (layer.length === 0 && time === 2  ){
        return (layer.length * time)
    }
    if (layer.length !== 0 && time){
        return (layer.length * time)
    }
}

export function quantities (layer, time){

}