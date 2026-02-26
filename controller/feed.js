const {validationResult}=require('express-validator');
const Post=require('../models/post');

exports.getPosts=(req,res,next)=>{
    res.status(200)
    .json({
    post:[
        {
        _idL:'1',
        title:'First Post',
        content:'This is the first post',
        imaegUrl:'images/omar.jpg',
        creator:{
            name:'omar'
        },
       createdAt:new Date()
             }
        ]
    });
}

exports.createPost=(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422)
        .json({
            message:'oooo',
            errors:errors.array()[0].msg
        })
    }
    const title=req.body.title;
    const content=req.body.content;
    const post =new Post({
        title:title,
        content:content,
        imageUrl:'images/oamr.jpg',
        creator:{name:'omar'}
    });
    
    post.save().then(result=>{
        console.log(result);
         res.status(201)
    .json({
        message:"the first post",
       post:result
    });
    }).catch(err=>console.log(err));
}
