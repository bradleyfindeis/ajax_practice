var arrProducts = [];


$(document).ready(function() {
  $.ajax({
    url: "http://json-server.devpointlabs.com/api/v1/products",
    method: "GET"
  }).done(function(products) {
    arrProducts = products 
    show(arrProducts)
  });
  $('.submit').on('click', function() {

    var name = this.form.children[0].children[1].value
    var description = this.form.children[1].children[1].value

    $.ajax({
      url: `http://json-server.devpointlabs.com/api/v1/products?product[name]=${name}&product[description]=${description}`,
      method: "POST"
    }).done( function(product){

    })
  })
});

// $(document).on("click", ".edit", function() {
//   alert("Edit")
// });
$(document).on("click", ".delete", function() {
  $.ajax({
    url: `http://json-server.devpointlabs.com/api/v1/products?product[name]=${name}&product[description]=${description}`,
    method: "DELETE"
  }).done(function(product) {
    var item = $(`#${id}`)
    item.parent().parent().remove();
  });
});


// $(document).on('click', '.card', function(){
  
//   $.ajax({
//     url: `http://json-server.devpointlabs.com/api/v1/products/${this.id}`,
//     method: "GET"
//   }).done( function(product){
//     arrProducts = [product]
//     show(arrProducts); 
//   })
// })

function show(products){
  var productArea = $("#products");
  productArea.empty();
  products.forEach(function(product) {
    var div = "<div id=" + product.id + ' class="four wide column ui card"><p>' + product.name + "</p><p>" + product.description + '</p><div class="extra content"><div class="ui three buttons"><div class="ui basic blue button">Show</div><div class="ui basic green button">Edit</div><div class="ui basic red button delete">Delete</div></div></div></div>';
    productArea.append(div);
  });
}

$('#toggle').on('click', function() {
  showForm = !showForm;
  $('#product-form').remove()
  $('#product-list').toggle()
  
  if (showForm) {
  
    $.ajax({
      url: '/product_form',
      method: 'GET'
    }).done( function(html) {
      $('#toggle').after(html);
    });
  }
});