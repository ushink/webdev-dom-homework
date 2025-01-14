
import { format } from "date-fns";
import  {getFetchPromise} from "./API.js";
import { renderApp }  from "./render.js";
import { listComments } from "./listComments.js"
    

    let comments = [];
    let token = null;

    export function getFetchFunction() {
      getFetchPromise({token}).then((responseDate) => {
         const appComments = responseDate.comments.map ((comment) => {
           return{
            name: comment.author.name,
            text: comment.text,
            date: format(new Date(comment.date), 'yyyy-MM-dd hh.mm.ss'), //новый формат даты
            likes: comment.likes,
            activeLike: false,
            propertyColorLike: 'like-button -no-active-like',
           }
         });
          comments = appComments;
          renderApp( {comments, listComments} );
       })
       .then(() => {
          //document.querySelector('.loader').style.display = 'none';
       })
    };
    
    getFetchFunction();

    export const replayToComment = () => {

      const oldComments = document.querySelectorAll('.comment');
      
      for (const oldElement of oldComments) {

        oldElement.addEventListener('click', () => {
          
          const indexComment = oldElement.dataset.index;
          
          document.getElementById("textarea-text").value = `${comments[indexComment].name}: ${comments[indexComment].text}`;
          
        });
      };
    };

    replayToComment();

    // Реализация лайков

    export const initEventListeners = () => {

      const likeBtn = document.querySelectorAll('.like-button');

      for (const likeElement of likeBtn) {

        likeElement.addEventListener('click', (event) => {
          event.stopPropagation();

          const index = likeElement.dataset.index;
          const commentElement = comments[index];

          if (commentElement.activeLike) {
            commentElement.likes -= 1;
            commentElement.activeLike = false;
            commentElement.propertyColorLike = 'like-button -no-active-like'; 
          
          } else {
            commentElement.likes += 1;
            commentElement.activeLike = true;
            commentElement.propertyColorLike = 'like-button -active-like';

          }
          
          renderApp( {comments, listComments} );

        });

      };

    };
    initEventListeners(); 

    
    renderApp( {comments, listComments} );
    
    
    console.log("It works!");