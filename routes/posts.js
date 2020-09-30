const router = require('express').Router();
const Post = require('../model/Post')

// GET: Returns all posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find({});
        res.json(posts);
    } catch(err){
        res.send(err.message);
    }  
})

// POST: Adds a post to the db
router.post('/', async (req, res) => {
    const post = new Post({
       title: req.body.title,
       description: req.body.description,
       createdAt : Date.now()
    });

    try{
        await post.save();
        res.status(200).json(post);
    } catch(err){
        res.send(`Failed to save to db because ${err.message}`)
    }
    
 })

//  GET: Returns a single post
 router.get('/:id', async (req, res) => {
     let query = req.params.id;
     try{
        const post = await Post.findById(query);
        res.json(post);
     } catch(err){
         res.send(`Failed to find the post because of ${err.message}`)
     }
 })

 module.exports = router;