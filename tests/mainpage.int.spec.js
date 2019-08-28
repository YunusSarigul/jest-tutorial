const frisby = require('frisby');
const config = require('config');
const _ = require('lodash');
const sprintf = require('sprintf-js').sprintf;

const tesHelper = require('../helpers/testHelper');

describe('Main page ', () => { 
    const post = config.get('post');
    const baseUrl = config.get('baseUrl');

    const getAllPostsPath = config.get('post.getAllPosts.path');
    const getPostByPostIdPath = config.get('post.getPostByPostId.path');
    const getPostByUserIdPath = config.get('post.getPostByUserId.path');
    const updateTitleUsingIdPath = config.get('post.updateTitleUsingId.path');

    test('Should return 200', () => { 
        
        const getAllPostsURL = `${baseUrl}/${getAllPostsPath}`;
        return frisby
            .get(getAllPostsURL)
            .expect('status', 200)
            .then(function (response) { 
                const data = JSON.parse(response['_body']);
                const expectedId = config.get('post.getAllPosts.id');
                //console.log(data[0]['id']);
                expect(data[0]['id']).toBe(expectedId);
            })
    });

    // testClass.js
    test.only('for Id:2 post title should be qui est esse', () => { 
        //const getPostByPostIdURL = sprintf(`${baseUrl}/${getPostByPostIdPath}`,config.get('post.getPostByPostId.id'));
        const getPostByPostIdURL = sprintf(`${baseUrl}/${getPostByPostIdPath}`, config.get('post.getPostByPostId.id'));

        //console.log(getPostByPostIdURL);
        tesHelper.getPostByPostId(getPostByPostIdURL)
            .expect('status', 200)
            .then(function (response) { 
                const data = JSON.parse(response['_body']);
                //console.log(data[0]);
                const expectedPostTitle = config.get('post.getPostByPostId.title')
                expect(data['title']).toBe(expectedPostTitle)
            });
    });

    test('for id:1 user should have 10 posts', () => { 
        const getPostByUserIdURL = sprintf(`${baseUrl}/${getPostByUserIdPath}`, config.get('post.getPostByUserId.userId'));
        //console.log(getPostByUserIdURL);
        return frisby.get(getPostByUserIdURL)
            .expect('status', 200)
            .then(function (response) {
                const data = JSON.parse(response['_body']);
                expect(Object.keys(data).length).toBe(post.getPostByUserId.size);
             });
    });

    test('should return whole object adding new id', () => { 
        const updateTitleUsingIdURL = sprintf(`${baseUrl}/${updateTitleUsingIdPath}`, config.get('post.updateTitleUsingId.id'));
        console.log(updateTitleUsingIdURL);
        //var req = JSON.stringify({ title: 'a'});
        return frisby.patch(updateTitleUsingIdURL, {title:'a'})
        .expect('status',200)
       });
});