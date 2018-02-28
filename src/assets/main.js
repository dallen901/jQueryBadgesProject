$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/3553017.json',
    dataType: 'jsonp',
    success: function(response) {
      $.each(response.courses.completed, function(index, course) {
        var div = $('<div></div>').addClass('course');
        var header = $('<h3></h3>').text(course.title);
        var img = $('<img src= \"' + course.badge + '\"/>');
        var a = $('<a href=\"' + course.url + '\" target=\"_blank\" class=\"btn btn-primary\"></a>').text("See Course");
        console.log(course.url)
        div.append(header, img, a);
        $('#badges').append(div);
      });
    }
  });
});