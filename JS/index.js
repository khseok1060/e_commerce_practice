// var book = [
//     {
//       id: 'book_1',
//       name: 'Originals',
//       category: 'Economics',
//       price: 14400,
//       picture_url: 'https://images-na.ssl-images-amazon.com/images/I/51qo9POttyL._SX329_BO1,204,203,200_.jpg',
//       a_list_of_selling_points: ['creativity', 'originality', 'Changing the World']
//     },
//     {
//       id: 'book_2',
//       name: 'Less and More: The Design Ethosof Dieter Rams',
//       category: 'Design',
//       price: 98830,
//       picture_url: 'http://www.mottodistribution.com/shop/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/e/lessandmorehc_side2.gif',
//       a_list_of_selling_points: ['Dieter Rams', 'Creation', 'Simple', 'Inspiration']
//     }
//   ];
//
// var album = [
//     {
//       id: 'album_1',
//       name: 'U2 - THE BEST OF 1990-2000 & B-SIDES',
//       category: 'Pop',
//       price: 28200,
//       picture_url: 'https://images-na.ssl-images-amazon.com/images/I/71-c5KDw6HL._SL1100_.jpg',
//       a_list_of_selling_points: ['U2', 'Best Album', 'With or without you']
//     },
//     {
//       id: 'album_2',
//       name: 'AEROSMITH - THE ESSENTIAL AEROSMITH',
//       category: 'Rock',
//       price: 15800,
//       picture_url: 'http://resources.wimpmusic.com/images/6f884d0d/f672/4354/8d44/cb1e3f9db1db/1280x1280.jpg',
//       a_list_of_selling_points: ['Aerosmith', 'Dream on', 'Rock']
//     }
//   ];

var product = {
  book: [
    {
      id: 'book_1',
      name: 'Originals',
      category: 'Economics',
      price: 14400,
      picture_url: 'https://images-na.ssl-images-amazon.com/images/I/51qo9POttyL._SX329_BO1,204,203,200_.jpg',
      a_list_of_selling_points: ['creativity', 'originality', 'Changing the World']
    },
    {
      id: 'book_2',
      name: 'Less and More: The Design Ethosof Dieter Rams',
      category: 'Design',
      price: 98830,
      picture_url: 'http://www.mottodistribution.com/shop/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/e/lessandmorehc_side2.gif',
      a_list_of_selling_points: ['Dieter Rams', 'Creation', 'Simple', 'Inspiration']
    }
  ],
  album: [
    {
      id: 'album_1',
      name: 'U2 - THE BEST OF 1990-2000 & B-SIDES',
      category: 'Pop',
      price: 28200,
      picture_url: 'https://images-na.ssl-images-amazon.com/images/I/71-c5KDw6HL._SL1100_.jpg',
      a_list_of_selling_points: ['U2', 'Best Album', 'With or without you']
    },
    {
      id: 'album_2',
      name: 'AEROSMITH - THE ESSENTIAL AEROSMITH',
      category: 'Rock',
      price: 15800,
      picture_url: 'http://resources.wimpmusic.com/images/6f884d0d/f672/4354/8d44/cb1e3f9db1db/1280x1280.jpg',
      a_list_of_selling_points: ['Aerosmith', 'Dream on', 'Rock']
    }

  ]
};



var add_to_page = function(content){
  $('#content').append($('<div id=' + content.id + '>').html( $('<div class="name">').text(content.name)));
  $('#' + content.id).append($('<div class="category">').text(content.category));
  $('#' + content.id).append($('<div class="price">').text(content.price));
  $('#' + content.id).append($('<div class="picture"><img>'));
  $('#' + content.id + ' ' + 'img').attr('src', content.picture_url);
}

$('#move-book').click(function() {
  $('#content').empty();
  for(i=0; i < product.book.length; i++){
        add_to_page(product.book[i]);
  }
});

$('#move-album').click(function() {
  $('#content').empty();
  for(i=0; i < product.album.length; i++){
        add_to_page(product.album[i]);
  }
});

$('#show-all').click(function() {
  $('#content').empty();
  for(i=0; i < product.book.length; i++){
        add_to_page(product.book[i]);
  }
  for(i=0; i < product.album.length; i++){
        add_to_page(product.album[i]);
  }
});

$('select').change(function(){
  var str = $("select option:selected").text();

  if(str === 'Book') {
    $('#content').empty();
    for(i=0; i < product.book.length; i++) {
      add_to_page(product.book[i]);
    }
  }
});
