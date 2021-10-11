import { Card } from "../components/Card.js";

export function createCard(cardData, userId, selector, clickHandler, deleteCardHandler, onLikeCard){
    return new Card({ title: cardData.name, link: cardData.link, likes: cardData.likes, id:cardData._id, ownerId:cardData.owner._id}, userId, selector, clickHandler, deleteCardHandler, onLikeCard)
} 