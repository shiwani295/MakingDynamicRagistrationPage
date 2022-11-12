//q1 why we use call back 
//q2 what is promise
//q3 what is asynchro.


//const posts=[
//     {title:'post one', body:'this is post one'},
//     {title:'post tho', body:'this is post one'}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     }
// ];

// function getPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post,index)=>{
//             output+=`<li>${post.title}</li>`; 
//         });
//         document.body.innerHTML=output;
//     }, 1000)
// }

//////////////////first method to do this ////////////////////////////

//second when you create this with time set it will not print third post
// because create post took longer than get post happed in one second and several return in one sec 
//but create post took 2 seconds by the time we run the create post the dom is already painding that by the async problem will gerenate so thats we use call back
// function createPost(post){
//     setTimeout(()=>{
//         posts.push(post)
//     },2000)
// }

// getPosts()       // first this will print post 1 and 2 

///////////////////////////second method using call back for thrd post  //////////////////////////////////

//use callback come which is one way to handle it 
//so this will wait 2 sec and then show all the posts because of create the post 
//before called the callback okay 

// function create4Post(post, callback){
//     setTimeout(()=> {
//         posts.push(post); //then push on to it and then call a callback function  
//         callback();
//     }, 2000);
// }


// create4Post({title:'Post Three', body:'this is post three'
// }, getPosts);

////////////////////////////Q2 created At///////////////////////////////////

// function currentPosts(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post,index)=>{
//             output+=`<li>${post.title}, ${post.createdAt}</li>`; 
//         });
//         document.body.innerHTML=output;
//     }, 1000)
// }


// function createPost(post, callback){
//     setTimeout(()=> {
//         posts.push(post); //then push on to it and then call a callback function  
//         callback();
//     }, 2000);
// }


// createPost({title:'Post thrid', body:'this is post fourth',
// createdAt:new Date}, currentPosts);

//console.log(createPost)


///////////////////////////////create At using callback /////////////////////////////////////


// function createPost(post, callback){
//     setTimeout(()=> {
//         posts.push(post); //then push on to it and then call a callback function  
//         callback();
//     }, 2000);
// }


// createPost({title:'Post fourth', body:'this is post fourth'
// ,createdAt:new Date}, currentPosts);



//////////////////////promise///////////////////////////////////

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> {
//             posts.push(post);  
            
//             const error= false;

//             if(!error){
//                 resolve();
//             }else{
//                 reject("error: Something went wrong ");
//             }
//         }, 2000);

//     })
    
// }
// createPost({title:'Post Three', body:'this is post three'
// })
// .then(getPosts)
// .catch(err => console.log(err));
///


//3) On the screen show the user how long back each of the post was edited in seconds ago. Just add "{ current timestamp  - postcreated At timestamp }" on each of the post. It should look like the following
//Post 1  created 8 seconds ago
//Post 2 created 7 seconds ago
//Post 3 crated  2 seconds ago

const posts=[
    {
        title:'post one',body:'this is post one',createdAt:new Date().getTime()
    },
    {
        title:'post two',body:'this is post two',createdAt:new Date().getTime()
    }
]

function getPost(){
    setTimeout( ()=>{
        let output='';
        posts.forEach((post)=>{
            output+=`<li>${post.title}, ${Math.round((new Date().getTime()  - post.createdAt) / 1000)} "seconds  Ago"</li>`; 
        });
        document.body.innerHTML=output;
    },1000);
    
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback();
    }, 2000);
}

createPost({title:'Post third', body:'this is post fifth'
,createdAt:new Date().getTime()}, getPost);



////////////////////////////4) question continue running sec////////////////////////



const postes=[
    {title:'post one',body:'this is post one',createdAt:new Date().getTime()},
    {title:'post two',body:'this is post two',createdAt:new Date().getTime()}
]

function getposts(){
    setInterval(()=>{
        let output='';
        postes.forEach((post)=>{
          output+=`<li>${post.title}, ${Math.round((new Date().getTime()  - post.createdAt) / 1000)} "seconds  Ago"</li>`; 
        });
        document.body.innerHTML=output;
    },1000);

}
function createPost(post, callback){
    setTimeout(()=>{
        postes.push(post);  
        callback();
    }, 2000);
      

}

createPost({title:'Post third', body:'this is post fifth'
,createdAt:new Date().getTime()}, getposts);









////// //////////////////////
