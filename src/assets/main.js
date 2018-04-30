$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/najibk.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log('response', response.courses.completed);
      response.courses.completed.forEach(function(item, index){
      	$course = $('<div />', {'class': 'course'}).appendTo($('#badges'));
      	$('<h3 />', {text: item.title}).appendTo($course);
        $('<img />', {src: item.badge}).appendTo($course)
      	$('<a />', {href: item.url, target: '_blank', 'class': "btn btn-primary", text: 'See Course'}).appendTo($course);

	  });
      
    }
  });

});
