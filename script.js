console.log('olá, mundo');

// [CRU] JavaScript Básico
// CREATE
// READ
// UPDATE
// DELETE

const miniTwitter = { 
    usuarios: [
        {
            userame:    'thisena',
        }

    ],
    posts: [  
        {
            id: 1,
            owner: 'thisena',
            content: 'Meu primeiro post'
         }
    ]
};

// CREAT
function criarPost({dados}) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner
        content: dados.content
    })
}
criarPost({ owner: 'thisena', content 'Segundo tweet'});
console.log(miniTwitter.post) [ { owner: 'thisenaa'}]

// READ
function pegaPosts() {
    return miniTwitter.posts;
}
console.log(pegaPost()) [ { owner: 'thisenaa', content}]

// UPDATE
function atualizaContentPost(id, novo) {   
    const postQueSeraAtualizado = pegaPosts().find(post) => {
        return post.id === id; 
    }
    console.log(postQueSeraAtualizado) [{ id: 1, owner: 'thisena'}]

}
atualizaContentPost (1, 'Novo conteúdo do post')
console.log(pegaPosts())

// DELETE 
function apagaPost(id) {
   const listaPostAtualizada = pegaPosts().filter(postAtual) ==>
        return postAtual.id !== id; 
}

    miniTwitter.posts = listaPostAtualizada;
function apagaPost(1)