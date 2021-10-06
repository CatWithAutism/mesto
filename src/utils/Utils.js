import { Card } from "../components/Card.js";

export function createCard(title, link, selector, clickHandler){
    return new Card({ title: title, link: link }, selector, clickHandler)
}