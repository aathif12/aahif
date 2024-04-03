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
        hasMovieAdaptation:false,
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
/*
const book = getBook(3);


// const title = book.title;
// title;
const{title,author,geners,publicationDate,pages,hasMovieAdaptation,reviewsCount,librarythings} = book;
console.log(title,author,geners,publicationDate,pages);
// const primarygenre = geners[0];
// const scendeorygenre = geners[1];
const[primarygenre,scendeorygenre,...otherGenres] = geners;
primarygenre;
scendeorygenre;
otherGenres;
// function getYear(str){
//     return str.split("-")[0];
// }
const getYear= (str) =>  str.split("-")[0];
console.log(getYear(publicationDate));
const newGenres = [ "epic fantasy",...geners];
newGenres;
const updatedBook = {...book,moviePublicatuionDate:"2001-12-19",pages:1256};
updatedBook;
const summary = `${title} is a Book ,is ${pages} author is ${author} and published in ${getYear(publicationDate)
}.the Book has ${hasMovieAdaptation ? "": "not"} been adapted as a movie`;


summary;

const pagesrange = pages > 700 ? "over 700 " :"Less than thousnand";
pagesrange;
console.log(`The book has ${pagesrange} pages  the number is ${pages}`);
console.log(true && "some string");
console.log(false && "sp,e,");
console.log(hasMovieAdaptation && "this book has a movie ");
console.log(0 && "some string");
console.log(true || "aathif");
console.log(false || "aathif");
console.log(book.translations.spanish);
const tarnsla = book.translations.spanish || "Not translated";
tarnsla

// console.log(book.reviews.librarythings.reviewsCount);
// const countwrong = book.reviews.librarythings.reviewsCount || "No data";
// countwrong;
// const count = book.reviews.librarythings.reviewsCount ?? "No data";
// count;
function getTotalReviews(b){
    const goodReads = book.reviews?.goodreads?.reviewsCount;
    const librarything  = book.reviews?.librarythings?.reviewsCount ?? 0;
    librarything;
    return goodReads + librarything; 
}
console.log(getTotalReviews(book));*/

const books =getBooks();
const x= [1,2,3,4,5].map((el)=>el *2)
console.log(x);

const titles = books.map((book)=>book.title)
titles

const essentialData = books.map((book)=> ({
        author: book.author,
        title: book.title
}));
console.log(essentialData);
const longBooks = books.filter((book)=>book.pages > 500).filter((book)=>book.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = books.filter((book)=>book.geners.includes("adventure")).map((book)=>book.title);

adventureBooks
