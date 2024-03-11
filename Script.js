const data = [
    {
        id:1,
        title:"The lord of Rings",
        publicationDate:"1954-07-24",
        author:"J. R. R. Tolkien",
        geners:[
            "Fantasy",
            "high-Fantasy",
            "adventure",
            "novels",
            "literature",
        ],
        hasMovieAdaptation:true,
        pages:1216,
        translations:{
            spanish:"kasfhdijhfsdajh",
            chinese:"dfjd",
            french:"dskjfghdghdgfkjdf",
        },
        reviews:{
            goodreads:{
                rating:4.52,
                ratingsCount:630994,
                reviewsCount: 13417,
            },
            librarythings:{
                rating:4.53,
                ratingsCount:47166,
                reviewsCount:452,
            },
        },
    },
    {
        id:2,
        title:"The Cyeberiad",
        publicationDate:"1965-01-01",
        author:"Stanislaw Lem",
        geners:[
            "Science fiction",
            "humor",
            "sepculative fiction",
            "short stories",
            "fanatsy",
        ],
        hasMovieAdaptation:false,
        pages:295,
        translations:{},
        reviews:{
            goodreads:{
                rating:4.16,
                ratingsCount:11663,
                reviewsCount: 813,
            },
            librarythings:{
                rating:4.13,
                ratingsCount:2434,
                reviewsCount:0,
            },
        },
    },
    {
        id:3,
        title:"Dune",
        publicationDate:"1965-01-01",
        author:"Frank Herbat",
        geners:[
            "Science fiction",
            "novel",
            "Adventure"
        ],
        hasMovieAdaptation:true,
        pages:658,
        translations:{spanish:""},
        reviews:{
            goodreads:{
                rating:4.25,
                ratingsCount:1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id:4,
        title:"Harry Potter the Philospher's Stone",
        publicationDate:"1997-06-26",
        author:"J. k Rowling",
        geners:[
            "fanatsy",
            "adventure"
        ],
        hasMovieAdaptation:true,
        pages:223,
        translations:{
            spanish:"klasjfkjfsalkj",
            korean:"koreadsdfhjjsidh",
            bengali:"lksahfkjhafsjh",
            portuguese:"hagshdgjsh",
        },
        reviews:{
            goodreads:{
                rating:4.47,
                ratingsCount:8910059,
                reviewsCount: 140625,
            },
            librarythings:{
                rating:4.29,
                ratingsCount:120941,
                reviewsCount:1960,
            },
        },
    },
];
function getBooks(){
    return data;
}

function getBook(id){
    return data.find((d) => d.id === id)
}
const book = getBook(2);


// const title = book.title;
// title;
const{title,author} = book;
console.log(title,author);