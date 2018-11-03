const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');

// Load Validation
const ValidatePostInput = require('../../validation/post');


// @route   GET api/posts/test
// @desc    Test Post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts works'}));

// @route   GET api/posts
// @desc    Get all Post route
// @access  Public

router.get('/', (req, res) => {
  // let webURL = 'https://ifollowthemoney.mn.co/'
  // let welcomeMsg = `CON Hello and welcome to FTM.
  //   Check us our on ${webURL}...
  //   Enter your name to continue`
  // let RequestDetails = {
  //   name: "",
  //   description: "",
  //   address: "",
  //   phone: "",
  //   open: true
  // }
  // let lastData = "";
  // let sessionId = req.body.sessionId;
  // let serviceCode = req.body.serviceCode;
  // let phoneNumber = req.body.phoneNumber;
  // let text = req.body.text;
  // let textValue = text.split('*').length;

  // Post.find()
  //   .sort({ date: -1 })
  //   .then(() => {
  //     if (text === '') {
  //       message = welcomeMsg
  //     } else if (textValue === 1) {
  //       message = "CON What do you want to do?"
  //       RequestDetails.name = text;
  //     } else if (textValue === 2) {
  //       message = "CON View the posts of the day?"
  //       RequestDetails.description = text.split('*')[1];
  //     } else if (textValue === 3) {
  //       message = "CON What's your telephone number?"
  //       RequestDetails.address = text.split('*')[2];
  //     } else if (textValue === 4) {
  //       message = `CON Would you like to make a post?
  //       1. Yes
  //       2. No`
  //       lastData = text.split('*')[3];
  //     } else {
  //       message = `END Thanks, with love from follow the money`
  //       RequestDetails.telephone = lastData
  //     }
  //   })
  //   .then(posts => res.json(posts))
  //   .catch(err => res.status(404).json({ nopostsfound: 'No Posts found' }));

  Post.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
  
});

// @route   GET api/posts/:id
// @desc    Get Post by ID
// @access  Public

router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: 'No Post found with that ID' }));
})

// @route   POST api/post
// @desc    Create Post route
// @access  Private

router.post('/', passport.authenticate('jwt', {session:false}), (req, res) => {
  const { errors, isValid } = ValidatePostInput(req.body);

  // Check Validation
  if (!isValid) {
    // Return any errors with status 400
    return res.status(400).json(errors);
  };

  const newPost = new Post({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  });

  newPost.save().then(post => res.json(post));
});

// @route   DELETE api/posts/:id
// @desc    Delete Post by ID
// @access  Private

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ notauthorized: 'User not authorized' });
          };

          // Delete post
          post.remove().then(()=> res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    });
});

// @route   POST api/posts/like/:id
// @desc    Like Post
// @access  Private

router.post('/like/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          
          if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ alreadyliked: 'User already liked this post' });
          };

          // Add user id to likes array
          post.likes.unshift({ user: req.user.id });

          post.save().then(post=> res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    });
});

// @route   POST api/posts/unlike/:id
// @desc    Unlike Post
// @access  Private

router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ notliked: 'You have not yet liked this post' });
          };

          // Get remove index
          const removeIndex = post.likes
            .map(item =>item.user.toString())
            .indexOf(req.user.id);

          // Splice out of array
          post.likes.splice(removeIndex, 1);
          // Save
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    });
});

// @route   POST /api/posts/comment/:id
// @desc    Comment on Post
// @access  Private

router.post('/comment/:id', passport.authenticate('jwt', { session:false }), (req, res) => {

  const { errors, isValid } = ValidatePostInput(req.body);

  // Check Validation
  if (!isValid) {
      // Return any errors with status 400
      return res.status(400).json(errors);
  };

  Post.findById(req.params.id)
    .then(post => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
      };

      // Add to comment Array
      post.comments.unshift(newComment);

      // Save
      post.save().then(post=> res.json(post));
    })
    .catch(err => res.status(404).json(err));
});

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      // Check to see if comment exists
      if (post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
        return res.status(404).json({ commentnotexists: 'Comment does not exist' });
      }

      // Get remove index
      const removeIndex = post.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

      // Splice comment out of array
      post.comments.splice(removeIndex, 1);

      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
});

module.exports = router;