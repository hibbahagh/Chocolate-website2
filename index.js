var cardContainer = $('.card-container');
var btn = $('.submit-btn');


btn.on("click", chocolate);

localStorage.setItem('items', JSON.stringify(cardContainer))

function chocolate() {
  var name = $('.name').val();
  var favorite = $('.favorite').val();
  var temp = $('.temp').val();

cardContainer.append(`
<p class="name-card"> My name is ${name}, my favorite chocolate is ${favorite} and I like it to be ${temp} tempature! </p>
`);

  $('.name').val("");
  $('.favorite').val("");
  $('.temp').val("");

}
