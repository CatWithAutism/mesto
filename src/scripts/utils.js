import * as consts from "./constants.js";
import { Card } from "./сard.js";

export function drawCard(card) {
    consts.pictures.prepend(card.getCard());
}

export function createCard(name, link, selector){
    return new Card({ name: name, link: link }, selector)
}