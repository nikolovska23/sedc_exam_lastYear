

function Novels(title, author, publisher, year, pages, series, snumber, isbn, review) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
    this.pages = pages;
    this.series = series;
    this.snumber = snumber;
    this.isbn = isbn;
    this.review = review;
}

function Story(title, author, original) {
    this.title = title;
    this.author = author;
    this.original = original;
}

function Anthology(title, editor, publisher, year, pages, stories,originalS, isbn, review) {
    this.title = title;
    this.editor = editor;
    this.publisher = publisher;
    this.year = year;
    this.pages = pages;
    this.stories = stories;
    this.originalS=originalS;
    this.isbn = isbn;
    this.review = review;

}
// function Book(title, editor, publisher, year, pages, stories, isbn, review) {
//     this.title = title;
//     this.editor = editor;
//     this.publisher = publisher;
//     this.year = year;
//     this.pages = pages;
//     this.stories = stories;
//     this.isbn = isbn;
//     this.review = review;

// }

let books = [];
let novels = [];
let anthologies = [];
let stories = [];
let order = 0;
let orderA = 0;
let orderB = 0;

//FILTER

$("#searchInput").keyup(function () {
    var rows = $("#BookList").find("tr").hide();
    if (this.value.length) {
        var data = this.value.split(" ");
        $.each(data, function (i, v) {
            rows.filter(":contains('" + v + "')").show();
        });
    } else rows.show();
});

// $("#search").keyup(function () {
//     this.find("tbody:first > tr").each(function() {
//         var row = $(this);
//         if (filter == "") {
//             row.show();
//         }
//         else {
//             var cellText = $(row.find(("td:eq(" + index + ")"))).text();
//             if (cellText.indexOf(filter) == -1) {
//                 row.hide();
//             }
//             else {
//                 row.show();
//             }
//         }
//     });
// });




// function filter(){
// $('table').hide();
// $('#mySelector').change(function() {
//   $('table').show();
//   var selection = $(this).val();
//   var dataset = $('#myTable tbody').find('tr');
//   // show all rows first
//   dataset.show();
//   // filter the rows that should be hidden
//   dataset.filter(function(index, item) {
//     return $(item).find('td:first-child').text().split(',').indexOf(selection) === -1;
//   }).hide();

// })}


// $(document).ready(function(){
//  //add index column with all content.
//  $(".filterable tr:has(td)").each(function(){
//    var t = $(this).text().toLowerCase(); //all row text
//    $("<td class='indexColumn'></td>")
//     .hide().text(t).appendTo(this);
//  });//each tr
//  $("#FilterTextBox").keyup(function(){
//    var s = $(this).val().toLowerCase().split(" ");
//    //show all rows.
//    $(".filterable tr:hidden").show();
//    $.each(s, function(){
//        $(".filterable tr:visible .indexColumn:not(:contains('"
//           + this + "'))").parent().hide();
//    });//each
//  });//key up.
// });//document.ready

// $(function() {    
//     $('#filter1').change(function() { 
//         $("#table td.col1:contains('" + $(this).val() + "')").parent().show();
//         $("#table td.col1:not(:contains('" + $(this).val() + "'))").parent().hide();
//     });

// });





// SORTINGS   
// $("#sort_id").click(()=> {
//     novels.sort((a, b) => {
//         return a.id - b.id;
//     });

// });

// $("#sort_title").click(()=>{
   
//  let table= $('#novelsT').DataTable();

//     table.order( [ 1, 'asc' ] ).draw();
    
 
// });


// $("#sort_title").click(()=>{
//     $('#novelsT').DataTable({
   
//     "aaSorting": [[ 1, 'asc' ]],
//     "iDisplayLength": 10,
//     })
    
//    });

// $("#sort_title").click(()=>{
//     $('#novelsT').DataTable();
// });



// $("#sort_title").click(()=> {
//     $('#novels').addClass('hidden');
//     novels.sort((a, b) => {
//         return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
//     });

//     novels.forEach(novel => {
//         newNovel();
//     });
//     $('#novels').removeClass('hidden');

// });

function controlInput(title, author, publisher, year, pages, series, snumber, isbn, review) {
    let f = 1;
    if (title == undefined || title == "") {
        $(".message").append(`<span>Please enter a title</span><br>`);
        $("#inputTitle").focus();
        f = 0;
    }

    if (author == undefined || author == "") {
        $(".message").append(`<span>Please enter an author</span><br>`);
        $("#inputAuthor").focus();
        f = 0;
    }

    if (series == "" || series == undefined) {
        if (snumber != "" && snumber != undefined) {
            $(".message").append(`<span>Enter a series first</span><br>`);
            f = 0;
        }
    }


    if (isbn != "" && isbn != undefined) {
        let isnum = /^\d+$/.test(isbn);
        if (!isnum) {
            $(".message").append(`<span>Please enter a valid ISBN number</span><br>`);
            $("#inputISBN").focus();
            f = 0;
        }
    }
    return f;
}

function controlInputAnth(title, editor, publisher, year, pages, stories, isbn, review) {


    let f = 1;
    if (title == undefined || title == "") {
        $(".message").append(`<span>Please enter a title</span><br>`);
        $("#inputTitleAnth").focus();
        f = 0;
    }

    if (editor == undefined || editor == "") {
        $(".message").append(`<span>Please enter an editor</span><br>`);
        $("#inputEditor").focus();
        f = 0;
    }

    if (stories.length < 2) {
        $(".message").append(`<span>An anthology must have at least two stories</span><br>`);
        f = 0;
    }
       


    if (isbn != "" && isbn != undefined) {
        let isnum = /^\d+$/.test(isbn);
        if (!isnum) {
            $(".message").append(`<span>Please enter a valid ISBN number</span><br>`);
            $("#inputISBNAnth").focus();
            f = 0;
        }
    }
    return f;
}

function controlInputSt(title, author) {
    let f = 1;
    if (title == undefined || title == "") {
        $(".message").append(`<span>Please enter a title</span><br>`);
        $("#inputTitleStory").focus();
        f = 0;
    }

    if (author == undefined || author == "") {
        $(".message").append(`<span>Please enter an author</span><br>`);
        $("#inputAuthorStory").focus();
        f = 0;
    }
    return f;
}

// Empties all input fields
function refresh() {
    $('#inputTitle').val('');
    $('#inputAuthor').val('');
    $('#inputPublisher').val('');
    $('#inputYear').val('');
    $('#inputPages').val('');
    $('#inputSeries').val('');
    $('#inputSeriesNumber').val('');
    $('#inputISBN').val('');
    $('#inputReview').val('');
    $('#inputTitleAnth').val('');
    $('#inputEditor').val('');
    $('#inputPublisherAnth').val('');
    $('#inputYearAnth').val('');
    $('#inputPageLengthAnth').val('');
    $('#inputISBNAnth').val('');
    $('#inputReviewAnth').val('');
    stories = [];
    $("#story_display").html('');
}

// Checks if number of stories ends with 1
function endOne(num){
    if(num%10==1)
    return num + " story";
    else 
    return num + " stories";
}

function ifOriginal(original){
    if(original!= 0)
    return `( ${original}  original stories)`;
    else
    return ``;
}

 // CONVERT NUMBERS TO ROMAN NUMERALS
 function convertToRoman(num) {
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let romanized = '';
    for (let index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }
    return romanized;
}

let newNovel = (() => {
    order++;
    console.log(convertToRoman(novels[novels.length - 1].snumber));
    $('#BookList').append(`
        <tr>
        <th scope="row">${order}</th>
        <td id="title">${novels[novels.length - 1].title}</td>
        <td>${novels[novels.length - 1].author}</td>
        <td>${novels[novels.length - 1].year}  (${novels[novels.length - 1].publisher})</td>
        <td>${novels[novels.length - 1].pages}</td>
        <td>${novels[novels.length - 1].series} (
            
            ${convertToRoman(novels[novels.length - 1].snumber)})</td>
        
        <td>${novels[novels.length - 1].isbn}</td>
        <td>${novels[novels.length - 1].review}</td>
        <td><button class="deleteBtn"> Delete </button></td>
        </tr>
    `);
})



let newAnthology = (() => {
    orderA++;
    console.log(ifOriginal(anthologies[anthologies.length - 1].originalS));
    $('#BookListAnth').append(`
        <tr>
            <th scope="row">${orderA}</th>
            <td>${anthologies[anthologies.length - 1].title}</td>
            <td>${anthologies[anthologies.length - 1].editor}</td>
           
            <td>${anthologies[anthologies.length - 1].year}  ${anthologies[anthologies.length - 1].publisher}</td>
            <td>${anthologies[anthologies.length - 1].pages}</td>
           <td>${endOne(anthologies[anthologies.length - 1].stories.length)}
           
               ${ifOriginal(anthologies[anthologies.length - 1].originalS)} </td>
           
             
             
                
            
            <td>${anthologies[anthologies.length - 1].isbn}</td>
            <td>${anthologies[anthologies.length - 1].review}</td>
            <td><button class="deleteBtn"> Delete </button></td>
         
        </tr>
    `);

})

// let newBook = (() => {
//     orderB++;
//     $('#BookListB').append(`
//         <tr>
//             <th scope="row">${orderB}</th>
//             <td>${books[books.length - 1].title}</td>
//             <td>${books[books.length - 1].editor}</td>
//             <td>${books[books.length - 1].publisher}</td>
//             <td>${books[books.length - 1].year}</td>
//             <td>${books[books.length - 1].pages}</td>
//             <td>${books[books.length - 1].stories}</td>
//             <td>${books[books.length - 1].isbn}</td>
//             <td>${books[books.length - 1].review}</td>

//         </tr>
//     `);

// })


$(document).ready(function () {

    // Display Input Form
    $('#newBtn').click(() => {
        $('#inputForm').removeClass('hidden');
        $('#anthologies').addClass('hidden');
        $('#novels').addClass('hidden');


    })

    // Disabled enter on input forms
    $('.noEnterSubmit').keypress(function (e) {
        if (e.which == 13)
            return false;
        //or
        if (e.which == 13)
            e.preventDefault();
    })

    // Shows input form based on user choice
    $('input:radio[name="gridRadios"]').change(function () {
        if ($(this).val() == "ant") {
            $('#form-novel').addClass('hidden');
            $('#form-anthology').removeClass('hidden');
        }

        if ($(this).val() == "novel") {
            $('#form-novel').removeClass('hidden');
            $('#form-anthology').addClass('hidden');
        }
    })






    $("#addStory").click((e) => {
        e.preventDefault();

        $('#story').removeClass('hidden');
    })


    $('#saveStory').click((e) => {
        e.preventDefault();

        $(".message").html("");

        let title = $('#inputTitleStory').val();
        let author = $('#inputAuthorStory').val();
        let original = $("#storyOrig").is(":checked");

        if (controlInputSt(title, author)) {
            stories.push(new Story(title, author, original));
            console.log(stories[stories.length-1].original);
            


            $("#story_display").append(`<li>${stories[stories.length - 1].title}</li>`);

            $('#inputTitleStory').val("");
            $('#inputAuthorStory').val("");
            $('#storyOrig').prop( "checked", false );
            //or $('#storyOrig').removeAttr('checked');
        }


    })






    $('#savenovel').click((e) => {
        e.preventDefault();
        $(".message").html("");

        let title = $('#inputTitle').val();
        let author = $('#inputAuthor').val();
        let publisher = $('#inputPublisher').val();
        let year = $('#inputYear').val();
        let pages = $('#inputPages').val();
        let series = $('#inputSeries').val();
        let snumber = $('#inputSeriesNumber').val();
        let isbn = $('#inputISBN').val();
        let review = $('#inputReview').val();

        if (controlInput(title, author, publisher, year, pages, series, snumber, isbn, review)) {

            novels.push(new Novels(title, author, publisher, year, pages, series, snumber, isbn, review));
            newNovel();



            $('#inputForm').addClass('hidden');
            refresh();
            $('#novels').removeClass('hidden');
        }
    });

    $('#saveAnth').click((e) => {
        e.preventDefault();

        $(".message").html("");
        let title = $('#inputTitleAnth').val();
        let editor = $('#inputEditor').val();
        let publisher = $('#inputPublisherAnth').val();
        let year = $('#inputYearAnth').val();
        let pages = $('#inputPageLengthAnth').val();
        let storiesA = stories;
        let storiesO=0;
        let isbn = $('#inputISBNAnth').val();
        let review = $('#inputReviewAnth').val();

        if (controlInputAnth(title, editor, publisher, year, pages, storiesA, isbn, review)) {
            

            storiesA.forEach(story => { 
                if(story.original)
                storiesO++;
                return storiesO;      
            });
            

            anthologies.push(new Anthology(title, editor, publisher, year, pages, storiesA,storiesO, isbn, review));

            newAnthology();


            $('#inputForm').addClass('hidden');
            $('#story').addClass('hidden');
            refresh();
            $('#anthologies').removeClass('hidden');

        }

    });

    $('#listOfAllBooks').click((e) => {
        e.preventDefault();
        $('#booklist').removeClass('hidden');
        $('#listOfBooks').removeClass('hidden')
        $('#inputForm').addClass('hidden')
        // $notFound.removeClass('hidden');


    })

    // $('#showBooks').click((e) => {
    //     e.preventDefault();

    //     $('#anthologies').addClass('hidden');
    //     $('#novels').addClass('hidden');
    //     $('#books').removeClass('hidden');
    // })

    $('#showNovels').click((e) => {
        e.preventDefault();
        $('#novels').removeClass('hidden');
        $('#anthologies').addClass('hidden');
        


    });

    $('#showAnthologies').click((e) => {
        e.preventDefault();
        $('#anthologies').removeClass('hidden');
        $('#novels').addClass('hidden');
        

    });

    $('#newBookBtn').click((e) => {
        e.preventDefault();
        $('#inputForm').addClass('hidden');
        $('#listOfBooks').addClass('hidden');
        $('#booklist').addClass('hidden');
        $('#novels').addClass('hidden');
       

    })

    //Cancel handler
    $(".cancel").click(() => {

        $('#booklist').removeClass('hidden');
        $('#listOfBooks').removeClass('hidden')
        $('#inputForm').addClass('hidden')

        refresh();
    });

    // DELETE ROW FROM TABLE
      $('.bookT').on('click', '.deleteBtn', function() {
        let choice = confirm('Do you really wanna delete this one?');
        if (choice === true) {
            return $(this).closest('tr').remove();
        }
        return false;
      });
      
      

});

