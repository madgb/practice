var stat1 = $(".status1").parent().parent();
var stat2 = $(".status2").parent().parent();
var stat3 = $(".status3").parent().parent();

$(".nav1").click(
	function() {
		stat1.show();
		stat2.show();
		stat3.show();
		}
	)

$(".nav2").click(
	function() {
		stat1.show();
		stat2.hide();
		stat3.hide();
		}
	)
$(".nav3").click(
	function() {
		stat1.hide();
		stat2.show();
		stat3.hide();
		}
	)
$(".nav4").click(
	function() {
		stat2.hide();
		stat1.hide();
		stat3.show();
		}
	)

console.log($(".overlay").css("opacity"));