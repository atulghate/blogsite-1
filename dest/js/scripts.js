$(document).ready(function(){$(".like-btn").on("click",function(){var s=$(this).data("id");$clicked_btn=$(this),$clicked_btn.hasClass("fa-thumbs-o-up")?action="like":$clicked_btn.hasClass("fa-thumbs-up")&&(action="unlike"),$.ajax({url:"view.php",type:"post",data:{action:action,post_id:s},success:function(s){res=JSON.parse(s),"like"==action?($clicked_btn.removeClass("fa-thumbs-o-up"),$clicked_btn.addClass("fa-thumbs-up")):"unlike"==action&&($clicked_btn.removeClass("fa-thumbs-up"),$clicked_btn.addClass("fa-thumbs-o-up")),$clicked_btn.siblings("span.likes").text(res.likes),$clicked_btn.siblings("span.dislikes").text(res.dislikes),$clicked_btn.siblings("i.fa-thumbs-down").removeClass("fa-thumbs-down").addClass("fa-thumbs-o-down")}})}),$(".dislike-btn").on("click",function(){var s=$(this).data("id");$clicked_btn=$(this),$clicked_btn.hasClass("fa-thumbs-o-down")?action="dislike":$clicked_btn.hasClass("fa-thumbs-down")&&(action="undislike"),$.ajax({url:"view.php",type:"post",data:{action:action,post_id:s},success:function(s){res=JSON.parse(s),"dislike"==action?($clicked_btn.removeClass("fa-thumbs-o-down"),$clicked_btn.addClass("fa-thumbs-down")):"undislike"==action&&($clicked_btn.removeClass("fa-thumbs-down"),$clicked_btn.addClass("fa-thumbs-o-down")),$clicked_btn.siblings("span.likes").text(res.likes),$clicked_btn.siblings("span.dislikes").text(res.dislikes),$clicked_btn.siblings("i.fa-thumbs-up").removeClass("fa-thumbs-up").addClass("fa-thumbs-o-up")}})})});