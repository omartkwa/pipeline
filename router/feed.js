const express=require('express');
const{body}=require('express-validator');

const router=express.Router();

//Get feed/post
const controllerFeed=require('../controller/feed');
router.get('/posts',controllerFeed.getPosts);

router.post('/post',[
    body('title').trim()
    .isLength({min:5}),
    body('content')
    .trim()
    .isLength({min:5}).withMessage('oamr')
],controllerFeed.createPost);

module.exports=router;