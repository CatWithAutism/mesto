import { Card } from "../components/card.js";

export function createCard(title, link, selector, clickHandler){
    return new Card({ title: title, link: link }, selector, clickHandler)
}