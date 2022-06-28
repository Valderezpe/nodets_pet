import { Request, Response } from "express";
import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    let list = Pet.getall();

    res.render('pages/page', {
        menu:createMenuObject(''),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');
    res.render('pages/page', {
        menu:createMenuObject('dog'),
        banner: {
            title: '',
            background: 'banner_dog.jpg'
        },
        list
    });
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat')
    res.render('pages/page', {
        menu:createMenuObject('cat'),
        banner: {
            title: '',
            background: 'banner_cats.jpg'
        },
        list
    });
}
export const fishes= (req: Request, res: Response) => {
    let list = Pet.getFromType('fish')
    res.render('pages/page', {
        menu:createMenuObject('fish'),
        banner: {
            title: '',
            background: 'banner_fish.jpg'
        },
        list
    });
}
