import { getComments } from './api.js';

const d = document;

export async function showComments(comments_container) {
  // data from api
  const comments = await getComments();

  // fragment and comments container
  const $comments = d.getElementById(comments_container);
  const fragment = d.createDocumentFragment();

  if (comments.lengt > 0) {
    comments.forEach((comment) => {
      const { name, email, body } = comment;

      const $article = d.createElement('article');
      $article.classList.add('comment');

      $article.innerHTML = `
        <h3>${name}</h3>
        <div class="information">
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Description: </strong>
                ${body}    
            </p>
        </div>
    `;

      fragment.appendChild($article);
    });

    $comments.innerHTML = '';
    $comments.appendChild(fragment);
  } else {
    $comments.innerHTML = `<h2 style="text-align: center;">🚨 content could not be displayed ⚠️</h2>`;
  }
}

/* 
<article class="comment">
            <h3>id labore ex et quam laborum</h3>
            <div class="information">
                <p><strong>Email: </strong> Eliseo@gardner.biz</p>
                <p><strong>Description: </strong>
                    laudantium enim quasi est quidem magnam voluptate ipsam eos tempora
                    quo necessitatibus dolor quam autem quasi reiciendis
                    et nam sapiente accusantium
                </p>
            </div>
        </article>
         */
